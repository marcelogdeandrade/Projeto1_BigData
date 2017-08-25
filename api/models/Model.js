// Definir banco de dados
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '38384146x',
  database: 'Projeto1'
});

module.exports = connection;