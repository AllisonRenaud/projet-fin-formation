const Joi = require('joi');


module.exports = {
    
    
    saveComment: Joi.object({
        id: Joi.number(),
        body: Joi.string().trim().required(),
        note: Joi.number().min(0).max(5).positive().required(),
        user_id: Joi.number().positive().required(),
        offer_id: Joi.number().positive().required()
    })

    
}

