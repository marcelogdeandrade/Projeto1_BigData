/**
 * List Illnesses
 */
exports.script_list_all_illnesses = function(){
  return `SELECT * FROM Illnesses WHERE status='1'`
}

/**
 * AddIllnesses
 */
exports.script_add_illness = function(name, contagious){
  return `INSERT INTO Illnesses (idIllness, name, isContagious, status) VALUES (NULL, "${name}", "${contagious}", TRUE)`
}

/**
 * Remove Illnesses
 */

exports.script_remove_illness = function(idIllness){
  return `UPDATE Illnesses SET status = '0' WHERE idIllness='${idIllness}'`
}

/**
 * Update Illnesses
 */

 exports.script_update_illness = function(idIllness, name, isContagious){
   return `UPDATE Illnesses SET name = '${name}', isContagious = '${isContagious}' WHERE idIllness='${idIllness}'`
 }
