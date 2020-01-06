const db = require("../models");
const router = require("express").Router();

//////////
// GET
//////////
router.route("/").get(function(req, res) {
    res.send(`You're doing it, Peter!`);
});

///////////
// POST
///////////
/////////////////
// ! WARNING ! //
/////////////////
router.route("/").post((req, res) => {
    // db.Portfolio
    //     .create(req.body)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
});

module.exports = router;