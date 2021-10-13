const paymentRouter = require('express').Router();
const paymentController = require("../controllers/paymentController");


paymentRouter.route("/payment_intent")
.post(paymentController.createPaymentIntent)
.patch(paymentController.updatePaymentIntent)
.delete(paymentController.deletePaymentIntent);

paymentRouter.route("/intents_list")
.delete(paymentController.deleteAbandonedPaymentIntent);


module.exports = paymentRouter;
