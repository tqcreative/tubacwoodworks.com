const db = require("../models");
const router = require("express").Router();
const authenticateUser = require("../utils/passport/authenticateUser").authenticateUser;

//////////
// GET request that fills axios calls.
//////////
router.route("/").get(function(req, res) {
    //console.log(req.query)
    db.Homepage
        .find()
        .then(dbModel => {
            // console.log(dbModel)
            res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
});

// update the array in a database
router.route("/text/:id").put(authenticateUser, (req, res) => {
    // console.log('req.body = ')
    // console.log('_id =');
    // console.log(req.params.id);

    db.Homepage
        .findByIdAndUpdate(req.params.id, { $set: req.body })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
})


module.exports = router;