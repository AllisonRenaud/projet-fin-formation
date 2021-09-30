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

          // response.json(session)



          // const paymentIntent = await stripe.paymentIntents.create({
          //   amount: session,
          //   currency: 'eur',
          //   payment_method_types: ['card'],
          //   receipt_email: 'jenny.rosen@example.com',
          // });
       
          
          // console.log(intent , intent.charges.data )
          // const {url, id} = session
          
       
          // const paymentIntent = await stripe.paymentIntents.create({
          //   amount: 1000,
          //   currency: 'eur',
          //   description: 'Ochalet - location de chalet premium',
          //   payment_method: 'cus_KJz9njOYn2sfcT',
          //   payment_method_types: ['card'],
          //   confirm: true,
          //   receipt_email: 'ochaleto@gmail.com'
          // });


          // response.json(paymentIntent)

        
         
        } catch(error) {
            response.status(500).send(error.message);
        }
    },

    get: async (request, response) => {
      console.log("bingo")
    }

    

}

module.exports = paymentController;
