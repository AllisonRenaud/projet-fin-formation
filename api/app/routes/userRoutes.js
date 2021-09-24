const userRouter = require('express').Router()
const userController = require("../controllers/userController")
const {isAdmin} = require('../services/authJwt')

userRouter.route("/user")
// .get(isAdmin, userController.findAll)
.get(userController.findById)
.post(userController.save)
.delete(userController.delete)




module.exports = userRouter
