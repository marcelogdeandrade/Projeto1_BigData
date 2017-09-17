import {
  validateFoods,
  validateRemoveFoods
} from './Schemas'

import {
  script_list_all_foods,
  script_add_food,
  script_remove_food,
  script_update_food
} from './Scripts'

/**
 * @api {get} /foods Lista todas Comidas
 * @apiName Get Foods
 * @apiGroup Foods
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess {Object[]} data Array de comidas.
 * @apiSuccess {String} data.idFood id da comida.
 * @apiSuccess {String} data.nameFood Nome da comida.
 * @apiSuccess {String} data.idSpecies id da espécie da comida.
 * @apiSuccess {String} data.nameSpecie Nome da espécie da comida.
 * @apiSuccess {String} data.quantity Quantidade da comida.
 *
 */
exports.list_all_foods = function (req, res) {
  var db = require('../../models/Model')
  var sql = script_list_all_foods()

  db.query(sql, function (error, results, fields) {
    if (error)
      res.send(error);
    res.json(results);
  });
};
/**
 * @api {post} /foods Adiciona uma comida
 * @apiName Add Food
 * @apiGroup Foods
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name Nome da comida.
 * @apiParam {String} idSpecie id da espécie da comida.
 * @apiParam {String} quantity Quantidade da comida.
 */
exports.add_food = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body
  const validationError = validateFoods(body)
  if (validationError) {
    res.send(validationError)
  } else {
    const name = body.name
    const idSpecies = body.idSpecies
    const quantity = body.quantity

    var sql = script_add_food(name, idSpecies, quantity);
    db.query(sql, function (error, result) {
      if (error)
        res.send(error);
      res.json(result);
    });
  }
};

/**
 * @api {delete} /foods Remove uma comida
 * @apiName Remove Foods
 * @apiGroup Foods
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Id da comida.
 */
exports.remove_food = function (req, res) {
  var db = require('../../models/Model')
  var body = req.query
  const validationError = validateRemoveFoods(body)
  if (validationError) {
    res.send(validationError)
  } else {
    const idFood = body.idFood
    var sql = script_remove_food(idFood);
    db.query(sql, function (error, result) {
      if (error)
        res.send(error);
      res.json(result);
    });
  }
};

/**
 * @api {put} /foods Atualiza uma comida
 * @apiName Update Food
 * @apiGroup Foods
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Id da comida.
 * @apiParam {String} value Valor a ser atualizado.
 */
exports.update_food = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body

  const idFood = body.idFood
  const value = body.value
  const column = body.column
  var sql = script_update_food(idFood, value, column);
  db.query(sql, function (error, result) {
    if (error)
      res.send(error);
    res.json(result);
  });
};
