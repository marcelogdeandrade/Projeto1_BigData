const Joi = require('joi');

/**
 * Schemas
 */
const medicineSchema = Joi.object().keys({
  name: Joi.string().required(),
})

const removeMedicineSchema = Joi.object().keys({
  id: Joi.string().alphanum().required()
})

/**
 * Validation functions
 */
export const validateMedicine = (body) => {
  const result = Joi.validate({ name: body.name }, medicineSchema);
  return result.error
}

export const validateRemoveMedicine = (body) => {
  const result = Joi.validate({ id: body.id }, removeMedicineSchema);
  return result.error
}
