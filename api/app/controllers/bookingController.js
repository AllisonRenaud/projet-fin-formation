const { json } = require('express');
const {Booking} = require('../models');

const bookingController = {

    findAll: async (_, response) => {
        try {
            const bookings = await Booking.findAll();
            response.json(bookings);
        } catch(error) {
            response.status(500).send(error.message);
        }
    },

    findById: async (request, response) => {
      try {
          const booking = await Booking.findById(parseInt(request.params.id, 10));
          response.json(booking);
      } catch(error) {
          response.status(500).send(error.message);
      }
  },

  save: async (request, response) => {
      try {
          const booking = new Booking(request.body);
          const newBooking = await booking.save();
          if (newBooking) {
              //on a une valeur de retour, il s'agit d'un INSERT
              response.status(201).json(newBooking);
          } else {
              //pas de valeur de retour, c'était un UPDATE
              response.status(204).json('Update done');
          }
      } catch (error) {
          response.status(500).send(error.message);
      }
  },

  delete: async (request, response) => {
      try {
          const bookingID = parseInt(request.params.id, 10);
          await Booking.delete(bookingID);
          response.status(200).json(`booking with id ${bookingID} deleted`);
      } catch(error) {
          response.status(500).send(error.message);
      }
  }

}

module.exports = bookingController;
