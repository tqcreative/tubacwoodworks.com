// const db = require("../models");
// const router = require("express").Router();
// const multer = require('multer');
// const path = require('path');


// // ========================= //
// // ====== Upload Files  ==== //
// // ========================= //


// const setStorage = multer.diskStorage({
// 	destination: '/images',
// 	filename: function(req, file, callBack){
// 		console.log(file);
// 		callBack(null, file.fieldname + 'testing' + path.extname(file.originalname));
// 	}

// 	// be sure to add the file name to the database via axios
// });

// // ==== init upload ==== //

// const upload = multer({
//     storage: setStorage,
//     limits:{filesize: 1000000}
// }).single('myImage');


// // Create
// router.route("/").post((req, res) => {
//     console.log(req.body);
//     upload(req, res, (err) => {
//         if(err){
//             console.log(err)
//             res.send("unable to load file.");
//         } else {
//             console.log("+++++++++++++++++++++++");
//             console.log(req.body);
//             console.log("+++++++++++++++++++++++");
//             res.send("no issues found with file.")
//         }
//     })
// });

// module.exports = router;
