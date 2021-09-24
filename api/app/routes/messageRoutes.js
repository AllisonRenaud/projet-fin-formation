const messageRouter = require('express').Router()
const messageController = require("../controllers/messageController")
const {isAdmin} = require('../services/authJwt')

messageRouter.route("/messages")
.get(isAdmin, messageController.findAll)
.post(messageController.save)

messageRouter.route("/messages/:id")
.get(messageController.findById)
.delete(messageController.delete)

module.exports = messageRouter
