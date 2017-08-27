import {
  validateSpecie
} from './Schemas'

/**
 * @api {get} /get_dog Lista todos cachorros
 * @apiName Get Dog
 * @apiGroup Dog
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 */
exports.list_all_dogs = function (req, res) {
  var db = require('../models/Model')
  var sql = 'SELECT * FROM Species'
  db.query(sql, function (error, results, fields) {
    if (error)
      res.send(error);
    res.json(results);
  });
};
/**
 * @api {post} /get_dog Adiciona um cachorro
 * @apiName Put Dog
 * @apiGroup Dog
 * @apiVersion 1.0.0
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
exports.add_dog = function (req, res) {
  var db = require('../models/Model')
  var body = req.body
  const validationError = validateSpecie(body)
  if (validationError) {
    res.send(validationError)
  } else {
    const nameSpecie = body.name
    var sql = `INSERT INTO Species (idSpecie, name, status) VALUES (NULL, "${nameSpecie}", TRUE)`;
    db.query(sql, function (error, result) {
      if (error)
        res.send(error);
      res.json(result);
    });
  }
};
