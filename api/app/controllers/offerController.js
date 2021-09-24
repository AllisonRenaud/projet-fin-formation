const {Offer} = require('../models');

const offerController = {

    findAllOrFilter: async (request, response) => {
        try {
            if(!request.query.title){
              const offers = await Offer.findAll();
              response.json(offers);
            }else {
              const offers = await Offer.findByTitle(request.query.title);
              response.json(offers);
            }
            
        } catch(error) {
            response.status(500).send(error.message);
        }
    },

    findById: async (request, response) => {
      try {
          const offer = await Offer.findById(parseInt(request.params.id, 10));
          response.json(offer);
      } catch(error) {
          response.status(500).send(error.message);
      }
    },

  save: async (request, response) => {
      try {
          const offer = new Offer(request.body);
          const newOffer = await offer.save();
          if (newOffer) {
              //on a une valeur de retour, il s'agit d'un INSERT
              response.status(201).json(newOffer);
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
          const offerID = parseInt(request.params.id, 10);
          await Offer.delete(offerID);
          response.status(200).json(`Offer with id ${offerID} deleted`);
      } catch(error) {
          response.status(500).send(error.message);
      }
  }

}

module.exports = offerController;
