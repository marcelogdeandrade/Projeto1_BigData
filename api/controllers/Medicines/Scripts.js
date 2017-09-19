/**
 * List Medicines
 */
exports.script_list_all_medicines = function(){
  return `SELECT * FROM Medicines WHERE status='1'`
}

/**
 * AddMedicines
 */
exports.script_add_medicine = function(name){
  return `INSERT INTO Medicines (idMedicine, name, status) VALUES (NULL, "${name}", TRUE)`
}

/**
 * Remove medicines
 */

exports.script_remove_medicine = function(idMedicine){
  return `UPDATE Medicines SET status = '0' WHERE idMedicine='${idMedicine}'`
}

/**
 * Update medicines
 */

 exports.script_update_medicine = function(idMedicine, name){
   return `UPDATE Medicines SET name = '${name}' WHERE idMedicine='${idMedicine}'`
 }
