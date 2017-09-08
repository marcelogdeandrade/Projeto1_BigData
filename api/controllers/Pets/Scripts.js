/**
 * List Pets
 */
exports.script_list_all_pets = function(){
  return `SELECT
            Clients.name as nameClient,
            Pets.name as namePet,
            Species.name as nameSpecies,
            Pets.idPet,
            Pets.birthDate
          FROM Species,Pets
          LEFT OUTER JOIN
               Clients
          ON
            Pets.idClient = Clients.idClient
          WHERE
            Pets.idSpecies = Species.idSpecies
            AND Pets.status = '1'`
}

/**
 * AddPet
 */
exports.script_add_pet = function(name, birthDate, idSpecies){
  return `INSERT INTO
            Pets (idPet, name, birthDate, idSpecies, idClient, status)
          VALUES
            (NULL, '${name}', '${birthDate}', '${idSpecies}', NULL, TRUE)`
}

/**
 * Remove pet
 */

exports.script_remove_pet = function(idPet){
  return `UPDATE Pets SET status = '0' WHERE idPet='${idPet}'`
}

/**
 * Update pet
 */

 exports.script_update_pet = function(idPet, column, value){
   return `UPDATE Pets SET ${column} = '${value}' WHERE idPet='${idPet}'`
 }
