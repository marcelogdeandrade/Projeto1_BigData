const Joi = require('joi');

/**
 * Schemas
 */
const foodsSchema = Joi.object().keys({
  name: Joi.string().required()
})

const removeFoodSchema = Joi.object().keys({
  idFood: Joi.string().alphanum().required(),
})

/**
 * Validation functions
 */
export const validateFoods = (body) => {
  const result = Joi.validate({ name: body.name }, foodsSchema);
  return result.error
}

export const validateRemoveFoods = (body) => {
  const result = Joi.validate({ idFood: body.idFood }, removeFoodSchema);
  return result.error
}
