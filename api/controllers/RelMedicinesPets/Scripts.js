/**
 * List RelMecidinesPets
 */
exports.script_list_all_relations_pets_medicines = function(){
  return `SELECT
            RelMedicinesPets.idMedicinePet,
            Pets.idPet,
            Pets.name as namePet,
            Species.name as nameSpecies,
            Medicines.idMedicine,
            Medicines.name as nameMedicine,
            RelMedicinesPets.quantity
          FROM
            RelMedicinesPets,
            Pets,
            Species,
            Medicines
          WHERE
            RelMedicinesPets.idPet = Pets.idPet
            AND RelMedicinesPets.idMedicine = Medicines.idMedicine
            AND Pets.idSpecies = Species.idSpecies
            AND RelMedicinesPets.status = '0'`
}

/**
 * Add RelMecidinePet
 */
exports.script_add_relation_pet_medicine = function(idPet, idMedicine, quantity){
  return `INSERT INTO
            RelMedicinesPets (idPet, idMedicine, quantity, status)
          VALUES
            ('${idPet}', '${idMedicine}', '${quantity}', 0)`
}

/**
 * Remove RelMecidinePet
 */

exports.script_remove_relation_pet_medicine = function(idMedicinePet, idPet, idMedicine){
  return `UPDATE RelMedicinesPets SET status = '${idMedicinePet}' WHERE idPet='${idPet}' AND idMedicine = '${idMedicine}'`
}

/**
 * Update RelMecidinePet
 */

 exports.script_update_relation_pet_medicine = function(idPet, idMedicine, column, value){
   return `UPDATE RelMedicinesPets SET ${column} = '${value}' WHERE idPet='${idPet}' AND idMedicine = '${idMedicine}'`
 }
