import {
  validateSpecies,
  validateRemoveSpecies
} from './Schemas'

import {
  script_list_all_species,
  script_add_species,
  script_remove_species,
  script_update_species
} from './Scripts'

/**
 * @api {get} /species Lista todas espécies
 * @apiName Get Species
 * @apiGroup Species
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess {Object[]} data Array de espécies.
 * @apiSuccess {String} data.idSpecies id da espécie.
 * @apiSuccess {String} data.name Nome da espécie.
 *
 */
exports.list_all_species = function (req, res) {
  var db = require('../../models/Model')
  var sql = script_list_all_species()

  db.query(sql, function (error, results, fields) {
    if (error)
      res.send(error);
    res.json(results);
  });
};
/**
 * @api {post} /species Adiciona uma espécie
 * @apiName Add Species
 * @apiGroup Species
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name Nome da espécie.
 */
exports.add_species = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body
  const validationError = validateSpecies(body)
  if (validationError) {
    res.send(validationError)
  } else {
    const nameSpecies = body.name
    var sql = script_add_species(nameSpecies);
    db.query(sql, function (error, result) {
      if (error)
        res.send(error);
      res.json(result);
    });
  }
};

/**
 * @api {delete} /species Remove uma espécie
 * @apiName Remove Species
 * @apiGroup Species
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Id da espécie.
 */
exports.remove_species = function (req, res) {
  var db = require('../../models/Model')
  var body = req.query
  const validationError = validateRemoveSpecies(body)
  if (validationError) {
    res.send(validationError)
  } else {
    const idSpecies = body.idSpecies
    var sql = script_remove_species(idSpecies);
    db.query(sql, function (error, result) {
      if (error)
        res.send(error);
      res.json(result);
    });
  }
};

/**
 * @api {update} /Species Atualiza uma especie
 * @apiName Update Species
 * @apiGroup Species
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Id da especie.
 * @apiParam {String} value Valor a ser atualizado.
 */
exports.update_species = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body

  const idSpecies = body.id
  const value = body.value
  var sql = script_update_species(idSpecies, value);
  db.query(sql, function (error, result) {
    if (error)
      res.send(error);
    res.json(result);
  });
};
