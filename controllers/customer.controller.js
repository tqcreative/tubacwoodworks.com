const db = require("../models");
const router = require("express").Router();

// /api/customers routes

// signup for a quote
router.route("/signup").post(function(req, res){
    console.log(req.body);
    const { firstName, lastName, email, phoneNumber} = req.body;

    db.Customer.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber
    })
        .then(dbModel => {
            console.log(dbModel)
            res.json(dbModel)
            
        })
        .catch(err => res.status(422).json(err));
});


module.exports = router;
