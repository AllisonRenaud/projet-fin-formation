const {User, Comment, Message, Booking} = require('../models');
const {stripe, bill} = require("../services/stripe2")


const paymentController = {

    pay: async (request, response) => {
        try {

          const {basket} = request.body
            
          const stripeInfos = await bill(basket)
          
          

          // const session = await stripe.checkout.sessions.create({
          //   payment_method_types: ['card'],
          //   mode: 'payment',
          //   line_items: stripeInfos,
            
          //   success_url: `http://localhost:3000/success.html`,
          //   cancel_url: `http://localhost:3000/cancel.html`

          // })

          


          // const paymentIntent = await stripe.paymentIntents.create({
          //   amount: session.amount_total,
          //   currency: 'eur',
          //   description: 'Ochalet - location de chalet premium',
          //   payment_method_types: ['card'],
          //   receipt_email: 'ochaleto@gmail.com'
          // });

          // response.json([session, paymentIntent])

          const intent = await stripe.paymentIntents.retrieve("pi_3JfRtgKVmN7kqniy1IpOMll2");
          response.json(intent)
         
        } catch(error) {
            response.status(500).send(error.message);
        }
    },

    get: async (request, response) => {
      console.log("bingo")
    }

    

}

module.exports = paymentController;
