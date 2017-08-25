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
  var sql = 'SELECT * FROM cachorros'
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
  console.log(body.api_key)
  var sql = "INSERT INTO cachorros (id, name, birth_date) VALUES (NULL, 'Cachorrao', '2017-08-05')";
  db.query(sql, function (error, result) {
    if (error)
      res.send(error);
    res.json(result);
  });
};




