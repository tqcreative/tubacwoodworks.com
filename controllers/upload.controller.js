const db = require("../models");
const router = require("express").Router();

// Add (post) an appointment for 
// router.use("/cms/uploadfile/hash43b4h234bhj/:id", uploadController);
// root level of the router
router.route("/:id")
    .post((req, res) => {
        //console.log(req.params.id);
        let imageNameToBeAddedToTheArray = req.params.id;
        console.log(imageNameToBeAddedToTheArray);
        db.Images
        .find()
        .then(dbReturns => {
            // console.log(dbReturns[0]._id);
            console.log(dbReturns);
            let thisArrayId = dbReturns[0]._id;

            db.Images.update(
                { $push: { imageArray: [imageNameToBeAddedToTheArray   ]}}
            )
            .then(
                lastCall => {
                    console.log("worked?")
                }
            )
            .catch( err => {
                res.send('rly?')
            })




            //imageNameToBeAddedToTheArray; can be used to add to the database.

            // console.log(dbReturns);
            // db.Images.findOneAndUpdate(thisArrayId, { $push: { imageArray: imageNameToBeAddedToTheArray } })

            // res.json(dbReturns)

            //{ $push: { <field1>: <value1>, ... } }


        })
        .catch(err => {
                res.send('do you even code bah?')
            })
        // const appointment = req.body;

        // db.Appointment.create(appointment)
        //     .then(apptRes => {
        //         console.log(apptRes);
        //         db.Customer.findByIdAndUpdate(req.params.id, { $push: { appointments: apptRes._id } })
        //             .then(custRes => {
        //                 console.log(custRes);
        //                 res.json(apptRes);
        //             })
        //             .catch(err => {
        //                 res.status(500).json(err);
        //             })
        //     })
        //     .catch(err => {
        //         res.status(500).json(err);
        //     })

        res.send("Got it!!!")
    })



module.exports = router;