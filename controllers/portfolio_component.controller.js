const db = require("../models");
const router = require("express").Router();

//////////
// GET
//////////
router.route("/").get(function(req, res) {
    //console.log(req.query)
    db.Portfolio
        .find()
        .then(dbModel => {
            // console.log(dbModel)
            res.json(dbModel)
        })
        .catch(err => res.status(422).json(err));
});

///////////
// POST
///////////
/////////////////
// ! WARNING ! //
/////////////////
// do not post to this route this is only for when you want to add to the database. 
router.route("/").post((req, res) => {
    // console.log(req.body);
    db.Portfolio
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

module.exports = router;