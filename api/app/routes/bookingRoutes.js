const bookingRouter = require('express').Router()
const bookingController = require("../controllers/bookingController")


bookingRouter.route("/bookings")
.get(bookingController.findAll)
.post(bookingController.save)

bookingRouter.route("/bookings/:id")
.get(bookingController.findById)
.delete(bookingController.delete)

module.exports = bookingRouter
