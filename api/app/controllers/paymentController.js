const {Offer} = require('../models');
const {createPaymentIntent, deletePaymentIntent} = require("../services/stripe");


const paymentController = {

  createPaymentIntent: async (request, response) => {
    try {

      const {offerID, booking_start, booking_end, customer_email} = request.body;
      const offer = await Offer.findById(offerID);
      if(!offer) return response.status(400).send("Bad request, no offer with " + offerID);

      const {client_secret} = await createPaymentIntent(
        {
          ...offer, 
          booking_start, 
          booking_end, 
          customer_email}
      );
      if(!client_secret) throw new Error("Stripe error, payment intent not created");
    
      response.json({ clientSecret: client_secret });

    } catch(error) {
        response.status(500).send(error.message);
    }
},

    updatePaymentIntent: async (request, response) => {

    },

    deletePaymentIntent: async (request, response) => {
      try {

        const {id} = request.body;
        const status = await deletePaymentIntent(id);
        if(!status) throw new Error(`Stripe ERROR: payment intent with id: ${id} not deleted`);
        
        response.json({message: `payment intent with id: ${id} status is now: ${status}`});

      } catch (error) {
        response.status(500).send(error.message);
      }


    },

    deleteAbandonedPaymentIntent: async () => {
        try {
          const {data} = await stripe.paymentIntents.list({created: {lt: Date.now() - 1000 * 60 * 60 * 24}});
          
          const cancelableList = data
          .filter(intent => intent.status === "requires_payment_method")
          .map(cancelableIntent => cancelableIntent.id)
          if(!cancelableList.lenght) return response.status(404).send("no payment intent pending");


          for(const cancelableIntent of cancelableList) {
            await stripe.paymentIntents.cancel(cancelableIntent, {cancellation_reason: "abandoned"})
          };
          console.log("pending payment intent older than 24 deleted");

        } catch (error) {
          console.log(error.message);
        }

    }

}

module.exports = paymentController;
