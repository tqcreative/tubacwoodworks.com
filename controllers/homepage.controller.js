const db = require("../models");
const router = require("express").Router();

//////////
// GET request that fills axios calls.
//////////
router.route("/").get(function(req, res) {
    //console.log(req.query)
    db.Homepage
        .find()
        .then(dbModel => {
            console.log(dbModel)
            res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
});


module.exports = router;