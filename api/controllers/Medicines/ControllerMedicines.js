import {
  validateMedicine,
  validateRemoveMedicine
} from './Schemas'

import {
  script_list_all_medicines,
  script_add_medicine,
  script_remove_medicine,
  script_update_medicine
} from './Scripts'
/**
 * @api {get} /medicines Lista todos remédios
 * @apiName Get medicines
 * @apiGroup Medicines
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess {Object[]} data Array de remédios.
 * @apiSuccess {String} data.idMedicine id do remédio.
 * @apiSuccess {String} data.name Nome do remédio.
 *
 */
exports.list_all_medicines = function (req, res) {
  var db = require('../../models/Model')
  var sql = script_list_all_medicines()
  db.query(sql, function (error, results, fields) {
    if (error)
      res.send(error);
    res.json(results);
  });
};
/**
 * @api {post} /pets Adiciona um remédio
 * @apiName Add Medicine
 * @apiGroup Medicines
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name Nome do remédio.
 */
exports.add_medicine = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body
  const validationError = validateMedicine(body)
  if (validationError) {
    res.send(validationError)
  } else {
    const nameMedicine = body.name
    var sql = script_add_medicine(nameMedicine);
    db.query(sql, function (error, result) {
      if (error)
        res.send(error);
      res.json(result);
    });
  }
};

/**
 * @api {delete} /pet Remove um remédio
 * @apiName Remove Medice
 * @apiGroup Medicines
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Id do remédio.
 */
exports.remove_medicine = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body

  const validationError = validateRemoveMedicine(body)
  if (validationError) {
    res.send(validationError)
  } else {
    const idMedicine = body.id
    var sql = script_remove_medicine(idMedicine);
    db.query(sql, function (error, result) {
      if (error)
        res.send(error);
      res.json(result);
    });
  }
};

/**
 * @api {update} /Medicine Atualiza um remédio
 * @apiName Update Medicine
 * @apiGroup Medicine
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Id do remédio.
 * @apiParam {String} value Valor a ser atualizado.
 */
exports.update_medicine = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body

  const idMedicine = body.id
  const value = body.value
  var sql = script_update_medicine(idMedicine, value);
  db.query(sql, function (error, result) {
    if (error)
      res.send(error);
    res.json(result);
  });
};
