const Joi = require('joi');

/**
 * Schemas
 */

 const RelMecidinesPetsSchema = Joi.object().keys({
   idPet: Joi.string().alphanum().required(),
   idMedicine: Joi.string().alphanum().required(),
   quantity: Joi.string().alphanum(),
 })

 const removeRelMecidinesPetsSchema = Joi.object().keys({
   idPet: Joi.string().alphanum().required(),
   idMedicine: Joi.string().alphanum().required()
 })
 export const validateRelationPetMedicine = (body) => {
   const result = Joi.validate({ idPet: body.idPet , idMedicine: body.idMedicine,
                               quantity: body.quantity}, RelMecidinesPetsSchema);
   return result.error
 }

 export const validateRemoveRelationPetMedicine = (body) => {
   const result = Joi.validate({ idPet: body.idPet, idMedicine: body.idMedicine }, removeRelMecidinesPetsSchema);
   return result.error
 }
