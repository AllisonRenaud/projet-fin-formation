const Joi = require('joi');


module.exports = {
    
    
    createPaymentIntent: Joi.object({
        offerID: Joi.number().positive().required(),
        booking_start: Joi.date().required(),
        booking_end: Joi.date().required(),
        customer_email: Joi.string().email().required()
    }),

    updatePaymentIntent: Joi.object({
      offerID: Joi.number().positive(),
      booking_start: Joi.date(),
      booking_end: Joi.date(),
      customer_email: Joi.string().email()
    }),

    deletePaymentIntent: Joi.object({
      id: Joi.string().token().required()
    })

    

    
}
