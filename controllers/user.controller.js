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

module.exports = router;