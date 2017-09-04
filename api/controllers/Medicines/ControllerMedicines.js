import {
  validateMedicine,
  validateRemoveMedicine
} from './Schemas'

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
  var sql = "SELECT * FROM Medicines WHERE status='1'"
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
    var sql = `INSERT INTO Medicines (idMedicine, name, status)
                VALUES (NULL, "${nameMedicine}", TRUE)`;
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
    var sql = `UPDATE Medicines SET status = '0' WHERE idMedicine='${idMedicine}'`;
    db.query(sql, function (error, result) {
      if (error)
        res.send(error);
      res.json(result);
    });
  }
};
