const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const authenticateUser = require("../utils/passport/authenticateUser")
  .authenticateUser; //checks the incoming request to make sure the user object is valid
const fs = require("fs");
const AWS = require("aws-sdk");
require("dotenv").config();

// =================================== //
// =====   Upload Files to AWS   ===== //
// =================================== //
let floatingFileName = "error";

///////////////////////////////////////////////////////////////////////////////

router.route("/filename").post(authenticateUser, (req, res) => {
  floatingFileName = req.body.body.toLowerCase().split(".")[0];
  res.send("name collected");
});

router.route("/upload").post(authenticateUser, (req, res) => {
  //   console.log('heroku test: ');
  //   console.log(floatingFileName);
  //   console.log(__dirname + '/images');
  //   console.log('/app/images');

  // Set The Storage Engine
  const storage = multer.diskStorage({
    // destination: './images',
    // destination: function(req, file, cb) {
    // 	cb(null, `${__dirname}/images`);
    // 	console.log(`Storage post to ${__dirname}/images`)
    destination: `${__dirname}/../images`,
    filename: function (req, file, cb) {
      // cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
      cb(null, file.fieldname + path.extname(file.originalname));
      // console.log(`!!! ${file.originalname} !!!`);
      // console.log(`!!! ${file.fieldname} !!!`);
    },
  });

  // Check File Type
  function checkFileType(file, cb) {
    // Allowed ext
    // const filetypes = /jpeg|jpg|png|gif/;  // this code is to restrict what kind of file types come to the server.
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Please upload a jpeg/jpg/png/gif file only.");
    }
  }

  let upload = multer({
    storage: storage,
    limits: { fileSize: 80000000 },
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
    },
  }).single(floatingFileName);

  upload(req, res, (err) => {
    if (err) {
      res.send({ msg: err });
    } else {
      if (req.file == undefined) {
        res.send({
          msg: "Error: No File Selected!",
        });
      } else {
        // params for AWS bucket
        const ID = process.env.S3_ID;
        const SECRET = process.env.S3_SECRET;
        const BUCKET_NAME = process.env.BUCKET_NAME;

        console.log(ID);
        console.log(SECRET);
        console.log(BUCKET_NAME);

        const s3 = new AWS.S3({
          accessKeyId: ID,
          secretAccessKey: SECRET,
        });

        const uploadFile = (fileName) => {
          // Read content from the file
          const fileContent = fs.readFileSync(fileName);

          // Setting up S3 upload parameters
          const params = {
            ACL: "public-read",
            Bucket: BUCKET_NAME,
            Key: `${req.file.filename.toLowerCase()}`, // File name you want to save as in S3
            Body: fileContent,
          };

          // Uploading files to the bucket
          try {
            s3.upload(params, function (err, data) {
              if (err) {
                throw err;
              }
              // console.log(`File uploaded successfully. ${data.Location}`);
              res.send({
                msg: "uploaded",
                file: `${req.file.filename}`,
              });
            });
          } catch (error) {
            console.log("error");
            res.send("error");
          }
        };

        // select the file path the image is downloaded to
        let fileLocation = path.join(
          __dirname,
          `../images/${req.file.filename}`
        );

        // needs the following
        // if req.file.filename is not at that dirname then target ../images/error.jpg;

        // call the upload function with the images location
        uploadFile(fileLocation);
      }
    }
  });
});

module.exports = router;
