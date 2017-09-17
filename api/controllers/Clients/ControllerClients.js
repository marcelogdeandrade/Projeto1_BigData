import {
  validateClients,
  validateRemoveClients
} from './Schemas'

import {
  script_list_all_clients,
  script_add_client,
  script_remove_client,
  script_update_client
} from './Scripts'

/**
 * @api {get} /clients Lista todos Clientes
 * @apiName Get Clients
 * @apiGroup Clients
 * @apiVersion 1.0.0
 *
 *
 * @apiSuccess {Object[]} data Array de clientes.
 * @apiSuccess {String} data.idClient id do cliente.
 * @apiSuccess {String} data.name Nome do cliente.
 * @apiSuccess {String} data.birthDate Data de nascimento do cliente.
 *
 */
exports.list_all_clients = function (req, res) {
  var db = require('../../models/Model')
  var sql = script_list_all_clients()

  db.query(sql, function (error, results, fields) {
    if (error)
      res.send(error);
    res.json(results);
  });
};
/**
 * @api {post} /clients Adiciona um cliente
 * @apiName Add Client
 * @apiGroup Clients
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name Nome da espécie.
 * @apiParam {String} birthDate Data de nascimento.
 */
exports.add_client = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body
  const validationError = validateClients(body)
  if (validationError) {
    res.send(validationError)
  } else {
    const nameClient = body.name
    const birthDate = body.birthDate
    var sql = script_add_client(nameClient, birthDate);
    db.query(sql, function (error, result) {
      if (error)
        res.send(error);
      res.json(result);
    });
  }
};

/**
 * @api {delete} /clients Remove um Cliente
 * @apiName Remove Clients
 * @apiGroup Clients
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Id do cliente.
 */
exports.remove_client = function (req, res) {
  var db = require('../../models/Model')
  var body = req.query
  const validationError = validateRemoveClients(body)
  if (validationError) {
    res.send(validationError)
  } else {
    const idClient = body.idClient
    var sql = script_remove_client(idClient);
    db.query(sql, function (error, result) {
      if (error)
        res.send(error);
      res.json(result);
    });
  }
};

/**
 * @api {put} /clients Atualiza um cliente
 * @apiName Update Client
 * @apiGroup Clients
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Id do cliente.
 * @apiParam {String} value Valor a ser atualizado.
 */
exports.update_client = function (req, res) {
  var db = require('../../models/Model')
  var body = req.body

  const idClient = body.idClient
  const value = body.value
  var sql = script_update_client(idClient, value);
  db.query(sql, function (error, result) {
    if (error)
      res.send(error);
    res.json(result);
  });
};
