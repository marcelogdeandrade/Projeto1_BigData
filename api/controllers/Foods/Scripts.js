/**
 * List Foods
 */
exports.script_list_all_foods = function () {
  return `SELECT
            Foods.idFood,
            Foods.name as nameFood,
            Species.name as nameSpecies,
            Species.idSpecies,
            Foods.quantity
          FROM 
            Foods,
            Species
          WHERE
            Foods.idSpecies = Species.idSpecies
            AND Foods.status = '1'`
}

/**
 * AddFood
 */
exports.script_add_food = function (name, idSpecies, quantity) {
  return `INSERT INTO
            Foods (idFood, name, quantity, idSpecies, status)
          VALUES
            (NULL, '${name}', '${quantity}', '${idSpecies}', TRUE)`
}

/**
 * Remove food
 */

exports.script_remove_food = function (idFood) {
  return `UPDATE Foods SET status = '0' WHERE idFood='${idFood}'`
}

/**
 * Update food
 */

exports.script_update_food = function (idFood, name, idSpecies, quantity) {
  return `UPDATE Foods SET name = '${name}', idSpecies = '${idSpecies}', quantity = '${quantity}' WHERE idFood='${idFood}'`
}
