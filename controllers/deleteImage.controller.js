const db = require("../models");
const router = require("express").Router();
const authenticateUser = require("../utils/passport/authenticateUser").authenticateUser;

// return an array from the database
router.route("/").get((req, res) => {
    db.Images
        .find()
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
})

// update the array in a database
router.route("/put/:id").put(authenticateUser, (req, res) => {
    // console.log('req.body = ')
    // console.log(req.body);
    // console.log('_id =');
    // console.log(req.params.id);

    db.Images
        .findByIdAndUpdate(req.params.id, { $set: req.body })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
})



module.exports = router;