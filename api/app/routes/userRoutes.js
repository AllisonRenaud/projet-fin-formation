const userRouter = require('express').Router()
const userController = require("../controllers/userController")


userRouter.route("/user")
.get(userController.findAll)
.post(userController.save)

userRouter.route("/user/:id")
.get(userController.findById)
.delete(userController.delete)

module.exports = userRouter
