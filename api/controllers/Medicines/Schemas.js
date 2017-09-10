const Joi = require('joi');

/**
 * Schemas
 */
const medicineSchema = Joi.object().keys({
  name: Joi.string().required(),
})

const removeMedicineSchema = Joi.object().keys({
  idMedicine: Joi.string().alphanum().required()
})

/**
 * Validation functions
 */
export const validateMedicine = (body) => {
  const result = Joi.validate({ name: body.name }, medicineSchema);
  return result.error
}

export const validateRemoveMedicine = (body) => {
  const result = Joi.validate({ idMedicine: body.idMedicine }, removeMedicineSchema);
  return result.error
}
