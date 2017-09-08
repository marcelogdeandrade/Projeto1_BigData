/**
 * List Species
 */
exports.script_list_all_species = function(){
  return `SELECT * FROM Species WHERE status='1'`
}

/**
 * AddSpecies
 */
exports.script_add_species = function(name){
  return `INSERT INTO Species (idSpecies, name, status) VALUES (NULL, "${name}", TRUE)`
}

/**
 * Remove species
 */

exports.script_remove_species = function(idSpecies){
  return `UPDATE Species SET status = '0' WHERE idSpecies='${idSpecies}'`
}

/**
 * Update species
 */

 exports.script_update_species = function(idSpecies, value){
   return `UPDATE Species SET name = '${value}' WHERE idSpecies='${idSpecies}'`
 }
