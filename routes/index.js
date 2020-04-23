let express = require('express');
let router = express.Router();
let user = require('../models/user');

router.get('/', function(req, res){
	res.render('index');
});

router.get('/student/:id', user.getUser(req.params.id){

})

router.get('/student/course-list', user.getCoursesfromUser(){
})

router.post('/student/edit-courses/add', user.addCourseToUser(req.params.id){
})

router.post('/student/edit-courses/delete', user.removeCourseFromUser(req.params.id, req.params.courseId, req.params.column){

})

module.exports = router;