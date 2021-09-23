const authRouter = require('express').Router()
const authController = require("../controllers/authController")

authRouter.post("/signin", authController.signin)
authRouter.post("/signup", authController.singup)

module.exports = authRouter
