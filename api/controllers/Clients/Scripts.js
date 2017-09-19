/**
 * List Clients
 */
exports.script_list_all_clients = function () {
  return `SELECT * FROM Clients WHERE status='1'`
}

/**
 * Add Client
 */
exports.script_add_client = function (name, birthDate) {
  return `INSERT INTO Clients (idClient, name, birthDate, status) VALUES (NULL, "${name}", "${birthDate}", TRUE)`
}

/**
 * Remove Client
 */

exports.script_remove_client = function (idClient) {
  return `UPDATE Clients SET status = '0' WHERE idClient='${idClient}'`
}

/**
 * Update species
 */

exports.script_update_client = function (idClient, name, birthDate) {
  return `UPDATE Clients SET name = '${name}', birthDate='${birthDate}' WHERE idClient='${idClient}'`
}
