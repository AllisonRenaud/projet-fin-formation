const cron = require("node-cron")
const {deleteAbandonedPaymentIntent} = require('../controllers/paymentController')

cron.schedule("0 */1 * * * *", deleteAbandonedPaymentIntent)