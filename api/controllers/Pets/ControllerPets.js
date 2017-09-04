import {
  validatePet,
  validateRemovePet
} from './Schemas'

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
  var sql = "SELECT * FROM Pets, Species WHERE Pets.status='1' AND Pets.idSpecies = Species.idSpecies"
  db.query(sql, function (error, results, fields) {
    if (error)
      res.send(error);
    res.json(results);
  });
};
/**
 * @api {post} /pets Adiciona um pet
 * @apiName Add Pet
 * @apiGroup pets
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name Nome do pet.
 * @apiParam {String} data.name Nome do pet.
 * @apiParam {String} data.birthDate Aniversario do pet.
 * @apiParam {String} data.idSpecies id da Espécie do pet.
 * @apiParam {String} data.idClient id do Dono do pet.
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
    const Species = body.species

    var sql = `INSERT INTO Pets (idPet, name, birthDate, idSpecies, idClient, status)
                VALUES (NULL, "${namePet}", "${birthDate}","${idSpecies}", NULL, TRUE)`;
    db.query(sql, function (error, result) {
      if (error)
        res.send(error);
      res.json(result);
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
    var sql = `UPDATE Pets SET status = '0' WHERE idPet='${idPet}'`;
    db.query(sql, function (error, result) {
      if (error)
        res.send(error);
      res.json(result);
    });
  }
};
