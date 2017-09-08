/**
 * List RelIllnessesPets
 */
exports.script_list_all_relations_illnesses_pets = function(){
  return `SELECT
            Pets.idPet,
            Pets.name as namePet,
            Species.name as nameSpecies,
            Illnesses.idIllness,
            Illnesses.name as nameIllness,
            Illnesses.isContagious
          FROM
            RelIllnessesPets,
            Pets,
            Species,
            Illnesses
          WHERE
            RelIllnessesPets.idPet = Pets.idPet
            AND RelIllnessesPets.idIllness = Illnesses.idIllness
            AND Pets.idSpecies = Species.idSpecies
            AND RelIllnessesPets.status ='1'`
}

/**
 * Add RelIllnessesPets
 */
exports.script_add_relation_ilness_pet = function(idPet, idIllness){
  return `INSERT INTO
            RelIllnessesPets (idPet, idIllness, status)
          VALUES
            ('${idPet}', '${idIllness}', TRUE)`
}

/**
 * Remove RelIllnessesPets
 */

exports.script_remove_relation_ilness_pet = function(idPet, idIllness){
  return `UPDATE RelIllnessesPets SET status = '0' WHERE idPet='${idPet}' AND idIllness = '${idIllness}'`
}

/**
 * Update RelIllnessesPets
 */

 exports.script_update_relation_ilness_pet = function(idPet, idIllness, column, value){
   return `UPDATE RelIllnessesPets SET ${column} = '${value}' WHERE idPet='${idPet}' AND idIllness = '${idIllness}'`
 }
