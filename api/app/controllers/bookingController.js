const {Booking, User} = require('../models');
const sendMail = require("../services/nodemail")

const bookingController = {

    findAll: async (_, response) => {
        try {
            const bookings = await Booking.findAll();
            for(const booking of bookings) {
              
              for(const field in booking) !booking[field] ? delete booking[field] : null
              
            }
            response.json(bookings);
        } catch(error) {
            response.status(500).send(error.message);
        }
    },

    findByUserId: async (request, response) => {
      try {
          const booking = await Booking.findByUserId(parseInt(request.token.id, 10));
          response.json(booking);
      } catch(error) {
          response.status(500).send(error.message);
      }
    },


    create: async (request, response) => {
      try {
        request.body.user_id = request.token.id
        const newBooking = new Booking(request.body).create()
        const user = await User.findById(request.token.id)
        await sendMail("ochaleto@gmail.com", "test", "test")
        

        response.status(201).json(newBooking);

      } catch (error) {
          response.status(500).send(error.message);
      }
    },

    update: async (request, response) => {
        try {
        
          await new Booking(request.body).update()
            response.status(204).json('Update done');

    } catch (error) {
            response.status(500).send(error.message);
    }
    },

    delete: async (request, response) => {
        try {
            const bookingID = parseInt(request.query.id, 10);
            await Booking.delete(bookingID);
            response.status(200).json(`booking with id ${bookingID} deleted`);
        } catch(error) {
            response.status(500).send(error.message);
        }
    }

}

module.exports = bookingController;
