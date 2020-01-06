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

// Get the list of current customer leads
router.route("/leads").get((req,res) => {
    db.Customer.find({isLead: true},(err,data)=>{
        if(err) return res.status(500).json(err);
        res.json(data);
    })
});

// Update an existing customer's data
router.route("/id/:id").put((req,res)=>{
    db.Customer.findByIdAndUpdate(req.params.id,req.body.custObj)
    .then(dbRes=>{
        res.json(dbRes);
    })
    .catch(err=>{
        res.status(500).json(err);
    })
});


module.exports = router;
