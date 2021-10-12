
const stripeKey = process.env.STRIPE_TEST_PRIVATE_KEY
const {Offer} = require('../models')

const stripe = require("stripe")(stripeKey)



module.exports = {
  createPaymentIntent: async (obj) => {
    
    try {
      return await stripe.paymentIntents.create({
        amount: obj.price_ht * obj.tax * 100,
        currency: 'eur',
        description: `x1 ${obj.title}`,
        statement_descriptor: `Ochalet-${obj.title}`.substr(0,22),
        metadata: {
          offer_id: obj.id,
          booking_start: obj.booking_start,
          booking_end: obj.booking_end
        },
        payment_method_types: ['card'],
        receipt_email: obj.customer_email
      });
    } catch (error) {
      throw error
      
    }
    
  },

  deletePaymentIntent: async (id) => {
    try {
      const {status} = await stripe.paymentIntents.cancel(id, {cancellation_reason: "requested_by_customer"});
      if(status !== "canceled") throw new Error(`Stripe ERROR: payment intent with id ${id} status is not cancelled`)
      else return status
    } catch (error) {
      throw error
    }
  }


}

