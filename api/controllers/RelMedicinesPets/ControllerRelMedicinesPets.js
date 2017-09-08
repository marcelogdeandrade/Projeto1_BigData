import {
  validateRelationPetMedicine,
  validateRemoveRelationPetMedicine
} from './Schemas'

import {
  script_list_all_relations_pets_medicines,
  script_add_relation_pet_medicine,
  script_remove_relation_pet_medicine,
  script_update_relation_pet_medicine
} from './Scripts'
/**
 * @api {get} /RelMecidinesPets Lista todas as relacoes Pets/Remedios
 * @apiName Get RelMecidinesPets
 * @apiGroup RelMecidinesPets
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess {Object[]} data Array de relacoes Pets/Remedios.
 * @apiSuccess {String} data.idPet id do pet.
 * @apiSuccess {String} data.idMedicine id do remédio.
 * @apiSuccess {String} data.quantity quantidade da dose do remedio.
 * @apiSuccess {String} data.nextDose data da proxima dose.
 *
 */
exports.list_all_relations_pets_medicines = function (req, res) {
  var db = require('../../models/Model')
  var sql = script_list_all_relations_pets_medicines()

  db.query(sql, function (error, results, fields) {
    if (error)
      res.send(error);
    res.json(results);
  });
};

/**
 * @api {post} /pets Adiciona uma relacao Pet/Remedio
 * @apiName Add RelMecidinesPets
 * @apiGroup RelMecidinesPets
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Object[]} data Array de relacoes Pets/Remedios.
 * @apiSuccess {String} data.idPet id do pet.
 * @apiSuccess {String} data.idMedicine id do remédio.
 * @apiSuccess {String} data.quantity quantidade da dose do remedio.
 * @apiSuccess {String} data.nextDose data da proxima dose.
 *
 */
exports.add_relation_pet_medicine = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body

  const validationError = validateRelation(body)
  if (validationError) {
    res.send(validationError)
  } else {

    const idPet = body.idPet
    const idMedicine = body.idMedicine
    const quantity = body.quantity
    const nextDose = body.nextDose

    const sql = script_add_relation_pet_medicine(idPet, idMedicine, quantity, nextDose)
    db.query(sql, function (error, results, fields) {
      if (error)
        res.send(error);
      res.json(results);
    });
  }
};

/**
 * @api {delete} /pet Remove uma relacao pet/remedio
 * @apiName Remove Relation
 * @apiGroup RelMecidinesPets
 * @apiVersion 1.0.0
 *
 * @apiParam {String} idPet Id do Pet.
 * @apiParam {String} idMedicine Id do remedio.
 */
exports.remove_relation_pet_medicine = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body

  const validationError = validateRemoveRelation(body)
  if (validationError) {
    res.send(validationError)
  } else {
    const idPet = body.idPet
    const idMedicine = body.idMedicine
    var sql = script_remove_relation_pet_medicine(idPet, idMedicine);
    db.query(sql, function (error, result) {
      if (error)
        res.send(error);
      res.json(result);
    });
  }
};

/**
 * @api {update} /pet Atualiza uma relacao Pet/Remedio
 * @apiName Update RelMecidinesPets
 * @apiGroup RelMecidinesPets
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Id do Pet.
  * @apiParam {String} id Id do Remedio.
 * @apiParam {String} column Campo a ser atualizado.
 * @apiParam {String} value Valor a ser atualizado.
 */
exports.update_relation_pet_medicine = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body

  const idPet = body.idPet
  const idMedicine = body.idMedicine
  const column = body.column
  const value = body.value
  var sql = script_update_relation_pet_medicine(idPet, idMedicine, column, value);
  db.query(sql, function (error, result) {
    if (error)
      res.send(error);
    res.json(result);
  });
};
