const Joi = require('joi');

/**
 * Schemas
 */
const clientsSchema = Joi.object().keys({
  name: Joi.string().required()
})

const removeClientSchema = Joi.object().keys({
  idClient: Joi.string().alphanum().required(),
  birthDate: Joi.string().required()
})

/**
 * Validation functions
 */
export const validateClients = (body) => {
  const result = Joi.validate({ name: body.name }, clientsSchema);
  return result.error
}

export const validateRemoveClients = (body) => {
  const result = Joi.validate({ idClient: body.idClient }, removeClientSchema);
  return result.error
}
