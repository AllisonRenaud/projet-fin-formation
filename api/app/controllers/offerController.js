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
          const offer = await Offer.findById(parseInt(request.token.id, 10));
          response.json(offer);
      } catch(error) {
          response.status(500).send(error.message);
      }
    },

  create: async (request, response) => {
      try {
        
        const newOffer = new Offer(request.body).create()
        response.status(201).json(newOffer);

      } catch (error) {
          response.status(500).send(error.message);
      }
  },

  update: async (request, response) => {
    try {
      
        await User.update(request.body)
        response.status(204).json('Update done');

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
