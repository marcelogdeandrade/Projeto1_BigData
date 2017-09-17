const Joi = require('joi');

/**
 * Schemas
 */
const foodlogSchema = Joi.object().keys({
  idFood: Joi.string().alphanum().required(),
  idClient: Joi.string().alphanum(),
  idPet: Joi.string().alphanum()
})

const removeFoodlogSchema = Joi.object().keys({
  idFoodlog: Joi.string().alphanum().required(),
})

/**
 * Validation functions
 */
export const validateFoodLog = (body) => {
  const result = Joi.validate({ idFood: body.idFood, idClient: body.idFood, idPet: body.idPet }, foodlogSchema);
  return result.error
}

export const validateRemoveFoodLog = (body) => {
  const result = Joi.validate({ idFoodlog: body.idFoodlog }, removeFoodlogSchema);
  return result.error
}
