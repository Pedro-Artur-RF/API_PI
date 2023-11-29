const mysql = require('mysql2')

const conn = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'aluno_medio',
  password: '@lunoSenai23',
  database: 'produtos',
})

module.exports = conn;