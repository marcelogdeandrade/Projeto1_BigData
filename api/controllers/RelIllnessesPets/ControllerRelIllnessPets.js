import {
  validateRelationIllnessPet,
  validateRemoveRelationIllnessPet
} from './Schemas'

import {
  script_list_all_relations_illnesses_pets,
  script_add_relation_ilness_pet,
  script_remove_relation_ilness_pet,
  script_update_relation_ilness_pet
} from './Scripts'


/**
 * @api {get} /relillnessespets Lista todas as relacoes Doenças/Pets
 * @apiName Get RelIllnessesPets
 * @apiGroup RelIllnessesPets
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess {Object[]} data Array de relacoes Doenças/Pets.
 * @apiSuccess {String} data.idPet id do pet.
 * @apiSuccess {String} data.idIllness id da doença.
 *
 */
exports.list_all_relations_illness_pets = function (req, res) {
  var db = require('../../models/Model')
  var sql = script_list_all_relations_illnesses_pets()

  db.query(sql, function (error, results, fields) {
    if (error)
      res.send(error);
    res.json(results);
  });
};

/**
 * @api {post} /relillnessespets Adiciona uma relacao Doença/Pet
 * @apiName Add RelIllnessesPets
 * @apiGroup RelIllnessesPets
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Object[]} data Array de relacoes Doenças/Pets.
 * @apiSuccess {String} data.idPet id do pet.
 * @apiSuccess {String} data.idIllness id da doença.
 *
 */
exports.add_relation_ilness_pet = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body

  const validationError = validateRelationIllnessPet(body)
  if (validationError) {
    res.send(validationError)
  } else {

    const idPet = body.idPet
    const idIllness = body.idIllness

    const sql = script_add_relation_ilness_pet(idPet, idIllness)
    db.query(sql, function (error, results, fields) {
      if (error)
        res.send(error);
      res.json(results);
    });
  }
};

/**
 * @api {delete} /relillnessespets Remove uma relacao Doença/Pet
 * @apiName Remove Relation
 * @apiGroup RelIllnessesPets
 * @apiVersion 1.0.0
 *
 * @apiParam {String} idPet Id do Pet.
 * @apiParam {String} idIllness Id da doença.
 */
exports.remove_relation_ilness_pet = function (req, res) {
  var db = require('../../models/Model')
  var body = req.query

  const validationError = validateRemoveRelationIllnessPet(body)
  if (validationError) {
    res.send(validationError)
  } else {
    const idPet = body.idPet
    const idIllness = body.idIllness
    const idIllnessPet = body.idIllnessPet
    var sql = script_remove_relation_ilness_pet(idIllnessPet, idPet, idIllness);
    db.query(sql, function (error, result) {
      if (error)
        res.send(error);
      res.json(result);
    });
  }
};

/**
 * @api {put} /relillnessespets Atualiza uma relacao Pet/Doenca
 * @apiName Update RelIllnessesPets
 * @apiGroup RelIllnessesPets
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Id do Pet.
  * @apiParam {String} id Id da Doença.
 * @apiParam {String} column Campo a ser atualizado.
 * @apiParam {String} value Valor a ser atualizado.
 */
exports.update_relation_ilness_pet = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body

  const idPet = body.idPet
  const idIllness = body.idIllness
  const column = body.column
  const value = body.value
  var sql = script_update_relation_ilness_pet(idPet, idIllness, column, value);
  db.query(sql, function (error, result) {
    if (error)
      res.send(error);
    res.json(result);
  });
};
