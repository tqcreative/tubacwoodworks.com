const db = require("../models");
const router = require("express").Router();
const authenticateUser = require("../utils/passport/authenticateUser").authenticateUser;

// /api/users routes to interact with users (employees)

// /api/users base route
router.route('/')
.get(authenticateUser,(req,res)=>{
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
router.route('/:id/appts')
.get(authenticateUser,(req,res)=>{
    db.Appointment.find({assignedTo: req.params.id}).populate("customer", ["_id","firstName","lastName","email","phoneNumber"]).then(dbRes=>{
        console.log(dbRes);
        res.json(dbRes);
    })
});


// add a new user to the db, existing user must be logged in to add a record
// logged in user must also be admin
router.route('/')
.post(authenticateUser,(req,res)=>{
    const { username, password, firstName, lastName, role } = req.body;

    if(req.user.role != "admin") return res.status(401).json({message: "You do not have sufficient privileges to add a user"});
    db.User.create({ local:{username, password}, firstName, lastName, role })
    .then(userRes=>{
        if(!userRes) return res.status(400).json({message: "User not successfully created"});
        res.json({
            message:"User successfully created",
            username: userRes.local.username,
            role: userRes.role
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json(err)
    })
});

module.exports = router;