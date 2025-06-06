const Joi = require('joi');

const modelSchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': 'El nombre del modelo es requerido',
    'any.required': 'El nombre del modelo es requerido'
  }),
  brandId: Joi.string().required().messages({
    'string.empty': 'El ID de la marca es requerido',
    'any.required': 'El ID de la marca es requerido'
  }),
  brandName: Joi.string().required().messages({
    'string.empty': 'El nombre de la marca es requerido',
    'any.required': 'El nombre de la marca es requerido'
  })
});
module.exports={modelSchema}; 
