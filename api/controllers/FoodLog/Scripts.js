/**
 * List Foodlog
 */
exports.script_list_all_foodlog = function () {
  return `SELECT
            FoodLog.idFoodlog,
            Foods.idFood,
            Foods.name as nameFood,
            Pets.idPet,
            Pets.name as namePet,
            Clients.idClient,
            Clients.name as nameClient,
            FoodLog.isIn,
            FoodLog.quantity
          FROM 
            Foods,
            FoodLog
          LEFT OUTER JOIN
            Clients
          ON 
            Clients.idClient = FoodLog.idClient
          LEFT OUTER JOIN
            Pets
          ON 
            Pets.idPet = FoodLog.idPet
          WHERE
            FoodLog.idFood = Foods.idFood
            AND FoodLog.status = '1'`
}

/**
 * AddFood
 */
exports.script_add_foodlog = function (idFood, idPet, idClient, quantity, isIn) {
  return `INSERT INTO
            FoodLog (idFoodlog, idFood, idPet, idClient, quantity, isIn, status)
          VALUES
            (NULL, '${idFood}', ${idPet}, ${idClient}, ${quantity}, ${isIn}, TRUE)`
}

exports.script_update_quantity_food = function(idFood, quantity){
  return `UPDATE Foods SET quantity = quantity + ${quantity} WHERE idFood = ${idFood}`
}
/**
 * Remove foodlog
 */

exports.script_remove_foodlog = function (idFoodlog) {
  return `UPDATE FoodLog SET status = '0' WHERE idFoodlog='${idFoodlog}'`
}

/**
 * Update foodlog
 */

exports.script_update_foodlog = function (idFoodlog, idFood, idPet, idClient, quantity, isIn) {
  return `UPDATE FoodLog SET idFood = '${idFood}', idPet = '${idPet}', idClient = '${idClient}', quantity = '${quantity}', isIn = '${isIn}' WHERE idFoodlog='${idFoodlog}'`
}
