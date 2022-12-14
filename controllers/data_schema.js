const Joi = require('joi');

const dataSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    user_name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});


module.exports =dataSchema;
