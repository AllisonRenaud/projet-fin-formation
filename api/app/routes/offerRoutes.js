const offerRouter = require('express').Router()
const offerController = require("../controllers/offerController")


offerRouter.route("/offers")
.get(offerController.findAllorFilter)

offerRouter.route("/offers/:id")
.get(offerController.findById)



module.exports = offerRouter
