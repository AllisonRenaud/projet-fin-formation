const Joi = require('joi');


module.exports = {
    
    
    createBooking: Joi.object({
        reservation_start: Joi.date().required(),
        reservation_end: Joi.date().required(),
        message: Joi.string().trim(),
        offer_id: Joi.number().positive().required(),
    }),

    updateBooking: Joi.object({
        id: Joi.number().positive().required(),
        reservation_start: Joi.date(),
        reservation_end: Joi.date(),
        message: Joi.string().trim(),
        offer_id: Joi.number().positive().required(),
        reservation_status: Joi.boolean(),
        user_id: Joi.number().positive().required()
    }),

    deleteBooking: Joi.object({
      id: Joi.number().positive().required()
    })


    
}
