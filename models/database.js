const express = require("express")
var mysql = require("mysql")
const bodyParser = require("body-parser")

const app = express()
const port = 3306;
var connection = mysql.createConnection({
  host: '35.243.218.252',
  user: 'root',
  password: 'hofstradsc2020',
  database: 'scheduler_data'
})
connection.connect()
