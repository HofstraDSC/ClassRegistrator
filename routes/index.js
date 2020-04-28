let express = require('express');
let router = express.Router();
let user = require('../models/user');

router.get('/student/:id', function(req,res){
	user.getUser(req.params.id);
});

router.get('/student/course-list', function(req,res){
	user.getCoursesfromUser();
});

router.post('/student/edit-courses/add', function(req,res){
	user.addCourseToUser(req.params.id);
});

router.post('/student/edit-courses/delete', function(req,res){
	user.removeCourseFromUser(req.params.id, req.params.courseId, req.params.column);
});

router.get('/', function(req, res){
	res.render('get-id', {style: 'css/style-get-id.css'});
});

router.get('/home', function(req, res){
	res.render('home', {style: 'css/style-home.css'});
});

router.get('/course-list', function(req, res){
	res.render('course-list', {style: 'css/style-course-list.css'});
});

router.get('/edit-courses', function(req, res){
	res.render('edit-courses', {style: 'css/style-edit-courses.css'});
});

module.exports = router;