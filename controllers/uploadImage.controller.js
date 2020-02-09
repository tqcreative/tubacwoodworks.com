const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const authenticateUser = require("../utils/passport/authenticateUser").authenticateUser;  //checks the incoming request to make sure the user object is valid
const fs = require('fs');
const AWS = require('aws-sdk');

// =================================== //
// =====   Upload Files to AWS   ===== //
// =================================== //

let floatingFileName = "error";

///////////////////////////////////////////////////////////////////////////////

router.route('/filename').post(authenticateUser, (req, res) => {
		floatingFileName = req.body.body.toLowerCase().split(".")[0];
		res.send('name collected');
});

router.route('/upload').post(authenticateUser, (req, res) => {
		
	// console.log('heroku test: ');
	// console.log(floatingFileName);
	// console.log(__dirname + '/images');
	// console.log('/app/images');

	// Set The Storage Engine
	const storage = multer.diskStorage({
		// destination: './images',
		// destination: function(req, file, cb) {
		// 	cb(null, `${__dirname}/images`);
		// 	console.log(`Storage post to ${__dirname}/images`)
		destination:  `${__dirname}/../images`,
		filename: function (req, file, cb) {
			// cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
			cb(null, file.fieldname + path.extname(file.originalname));   
			// console.log(`!!! ${file.originalname} !!!`);
			// console.log(`!!! ${file.fieldname} !!!`);

			

		}
    });

	// Check File Type
	function checkFileType(file, cb) {
		// Allowed ext
		// const filetypes = /jpeg|jpg|png|gif/;  // this code is to restrict what kind of file types come to the server.
		const filetypes = /jpeg|jpg|png|gif/;
		// Check ext
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
		// Check mime
		const mimetype = filetypes.test(file.mimetype);

		if (mimetype && extname) {
			return cb(null, true);
		} else {
			cb('Please upload a jpeg/jpg/png/gif file only.');
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


module.exports = router;