/**
 * List Pets
 */
exports.script_list_all_pets = function(){
  return `SELECT
            Clients.name as nameClient,
            Clients.idClient,
            Pets.name as namePet,
            Species.name as nameSpecies,
            Species.idSpecies,
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
exports.script_add_pet = function(name, birthDate, idSpecies, idClient){
  return `INSERT INTO
            Pets (idPet, name, birthDate, idSpecies, idClient, status)
          VALUES
            (NULL, '${name}', '${birthDate}', '${idSpecies}', ${idClient}, TRUE)`
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

 exports.script_update_pet = function(idPet, name, birthDate, idSpecies, idClient){
   return `UPDATE Pets SET name = '${name}', birthDate= '${birthDate}', idSpecies = '${idSpecies}', idClient = ${idClient} WHERE idPet='${idPet}'`
 }
