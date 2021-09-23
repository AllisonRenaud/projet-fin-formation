const authRouter = require('express').Router()
const authController = require("../controllers/authController")

authRouter.post("/signin", authController.login)
authRouter.post("/signup", authController.register)

module.exports = authRouter
