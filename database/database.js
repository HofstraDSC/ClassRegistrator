require('dotenv').config()
const mysql = require("promise-mysql")
const ENV = process.env;
const db = {};

let connection = mysql.createConnection({
  host: ENV.DB_HOST,
  user: ENV.DB_USER,
  password: ENV.DB_PASS,
  database: ENV.DB_NAME
})

connection.then((con) => {
  console.log('Database Connected')
  db.con = con;
})

module.exports = db;