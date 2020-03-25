const express = require("express")
var mysql = require("mysql")
const bodyParser = require("body-parser")

const app = express()
const port = 3000;
var connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: ''
})
connection.connect()

function getUser(student)
{
    //Find user
    mysql.query(`SELECT * FROM table WHERE id = ${student}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("Student: ", res[0]);
      result(null, res[0]);
      return;
    }

    //Student not found
    result({ kind: "not_found" }, null);
  });
}

function searchClassesForUser()
{
}

//Alonzo's
function addCourseToUser()
{
}
//Alonzo's
function removeCourseFromUser()
{
    
}