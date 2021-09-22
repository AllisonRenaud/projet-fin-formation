const Joi = require('joi');


module.exports = {
    
    
    saveMessage: Joi.object({
        id: Joi.number(),
        reservation_start: Joi.date(),
        reservation_end: Joi.date(),
        message: Joi.string().trim(),
        user_id: Joi.number().positive().required(),
        offer_id: Joi.number().positive().required(),
        reservation_status: Joi.boolean()
    })

    
}
