let express = require('express');
let router = express.Router();

router.get('/get/:id', function(req, res){
	res.render('id');
});

router.get('/add', function(req, res){
	res.render('add');
});

router.get('/delete', function(req, res){
	res.render('delete');
});

router.get('/next-semester', function(req, res){
	res.render('next-semester');
});

module.exports = router;
