const offerRouter = require('express').Router()
const offerController = require("../controllers/offerController")


offerRouter.route("/offers")
.get(offerController.findAll)
.post(offerController.save)

offerRouter.route("/offers/:id")
.get(offerController.findById)
.delete(offerController.delete)

module.exports = offerRouter
