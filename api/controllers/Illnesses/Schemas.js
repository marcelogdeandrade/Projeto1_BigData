const Joi = require('joi');

/**
 * Schemas
 */
const illnessSchema = Joi.object().keys({
  name: Joi.string().required(),
  contagious: Joi.number().required()
})

const removeIllnessSchema = Joi.object().keys({
  idIllness: Joi.string().alphanum().required()
})

/**
 * Validation functions
 */
export const validateIllness = (body) => {
  const result = Joi.validate({ name: body.name, contagious: body.contagious }, illnessSchema);
  return result.error
}

export const validateRemoveIllness = (body) => {
  const result = Joi.validate({ idIllness: body.idIllness }, removeIllnessSchema);
  return result.error
}
