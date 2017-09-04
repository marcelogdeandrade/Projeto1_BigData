const Joi = require('joi');

/**
 * Schemas
 */
const speciesSchema = Joi.object().keys({
  name: Joi.string().required()
})

const removeSpeciesSchema = Joi.object().keys({
  idSpecies: Joi.string().alphanum().required()
})

/**
 * Validation functions
 */
export const validateSpecies = (body) => {
  const result = Joi.validate({ name: body.name }, speciesSchema);
  return result.error
}

export const validateRemoveSpecies = (body) => {
  const result = Joi.validate({ idSpecies: body.id }, removeSpeciesSchema);
  return result.error
}
