const Joi = require('joi');


module.exports = {
    
    
    createPaymentIntent: Joi.object({
        offerID: Joi.number().positive().required(),
        booking_start: Joi.string().required(),
        booking_end: Joi.string().required(),
        customer_email: Joi.string().email().required()
    }),

    updatePaymentIntent: Joi.object({
      
    }),

    deletePaymentIntent: Joi.object({
      id: Joi.string().token().required()
    })

    

    
}
