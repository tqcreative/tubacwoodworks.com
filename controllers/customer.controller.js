const db = require("../models");
const router = require("express").Router();
const EmailAPI = require("../utils/api/EmailAPI");

// /api/customers routes

// Signup request for a quote - don't need to be logged in
router.route("/signup").post((req, res) => {
    const {firstName, lastName, email, phoneNumber} = req.body;

    db.Customer
        .create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber
        })
        .then(dbModel => {
            console.log(dbModel);
            res.json(dbModel);
            EmailAPI.sendSignupEmail(email, firstName, lastName).then(info=>{
                console.log(info);
            }).catch(err=>{
                console.log(err);
            });
        })
        .catch(err => {
            console.log(err);
            res.status(420).json(err)
        });
});

module.exports = router;
