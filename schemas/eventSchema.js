import Joi from "joi"

export const events = Joi.object({
    place: Joi.objectId()
        .required(),
    date: Joi.date()
        .required(),
    photo: Joi.string()
        .optional(),
    name: Joi.string()
        .required()
        .min(3)
        .max(12)
        .messages({
            'string.min': 'The name should have  min 3 caracter',
            'string.max': 'The name should have  min 12 caracter'
        }),
    description: Joi.string()
        .required()
        .min(10)
        .max(200)
        .messages({
            'string.min': 'The name should have  min 10 caracter',
            'string.max': 'The name should have  min 200 caracter'
        }),
        attendees:Joi.objectId()
        .required(),
        minimumAge: Joi.number(),
        organizer: Joi.objectId()
        .required()
})