const db = require("../models");
const router = require("express").Router();
const EmailAPI = require("../utils/api/EmailAPI");
const authenticateUser = require("../utils/passport/authenticateUser").authenticateUser;
const moment = require('moment');

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

//*******************************************************************************
//*
//* Protected Routes - user must be logged in
//*
//*******************************************************************************

// Get the list of current customer leads
router.route("/leads/contact").get(authenticateUser,(req,res) => {
    db.Customer.find({isLead: true},(err,data)=>{
        if(err) return res.status(500).json(err);
        res.json(data);
    })
});

router.route("/leads/summary/last7").get(authenticateUser,(req,res) => {
    let momentObj = moment().subtract(7-1,'days').startOf('day');
    let date = momentObj.toDate();

    try{
        db.Customer.aggregate([
            { $match: { createdAt: { $gte: date } } },
            {
                $group:{
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt"} },
                    count:{$sum:1}
                }
            },
            { $sort: { _id: 1} }
        ],(err,data)=>{
            //Pre-fill an array for every day of the week since db will only return new customers
            //If there were no customers for that day there will be missing data
            const dateArr = [];
            for(let i=0; i < 7; i++){
                let tempDate = new moment(date).add(i,'days').startOf('day');
                let stringDate = tempDate.format('YYYY-MM-DD');
                dateArr.push({date: stringDate, count: 0})   
            }

            //Update the pre-filled array with counts for days that have data present
            data.forEach(element => {
                let obj = dateArr.find((o, i) => {
                    if (o.date === element._id) {
                        dateArr[i] = { date: element._id, count: element.count };
                        return true; // stop searching
                    }
                });                    
            });

            if(err) return res.status(500).json(err);
            res.json(dateArr);
        });    
    }
    catch(err){
        res.status(500).json(err);
    }
});

// Update an existing customer's data
router.route("/id/:id")
.put(authenticateUser,(req,res)=>{
    db.Customer.findByIdAndUpdate(req.params.id,req.body.custObj)
    .then(dbRes=>{
        res.json(dbRes);
    })
    .catch(err=>{
        res.status(500).json(err);
    })
})
// Get an existing customer's data
.get(authenticateUser,(req,res)=>{
    db.Customer.findById(req.params.id,(err,data)=>{
        if(err) return res.status(500).json(err);
        if(!data) return res.status(404).json({message: "ID not found", _id: req.params.id});
        res.json(data);
    })
})
;


module.exports = router;
