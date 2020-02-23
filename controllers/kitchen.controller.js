const db = require("../models");
const router = require("express").Router();

//////////
// GET
//////////
router.route("/").get(function(req, res) {
    //console.log(req.query)
    db.Images
        .find()
        .then(dbModel => {
            // console.log(dbModel)
            res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
});


module.exports = router;