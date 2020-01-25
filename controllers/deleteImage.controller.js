// const db = require("../models");
// const router = require("express").Router();

// // Update 
// router.route("/:index").put((req, res) => {
//     db.Customer
//         .findOneAndUpdate({ email: req.params.info }, {$set: { promoContactByEmail: false }}, req.body)
//         .then(dbModel => res.send("You have unsubscribed. sorta... we still got yo' data."))
//         .catch(err => res.status(422).json(err));
// })

// module.exports =  router;