const db = require("../models");
const router = require("express").Router();
const authenticateUser = require("../utils/passport/authenticateUser")
  .authenticateUser;

// return an array from the database
router.route("/").get((req, res) => {
  db.Images.find()
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

// update the array in a database
router.route("/put/:id").put(authenticateUser, (req, res) => {
  // console.log('req.body = ')
  console.log(req.body);
  console.log('_id =' + req.params.id);
  // console.table(req.params.id);
//   console.log("===================");
//   console.log(`Requesting to replace the table at ID: ${req.params.id}`);

//   db.Images.find({"_id" : req.params.id}).then((data) => console.log(data));

    db.Images.findByIdAndUpdate(req.params.id, { $set: req.body })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));

    // db.Images.findOneAndUpdate(req.params.id, { $set: req.body })
    //   .then((dbModel) => res.json(dbModel))
    //   .catch((err) => res.status(422).json(err));
});

module.exports = router;
