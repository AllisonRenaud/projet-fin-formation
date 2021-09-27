const messageRouter = require('express').Router()
const messageController = require("../controllers/messageController")
const {isAdmin} = require('../services/authJwt')

messageRouter.route("/messages")
.get(messageController.findByUserId)
.post(messageController.create)





module.exports = messageRouter
