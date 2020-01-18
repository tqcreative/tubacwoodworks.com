const db = require("../models");
const router = require("express").Router();
const authenticateUser = require("../utils/passport/authenticateUser").authenticateUser;

// /api/users routes to interact with users (employees)

// /api/users base route
router.route('/').
get(authenticateUser,(req,res)=>{
    db.User.find({},{"local.password":0})
    .then(dbRes=>{
        console.log(dbRes);
        res.json(dbRes);
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json(err);
    })
});


// get all appts for user indicated by id param
router.route('/:id/appts').get(authenticateUser,(req,res)=>{
    db.Appointment.find({assignedTo: req.params.id}).populate("customer", ["_id","firstName","lastName","email","phoneNumber"]).then(dbRes=>{
        console.log(dbRes);
        res.json(dbRes);
    })
});

module.exports = router;