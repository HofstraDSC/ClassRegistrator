let express = require('express');
let router = express.Router();

router.get('/', function(req, res){
	res.render('id', {style: 'css/style-id.css'});
});

module.exports = router;
