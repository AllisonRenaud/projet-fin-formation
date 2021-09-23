const Joi = require('joi');

const joiPostalCode = Joi.extend(require('joi-postalcode'))

module.exports = {
    
    
    saveOffer: Joi.object({
        id: Joi.number(),
        title: Joi.string().max(50).trim().required(),
        body: Joi.string().trim().required(),
        zip_code: joiPostalCode.string().postalCode("FR").required(),
        city_name: Joi.string().max(50).trim().required(),
        country: Joi.string().max(40).trim().required(),
        street_name: Joi.string().trim().required(),
        street_number: Joi.string().alphanum().max(10).trim().required(),
        latitude: Joi.string().max(25).trim(),
        longitude: Joi.string().max(25).trim(),
        price_ht: Joi.number().positive().required(),
        tax: Joi.number().positive().required(),
        main_picture: Joi.string().uri().required(),
        galery_picture_1: Joi.string().uri(),
        galery_picture_2: Joi.string().uri(),
        galery_picture_3: Joi.string().uri(),
        galery_picture_4: Joi.string().uri(),
        galery_picture_5: Joi.string().uri(),
        location_id: Joi.number().positive().required()
    })

    
}
