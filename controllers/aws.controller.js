const fs = require('fs');
const AWS = require('aws-sdk');
require("dotenv").config();

// params for AWS bucket
const ID = process.env.S3_ID;
const SECRET = process.env.S3_SECRET;
const BUCKET_NAME = process.env.BUCKET_NAME;

const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const uploadFile = (fileName) => {
    console.log("testing")
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);
    console.log("testing")

    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: 'bobsyouruncle.jpg', // File name you want to save as in S3
        Body: fileContent
    };
    console.log("testing")

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
    console.log("fin")

};

uploadFile('./bish.jpg');

//working as of 12/27/2020 -- 2/8/2020 (last modifed to target new bucket.)