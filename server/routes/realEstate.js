const router = require("express").Router();
const RealEstateDB = require("../models/RealEstateDB.js");

router.route("/").get((req, res) => {
  RealEstateDB.find()
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
