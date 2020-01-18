const db = require("../models");
const router = require("express").Router();

// Add (post) an appointment for 
// router.use("/cms/uploadfile/hash43b4h234bhj", uploadController);
// root level of the router
router.route("/")
    .get((req, res) => {
        console.log(req.body);

        db.Images
        .find()
        .then(dbReturns => {
            console.log(dbReturns);
            res.json(dbReturns)
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