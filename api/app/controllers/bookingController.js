const { json } = require('express');
const {booking} = require('../models');

const bookingController = {

    findAll: async (_, response) => {
        try {
            const bookings = await booking.findAll();
            response.json(bookings);
        } catch(error) {
            response.status(500).send(error.message);
        }
    },

    findById: async (request, response) => {
      try {
          const booking = await booking.findById(parseInt(request.params.id, 10));
          response.json(booking);
      } catch(error) {
          response.status(500).send(error.message);
      }
  },

  save: async (request, response) => {
      try {
          const booking = new booking(request.body);
          const newbooking = await booking.save();
          if (newbooking) {
              //on a une valeur de retour, il s'agit d'un INSERT
              response.status(201).json(newbooking);
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
          await booking.delete(bookingID);
          response.status(200).json(`booking with id ${bookingID} deleted`);
      } catch(error) {
          response.status(500).send(error.message);
      }
  }

}

module.exports = bookingController;
