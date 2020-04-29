let express = require('express');
let router = express.Router();

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