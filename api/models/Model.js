// Definir banco de dados
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '19962000',
  database: 'OngAnimais'
});

module.exports = connection;
