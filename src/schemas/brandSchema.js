const Joi = require('joi');

const brandSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'El nombre de la marca es requerido',
    'any.required': 'El nombre de la marca es requerido'
  })
});

module.exports ={brandSchema};