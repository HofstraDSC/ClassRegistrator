const express = require("express");
const mysql = require("mysql");
const router = express.Router();

const app = express();
const port = 3306;

//Establish connection
let connection = mysql.createConnection({
    host: '35.243.218.252',
    user: 'root',
    password: 'hofstradsc2020',
    database: 'scheduler_data'
})

connection.connect(function(err){
    if(err) throw err;
    console.log('Connected to the database');
})


function getUser(mysql, student) {
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


function searchClassesForUser() {
    mysql.query();
}

router.get('/student/add', (req, res) => {
//Add a new course to student's table
    function addCourseToUser(mysql, student){
        let newCourse = `INSERT INTO ${student} VALUES ${req.params.id}`;
        mysql.query(newCourse,(err, res) => {
            if(err) {
                console.log('Error: ', err);
                result(err, null);
                return;
            }
            console.log(`Added the course ${req.params.id}!`);
        });
    }
    res.send(newCourse);
});

//Remove an existing course from the student's table
router.get('/student/delete', (req, res) => {
    function removeCourseFromUser(mysql, student){
        let removedCourse = `DELETE FROM ${student} WHERE course = ${req.params.id}`;
        mysql.query(removedCourse, (err, res) => {
            if(err){
                console.log('Error:', err);
                result(err, null);
                res.status(400).send();
            }
            console.log(`Removed ${req.params.id} from ${student}!`);
        });
    }
    res.send(removedCourse);
});