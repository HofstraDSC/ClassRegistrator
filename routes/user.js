let express = require('express');
let router = express.Router();

router.get('/student/:id', function(req, res){
	res.render('../views/layouts/id');
});

router.get('/student/add', function(req, res){
	res.render('../views/layouts/add');
});

router.get('/student/delete', function(req, res){
	res.render('../views/layouts/delete');
});

router.get('/student/next-semester', function(req, res){
	res.render('../views/layouts/next-semester');
});

module.exports = router;