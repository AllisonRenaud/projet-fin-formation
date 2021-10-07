const {Offer, Booking} = require('../models');

const offerController = {

    findAllorFilter: async (request, response) => {
        try {
            if(request.query.title){

              const offers = await Offer.findByTitle(request.query.title);
              for(const offer of offers) {
                for(const field in offer) !offer[field] ? delete offer[field] : null
                
              }
              response.json(offers);
              
            }else if(request.query.location_id) {

              const offers = await Offer.findByLocation(request.query.location_id);
              for(const offer of offers) {
                for(const field in offer) !offer[field] ? delete offer[field] : null
              }
              response.json(offers);

            }else {
              const offers = await Offer.findAll();
              for(const offer of offers) {
                for(const field in offer) !offer[field] ? delete offer[field] : null
              }
              response.json(offers);
            }
            
        } catch(error) {
            response.status(500).send(error.message);
        }
    },

    findById: async (request, response) => {
      try {
          const offer = await Offer.findById(parseInt(request.params.id, 10));
          const bookings = await Booking.findByOffer(parseInt(request.params.id, 10))
          

          response.json({offer, bookings});
      } catch(error) {
          response.status(500).send(error.message);
      }
    },


  create: async (request, response) => {
      try {
        console.log(request.body)
        const newOffer = await new Offer(request.body).create()
        if(!newOffer) throw new Error('database create offer error')
        console.log(newOffer, '$$$$$$$$$$$$$$')
        response.status(201).json({message: "offer created"});

      } catch (error) {
          response.status(500).send(error.message);
      }
  },

  update: async (request, response) => {
    try {

        await new Offer(request.body).update()
         
        // await Offer.update(request.body.id)
        response.status(204).json('Update done');

    } catch (error) {
        response.status(500).send(error.message);
    }
  },

  

  delete: async (request, response) => {
      try {
          const offerID = parseInt(request.query.id, 10);
          const confirmation = await Offer.delete(offerID);
          if(!confirmation) return response.status(404).json({message: `no offer found with id ${offerID}`})
          response.status(200).json(`Offer with id ${offerID} deleted`);
      } catch(error) {
          response.status(500).send(error.message);
      }
  }

}

module.exports = offerController;
