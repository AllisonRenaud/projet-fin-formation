const Joi = require('joi');


module.exports = {
    
    
    saveMessage: Joi.object({
        id: Joi.number(),
        reservation_start: Joi.date(),
        reservation_end: Joi.date(),
        nb_persons: Joi.number().positive(),
        body: Joi.string().trim().required(),
        offer_id: Joi.number().positive().required(),
        message_status: Joi.boolean()
    })

    
}
