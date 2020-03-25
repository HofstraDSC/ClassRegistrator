let http = require('http');
const { seedElements, getElementById, createElement, updateElement, getIndexById } = require('./utils');

let ID = 701823331;
let courses = ['CSC112', 'MATH73', 'PHYS10A', 'CSC110'];
//seedElements(courses, 'courses');
http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`Student ID: ${ID}\n`);
    res.write(`Courses: ${courses}\n`);
    res.end();
}).listen(8080);

function addCourseToUser(){
    router.put('/ID/:courses', (req, res, next) =>{
        //let newCourse = req.params.courses;
        courses.push(res.courses);
        res.status(201).send();

    });
}

function removeCourseFromUser(){

}
