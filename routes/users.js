const express = require("express");
const router = express.Router();

const app = express();

let user = require('../models/user');

router.get('/student/:id', async function(req,res){
	try{
		const result = await user.getUser(req.params.id);
		if(result.length === 0){
			throw Error('No user');
		}
		return res.status(200).send(result[0])
	}catch(error){
		console.error(error);
		return res.status(400).send({
			message: 'Could not get user'
		})
	}
});

router.get('/courses/all', async (req, res) =>{
	try{
		const result = await user.searchClassesForUser();
		if(result.length === 0){
			throw Error('No Courses');
		}
		return res.status(200).send(result)
	}catch(error){
		console.error(error);
		return res.status(400).send({
			message: 'Could not get courses'
		})
	}
});

router.get('/student/course-list/:id', async function(req,res){
	try{
		const result = await user.getCoursesfromUser(req.params.id);
		if(result.length === 0){
			throw Error('No Courses');
		}
		return res.status(200).send(result)
	}catch(error){
		console.error(error);
		return res.status(400).send({
			message: 'Could not get courses'
		})
	}
});

router.post('/student/edit-courses', async function(req,res){
	try{
		const result = await user.addCourseToUser(req.body.id, req.body.courseId);
		if(result){
			return res.status(204).send()
		}else{
			throw Error('Failed to add course')
		}
	}catch(error){
		console.error(error);
		return res.status(400).send({
			message: 'Could not add course'
		})
	}
});

router.delete('/student/edit-courses', async function(req,res){
	try{
		const result = await user.removeCourseFromUser(req.body.id, req.body.courseId);
		if(result){
			return res.status(204).send()
		}else{
			throw Error('Failed to delete course')
		}
	}catch(error){
		console.error(error);
		return res.status(400).send({
			message: 'Could not delete course'
		})
	}
});

module.exports = router;