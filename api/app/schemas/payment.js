const Joi = require('joi');


module.exports = {
    
    
    createPayment: Joi.object({
        basket: Joi.array().min(1).required()
        

    }),

    

    
}
