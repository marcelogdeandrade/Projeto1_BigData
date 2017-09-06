import {
  validatePet,
  validateRemovePet
} from './Schemas'

import {
  script_list_all_pets,
  script_add_pet,
  script_add_pet_medicines,
  script_remove_pet,
  script_update_pet
} from './Scripts'

/**
 * @api {get} /pets Lista todas espécies
 * @apiName Get Pets
 * @apiGroup Pets
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess {Object[]} data Array de pets.
 * @apiSuccess {String} data.idPet id do pet.
 * @apiSuccess {String} data.name Nome do pet.
 * @apiSuccess {String} data.birthDate Aniversario do pet.
 * @apiSuccess {String} data.idSpecies id da Espécie do pet.
 * @apiSuccess {String} data.idClient id do Dono do pet.
 *
 */
exports.list_all_pets = function (req, res) {
  var db = require('../../models/Model')
  var sql = script_list_all_pets()

  db.query(sql, function (error, results, fields) {
    if (error)
      res.send(error);
    res.json(results);
  });
};
/**
 * @api {post} /pets Adiciona um pet
 * @apiName Add Pet
 * @apiGroup Pets
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name Nome do pet.
 * @apiParam {String} data.name Nome do pet.
 * @apiParam {String} data.birthDate Aniversario do pet.
 * @apiParam {String} data.idSpecies id da Espécie do pet.
 * @apiParam {String} data.idClient id do Dono do pet.
 * @apiParam {String[]} data.medicines Array de ids dos remédios do pet
 */
exports.add_pet = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body

  const validationError = validatePet(body)
  if (validationError) {
    res.send(validationError)
  } else {

    const namePet = body.name
    const birthDate = body.birthDate
    const idSpecies = body.idSpecies

    const sql = script_add_pet(namePet, birthDate, idSpecies)
    db.query(sql, function (error, results, fields) {
      if (error)
        res.send(error);
      res.json(results);
    });
  }
};

/**
 * @api {delete} /pet Remove um pet
 * @apiName Remove Pets
 * @apiGroup Pets
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Id do Pet.
 */
exports.remove_pet = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body

  const validationError = validateRemovePet(body)
  if (validationError) {
    res.send(validationError)
  } else {
    const idPet = body.id
    var sql = script_remove_pet(idPet);
    db.query(sql, function (error, result) {
      if (error)
        res.send(error);
      res.json(result);
    });
  }
};

/**
 * @api {update} /pet Atualiza um pet
 * @apiName Update Pets
 * @apiGroup Pets
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Id do Pet.
 * @apiParam {String} column Campo a ser atualizado.
 * @apiParam {String} value Valor a ser atualizado.
 */
exports.update_pet = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body

  const idPet = body.id
  const column = body.column
  const value = body.value
  var sql = script_update_pet(idPet, column, value);
  db.query(sql, function (error, result) {
    if (error)
      res.send(error);
    res.json(result);
  });
};


