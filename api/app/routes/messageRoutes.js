const messageRouter = require('express').Router()
const messageController = require("../controllers/messageController")


messageRouter.route("/messages")
.get(messageController.findAll)
.post(messageController.save)

messageRouter.route("/messages/:id")
.get(messageController.findById)
.delete(messageController.delete)

module.exports = messageRouter
