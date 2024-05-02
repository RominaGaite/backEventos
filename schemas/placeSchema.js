import Joi from 'joi'

export const places = Joi.object(
  {
  name:Joi.string()
  .required()
  .min(4)
  .max(18)
   .messages({
      'string.min': 'The name should have  min 3 caracter',
      'string.max': 'The name should have  min 12 caracter'
  }),
  addres:Joi.string()
  .required(),
  photo:Joi.string()
  .optional(),
  date:Joi.date()
  .required(),
  occupancy:Joi.number()
  .required()
  }
)