let express = require('express');
let router = express.Router();

router.get('/student/:id', function(req, res){
	res.render('id');
});

router.get('/student/add', function(req, res){
	res.render('add');
});

router.get('/student/delete', function(req, res){
	res.render('delete');
});

router.get('/student/next-semester', function(req, res){
	res.render('next-semester');
});

module.exports = router;