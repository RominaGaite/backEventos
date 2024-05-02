import Joi from "joi"

export const userSchema = Joi.object(
  {
    name:Joi.string()
    .required()
    .min(3)
    .max(12)
    .messages({
      'string.min': 'The name should have  min 3 caracter',
      'string.max': 'The name should have  min 12 caracter'
  }),
    lastname:Joi.string()
    .required()
    .min(3)
    .max(20)
    .messages({
      'string.min': 'The lastname should have  min 3 caracter',
      'string.max': 'The lastname should have  min 20 caracter'
  }),
    photo:Joi.string()
    .optional(),

    email:Joi.string()
    .email({minDomainSegments:2})
    .required()
    .messages({
      'string.email': 'Email invalid format'
  }),
    password:Joi.string()
    .required()
    .min(8)
    .max(20).messages({
      'string.min': 'The password should have  min 8 caracter',
      'string.max': 'The password should have 20 caracter'
  }),
    age:Joi.number().greater(18).less(99).required().messages({
    }),
    genre:Joi.string().optional(),
  }
)

