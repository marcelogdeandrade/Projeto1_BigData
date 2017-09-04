import {
  validateSpecies,
  validateRemoveSpecies
} from './Schemas'

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
  var sql = "SELECT * FROM Species WHERE status='1'"
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
    var sql = `INSERT INTO Species (idSpecies, nameSpecies, status) VALUES (NULL, "${nameSpecies}", TRUE)`;
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
  var body = req.body

  const validationError = validateRemoveSpecies(body)
  if (validationError) {
    res.send(validationError)
  } else {
    const idSpecies = body.id
    var sql = `UPDATE Species SET status = '0' WHERE idSpecies='${idSpecies}'`;
    db.query(sql, function (error, result) {
      if (error)
        res.send(error);
      res.json(result);
    });
  }
};
