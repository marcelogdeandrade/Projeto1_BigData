const Joi = require('joi');

/**
 * Schemas
 */
const petSchema = Joi.object().keys({
  name: Joi.string().required(),
  birthDate: Joi.string().required(),
  idSpecies: Joi.string().required(),
})

const removePetSchema = Joi.object().keys({
  idPet: Joi.string().alphanum().required()
})

/**
 * Validation functions
 */
export const validatePet = (body) => {
  const result = Joi.validate({ name: body.name , birthDate: body.birthDate,
                              idSpecies: body.idSpecies}, petSchema);
  return result.error
}

export const validateRemovePet = (body) => {
  const result = Joi.validate({ idPet: body.id }, removePetSchema);
  return result.error
}
