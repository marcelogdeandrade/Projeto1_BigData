import {
  validateFoodLog,
  validateRemoveFoodLog
} from './Schemas'

import {
  script_list_all_foodlog,
  script_add_foodlog,
  script_remove_foodlog,
  script_update_foodlog,
  script_update_quantity_food
} from './Scripts'

/**
 * @api {get} /foodlog Lista todos históricos de comida
 * @apiName Get FoodLog
 * @apiGroup FoodLog
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess {Object[]} data Array de histórico de comidas.
 * @apiSuccess {String} data.idFoodlog id do histórico de comida.
 * @apiSuccess {String} data.idFood id da comida.
 * @apiSuccess {String} data.nameFood nome da comida.
 * @apiSuccess {String} data.isIn Se é entrada ou saída de comida.
 * @apiSuccess {String} data.idClient id do cliente que deu entrada na comida.
 * @apiSuccess {String} data.nameClient nome do cliente que deu entrada na comida.
 * @apiSuccess {String} data.idPet id do Pet que deu saída na comida.
 * @apiSuccess {String} data.namePet nome do Pet que deu saída na comida.
 * @apiSuccess {String} data.quantity Quantidade de entrada/saida da comida.
 *
 */
exports.list_all_foodlog = function (req, res) {
  var db = require('../../models/Model')
  var sql = script_list_all_foodlog()

  db.query(sql, function (error, results, fields) {
    if (error)
      res.send(error);
    res.json(results);
  });
};
/**
 * @api {post} /foodlog Adiciona um histórico de comida
 * @apiName Add Foodlog
 * @apiGroup FoodLog
 * @apiVersion 1.0.0
 *
 * @apiParam {String} idFood id da comida.
 * @apiParam {String} idPet id do Pet que deu saida na comida.
 * @apiParam {String} idClient id do client que deu entrada na comida.
 * @apiParam {String} isIn Se historico é de entrada/saida.
 * @apiParam {String} quantity Quantidade da comida.
 */
exports.add_foodlog = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body
  const validationError = validateFoodLog(body)
  if (validationError) {
    res.send(validationError)
  } else {
    const idFood = body.idFood
    const isIn = body.isIn
    let idPet = body.idPet
    let idClient = body.idClient
    let quantity = body.quantity
    if (!isIn){
      quantity = quantity * -1;
    }
    if (!idClient) {
      idClient = null
    }
    if (!idPet) {
      idPet = null
    }
    var sql1 = script_add_foodlog(idFood, idPet, idClient, quantity, isIn);
    var sql2 = script_update_quantity_food(idFood, quantity);

    /* Begin transaction */
    db.beginTransaction(function (err) {
      if (err) { res.send(err); }
      console.log('1')
      db.query(sql1, function (err, result) {
        if (err) {
          db.rollback(function () {
            res.send(err);
          });
        }
        db.query(sql2, function (err, result) {
          if (err) {
            console.log(err)
            db.rollback(function () {
              res.send(err);
            });
          }
          console.log('3')
          db.commit(function (err) {
            if (err) {
              db.rollback(function () {
                res.send(err);
              });
            }
            console.log('4')
            res.json(result);
          });
        });
      });
    });
  /* End transaction */
  }
};

/**
 * @api {delete} /foodlog Remove um histórico de comida
 * @apiName Remove FoodLog
 * @apiGroup FoodLog
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Id do histórico de comida.
 */
exports.remove_foodlog = function (req, res) {
  var db = require('../../models/Model')
  var body = req.query
  const validationError = validateRemoveFoodLog(body)
  if (validationError) {
    res.send(validationError)
  } else {
    const idFoodlog = body.idFoodlog
    var sql = script_remove_foodlog(idFoodlog);
    db.query(sql, function (error, result) {
      if (error)
        res.send(error);
      res.json(result);
    });
  }
};

/**
 * @api {put} /foodlog Atualiza uma histórico de comida
 * @apiName Update Foodlog
 * @apiGroup FoodLog
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Id do histórico.
 * @apiParam {String} value Valor a ser atualizado.
 */
exports.update_foodlog = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body
  const validationError = validateFoodLog(body)
  console.log(body)
  if (validationError) {
    res.send(validationError)
  } else {
    const idFoodlog = body.idFoodlog
    const idFood = body.idFood
    const isIn = body.isIn
    let idPet = body.idPet
    let idClient = body.idClient
    const quantity = body.quantity
    if (!idClient) {
      idClient = null
    }
    if (!idPet) {
      idPet = null
    }
    var sql1 = script_update_foodlog(idFoodlog, idFood, idPet, idClient, quantity, isIn);
    var sql2 = script_update_quantity_food(idFood, quantity);

    db.beginTransaction(function (err) {
      if (err) { res.send(err); }
      console.log('1')
      db.query(sql1, function (err, result) {
        if (err) {
          db.rollback(function () {
            res.send(err);
          });
        }
        db.query(sql2, function (err, result) {
          if (err) {
            console.log(err)
            db.rollback(function () {
              res.send(err);
            });
          }
          console.log('3')
          db.commit(function (err) {
            if (err) {
              db.rollback(function () {
                res.send(err);
              });
            }
            console.log('4')
            res.json(result);
          });
        });
      });
    });
  /* End transaction */
  }
};
