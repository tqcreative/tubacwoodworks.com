const fs = require('fs');
const AWS = require('aws-sdk');

const ID = 'AKIAIU2CSLBSXJXWVPZQ';
const SECRET = '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';

const BUCKET_NAME = 'bobwehadababyitsaboy';

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