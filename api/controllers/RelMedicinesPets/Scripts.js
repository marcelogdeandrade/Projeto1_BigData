/**
 * List RelMecidinesPets
 */
exports.script_list_all_relations_pets_medicines = function(){
  return `SELECT
            Pets.idPet,
            Pets.name as namePet,
            Species.name as nameSpecies,
            Medicines.idMedicine,
            Medicines.name as nameMedicine,
            RelMedicinesPets.nextDose,
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
            AND RelMedicinesPets.status = '1'`
}

/**
 * Add RelMecidinePet
 */
exports.script_add_relation_pet_medicine = function(idPet, idMedicine, quantity, nextDose){
  return `INSERT INTO
            RelMedicinesPets (idPet, idMedicine, quantity, nextDose, status)
          VALUES
            ('${idPet}', '${idMedicine}', '${quantity}', '${nextDose}', TRUE)`
}

/**
 * Remove RelMecidinePet
 */

exports.script_remove_relation_pet_medicine = function(idPet, idMedicine){
  return `UPDATE RelMedicinesPets SET status = '0' WHERE idPet='${idPet}' AND idMedicine = '${idMedicine}'`
}

/**
 * Update RelMecidinePet
 */

 exports.script_update_relation_pet_medicine = function(idPet, idMedicine, column, value){
   return `UPDATE RelMedicinesPets SET ${column} = '${value}' WHERE idPet='${idPet}' AND idMedicine = '${idMedicine}'`
 }
