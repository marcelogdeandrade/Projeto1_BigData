const Joi = require('joi');

/**
 * Schemas
 */

 const RelIllnessesPetsSchema = Joi.object().keys({
   idPet: Joi.string().alphanum().required(),
   idIllness: Joi.string().alphanum().required(),
 })

 const removeRelIllnessesPetsSchema = Joi.object().keys({
   idPet: Joi.string().alphanum().required(),
   idIllness: Joi.string().alphanum().required(),
 })
 export const validateRelationIllnessPet = (body) => {
   const result = Joi.validate({ idPet: body.idPet , idIllness: body.idIllness}, RelIllnessesPetsSchema);
   return result.error
 }
 export const validateRemoveRelationIllnessPet = (body) => {
   const result = Joi.validate({ idPet: body.idPet, idIllness: body.idIllness }, removeRelIllnessesPetsSchema);
   return result.error
 }
