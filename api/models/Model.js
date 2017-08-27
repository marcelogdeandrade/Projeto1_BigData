import {
  user,
  password
} from '../../credentials.js'

// Definir banco de dados
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: user,
  password: password,
  database: 'OngAnimais'
});

module.exports = connection;
