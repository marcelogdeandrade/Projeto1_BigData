const Joi = require('joi');

/**
 * Schemas
 */
const specieSchema = Joi.object().keys({
  name: Joi.string().required()
})

/**
 * Validation functions
 */
export const validateSpecie = (body) => {
  const result = Joi.validate({ name: body.name }, specieSchema);
  return result.error
}

