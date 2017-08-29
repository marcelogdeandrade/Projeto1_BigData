const Joi = require('joi');

/**
 * Schemas
 */
const specieSchema = Joi.object().keys({
  name: Joi.string().required()
})

const removeSpeciesSchema = Joi.object().keys({
  id: Joi.string().alphanum().required()
})

/**
 * Validation functions
 */
export const validateSpecie = (body) => {
  const result = Joi.validate({ name: body.name }, specieSchema);
  return result.error
}

export const validateRemoveSpecies = (body) => {
  const result = Joi.validate({ id: body.id }, removeSpeciesSchema);
  return result.error
}

