const authRouter = require('express').Router()
const authController = require("../controllers/authController")

authRouter.post("/signin", authController.signin)
authRouter.post("/signup", authController.signup)
authRouter.post("/refresh_token", authController.refreshToken)

module.exports = authRouter
