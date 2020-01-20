// Loading evnironmental variables here
if (process.env.NODE_ENV !== 'production') {
	// console.log('loading dev environments')
	require('dotenv').config()
}
require('dotenv').config()


// ======================= //
// ===== Dependencies ==== //
// ======================= //


const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('./utils/passport');
const mongoose = require('mongoose');
const path = require('path');
const app = express()
const routes = require("./controllers");
const multer = require("multer");

// ======================= //
// ======== Ports ======== //
// ======================= //


const PORT = process.env.PORT || 8080


// ===================== //
// ===== Middleware ==== //
// ===================== //


app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/projectthree",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}).catch(err => {
		console.log(err);
	})

app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: mongoose.connection }),
		resave: false,
		saveUninitialized: false
	})
)

// =================== //
// ===== Passport ==== //
// =================== //


app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser


// =================================== //
// ==== if its production environment! //
// =================================== //


if (process.env.NODE_ENV === "production") {
	console.log("Prod Mode Enabled")
	app.use(express.static("client/build"));
}


// =================================== //
// ====== Routing & Controllers ====== //
// =================================== //


app.use(routes);


// =================================== //
// ======      Upload Files     ====== //
// =================================== //

let floatingFileName = "error";

///////////////////////////////////////////////////////////////////////////////

app.post('/cms/GD8PQX3UV18999AARONWITHANEY/filename', (req, res) => {
		floatingFileName = req.body.body.toLowerCase().split(".")[0];
		res.send('name collected');
});

app.post('/cms/GD8PQX3UV18999AARONWITHANEY/upload', (req, res) => {
		
	console.log('heroku test: ')
	console.log(floatingFileName);


	// Set The Storage Engine
	const storage = multer.diskStorage({
		// destination: './images',
		destination: function(req, file, cb) {
			cb(null, __dirname + '/images')
		},
		filename: function (req, file, cb) {
			// cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
			cb(null, file.fieldname + path.extname(file.originalname));   
		}
	});

	// Check File Type
	function checkFileType(file, cb) {
		// Allowed ext
		// const filetypes = /jpeg|jpg|png|gif/;  // this code is to restrict what kind of file types come to the server.
		const filetypes = /jpeg|jpg/;
		// Check ext
		const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
		// Check mime
		const mimetype = filetypes.test(file.mimetype);

		if (mimetype && extname) {
			return cb(null, true);
		} else {
			cb('Error: Images Only!');
		}
	}

	let upload = multer({
		storage: storage,
		limits: { fileSize: 80000000 },
		fileFilter: function (req, file, cb) {
			checkFileType(file, cb);
		}
	}).single(floatingFileName);

	upload(req, res, (err) => {
		if (err) {
			res.send({
				msg: err
			});
		} else {
			if (req.file == undefined) {
				res.send({
					msg: 'Error: No File Selected!'
				});
			} else {
				res.send({
					msg: 'uploaded',
					file: `/cms/images/${req.file.filename}`
				});
			}
		}
	});
});


// ==================== //
// ====== Images ====== //
// ==================== //


app.get("/cms/images/:fullname", (req, res) => {
	/* This component will pull from the images route on the root level.
	make sure the full name being entered is the tail of the image file. example hero.jpg or cat.png */
	try {
		imageName = req.params.fullname;
		// !!!! WARNING !!!! //
		// include switch statmetn for .jpg .jpgs .png and .something else.
		res.sendFile(path.join(__dirname, `./images/${imageName}`));
	} catch (error) {
		res.sendFile(path.join(__dirname, `./client/src/pages/Home/`));
	};
});


// ======================= //
// ====== React App ====== //
// ======================= //

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// ========================= //
// ====== Error handler ==== //
// ========================= //


app.use(function (err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
})


// ========================== //
// ==== Starting Server ===== //
// ========================== //


app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
