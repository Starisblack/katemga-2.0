const router = require ("express").Router();
const RealEstateListing = require ("../models/realEstate.model")



router.route("/").get((req, res) => {

    RealEstateListing.find()
    .then ( item => res.json (item))
    .catch(err => res.status(400).json("Error: " + err))

})


module.exports =router;