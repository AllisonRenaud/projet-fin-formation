const offerRouter = require('express').Router()
const offerController = require("../controllers/offerController")


offerRouter.route("/offers")
.get(offerController.findAllorFilter)
.post(offerController.create)

offerRouter.route("/offers/:id")
.get(offerController.findById)



module.exports = offerRouter
