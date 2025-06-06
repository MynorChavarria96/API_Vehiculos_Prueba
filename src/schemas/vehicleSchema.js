
const Joi = require('joi');

const vehicleSchema = Joi.object({
  name: Joi.string().required()
    .messages({
      'string.empty': 'El nombre es requerido',
      'any.required': 'El nombre es requerido'
    }),
  plate: Joi.string()
    .required()
    .messages({
      'string.empty': 'La placa es requerida',
      'any.required': 'La placa es requerida'
    }),
  color: Joi.string().required()
    .messages({
      'string.empty': 'El color es requerido',
      'any.required': 'El color es requerido'
    }),
  year: Joi.number().integer().min(1900).max(2100).required()
    .messages({
      'number.base': 'El año debe ser un número',
      'number.min': 'El año debe ser mayor a 1900',
      'number.max': 'El año debe ser menor a 2100',
      'any.required': 'El año es requerido'
    }),
  modelId: Joi.string().required()
    .messages({
      'string.empty': 'El modelo es requerido',
      'any.required': 'El modelo es requerido'
    }),
  imageUrl: Joi.string().uri().allow(null, '')
    .messages({
      'string.uri': 'La URL de la imagen debe ser válida'
    })
});

module.exports={vehicleSchema};
