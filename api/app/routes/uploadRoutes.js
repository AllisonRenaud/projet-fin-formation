const uploadRouter = require('express').Router()
const uploadController = require("../controllers/uploadController")


uploadRouter.route("/upload")
.get(uploadController.upload)






module.exports = uploadRouter
