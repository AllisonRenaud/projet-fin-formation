const paymentRouter = require('express').Router()
const paymentController = require("../controllers/paymentController")


paymentRouter.route("/payment")
.post(paymentController.pay)





module.exports = paymentRouter
