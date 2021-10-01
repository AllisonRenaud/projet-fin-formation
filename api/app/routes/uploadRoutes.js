const uploadRouter = require('express').Router()
const uploadController = require("../controllers/uploadController")


uploadRouter.route("/upload")
.post(uploadController.upload)
.delete(uploadController.delete)

module.exports = uploadRouter
