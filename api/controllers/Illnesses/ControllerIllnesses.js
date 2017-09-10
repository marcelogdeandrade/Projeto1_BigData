import {
  validateIllness,
  validateRemoveIllness
} from './Schemas'

import {
  script_list_all_illnesses,
  script_add_illness,
  script_remove_illness,
  script_update_illness
} from './Scripts'
/**
 * @api {get} /illnesses Lista todas doenças
 * @apiName Get illnesses
 * @apiGroup Illnesses
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess {Object[]} data Array de doenças.
 * @apiSuccess {String} data.idIllness id da doença.
 * @apiSuccess {String} data.name Nome da doença.
 * @apiParam {Bool} contagious indica se a doença é contagiosa.
 *
 */
exports.list_all_illnesses = function (req, res) {
  var db = require('../../models/Model')
  var sql = script_list_all_illnesses()
  db.query(sql, function (error, results, fields) {
    if (error)
      res.send(error);
    res.json(results);
  });
};
/**
 * @api {post} /illnesses Adiciona uma doença
 * @apiName Add Illness
 * @apiGroup Illnesses
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name Nome da doença.
 * @apiParam {Bool} contagious indica se a doença é contagiosa.
 */
exports.add_illness = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body
  const validationError = validateIllness(body)
  if (validationError) {
    res.send(validationError)
  } else {
    const nameIllness = body.name
    const isContagious = body.contagious
    var sql = script_add_illness(nameIllness, isContagious);
    db.query(sql, function (error, result) {
      if (error)
        res.send(error);
      res.json(result);
    });
  }
};

/**
 * @api {delete} /illnesses Remove uma doença
 * @apiName Remove Illness
 * @apiGroup Illnesses
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Id da doença.
 */
exports.remove_illness = function (req, res) {
  var db = require('../../models/Model')
  var body = req.query

  const validationError = validateRemoveIllness(body)
  if (validationError) {
    res.send(validationError)
  } else {
    const idIllness = body.idIllness
    var sql = script_remove_illness(idIllness);
    db.query(sql, function (error, result) {
      if (error)
        res.send(error);
      res.json(result);
    });
  }
};

/**
 * @api {put} /illnesses Atualiza uma doença
 * @apiName Update Illness
 * @apiGroup Illnesses
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Id da doença.
 * @apiParam {String} value Valor a ser atualizado.
 */
exports.update_illness = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body

  const idIllness = body.id
  const column = body.column
  const value = body.value
  var sql = script_update_illness(idIllness, column, value);
  db.query(sql, function (error, result) {
    if (error)
      res.send(error);
    res.json(result);
  });
};
