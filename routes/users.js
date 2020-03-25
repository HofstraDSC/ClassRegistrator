let express = require('express');
let router = express.Router();

router.get('/get/:id', function(req, res){
	res.render('id'/*, {style: '../css/style-id.css'}*/);
});

router.get('/add', (req, res) => {
	res.render('add', {style: '../css/style-add.css'});
});

router.get('/delete', function(req, res){
	res.render('delete'/*, {style: '../css/style-delete.css'}*/);
});

router.get('/next-semester', function(req, res){
	res.render('next-semester'/*, {style: '../css/style-next-semester.css'}*/);
});

module.exports = router;
