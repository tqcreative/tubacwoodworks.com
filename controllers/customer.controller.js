const db = require("../models");
const router = require("express").Router();

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
        })
        .catch(err => {
            console.log(err);
            res.status(422).json(err)
        });
});

module.exports = router;
