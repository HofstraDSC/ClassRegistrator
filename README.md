# ClassRegistrator
Filters out all the classes you don't need while searching for your classes.


### Prerequisites
   What things you need to install the software and how to install them
   
#### Database 
  If you would like to make your own database, we recommend installing MySQL Server and workbench using the link       <https://dev.mysql.com/doc/workbench/en/wb-installing.html>.
  Select the installation process that corresponds with your operating system and follow the steps

#### Tools to Get You Started
	
---
	
### How the Code Works
#### Backend
The code can be found under the file, __user.js__, and is intended to route information from the database to the website in order for the user to view the classes that matched their search on the database. 

```javascript
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
```


---

Assuming the classes searched for do not have prerequisites, the following code is meant to update the user's classes and information based on the search. However, the classes are not stored if the prerequisites for the class have not been met.
```javascript
const db =  require('../database/database');

module.exports = {
  getUser: async function(id){
    //Requires parameter for user id
    //Find user
    const result = await db.con.query(`SELECT * FROM scheduler_data.Student WHERE StudentId = ${id}`)
    return result;
  },

  searchClassesForUser: async function(){
    //Requires no parameters
    const result = await db.con.query(`SELECT * FROM scheduler_data.Courses;`)
    return result;
  },

  getCoursesfromUser: async function(id){
    const sql_text = `SELECT c.*
                      FROM scheduler_data.Student_Courses sc 
                      INNER JOIN scheduler_data.Courses c ON sc.CourseId = c.CourseId 
                      WHERE StudentId = ${id};`
    const result = await db.con.query(sql_text)
    return result;
  },
  
  addCourseToUser: async function(sid, courseID){
    //Requires parameters for student id, course id and column index
      const sql_text = `INSERT INTO scheduler_data.Student_Courses (StudentId, CourseId) VALUES (${sid}, ${courseID});`
      const result = await db.con.query(sql_text);
      return true;
  },

  
  removeCourseFromUser: async function(sid, courseID){
    //Requires parameters for student id, course id and column index
    const sql_text = `DELETE FROM scheduler_data.Student_Courses WHERE StudentId = ${sid} AND CourseId = ${courseID};`
    const result = await db.con.query(sql_text)
    return true;
  }
}
```
#### Frontend
   The website should display the classes that result after you input your search through the filter by connecting to the code on the backend to access the data from the database. The code can be found in the __course_list.handlebars__ file.

```HTML
<!-- script for getting table -->
<script>
    let main = async function(){
        let table = document.querySelector("table");
        let response = await fetch('/courses/all');
        let tableContent = await response.json();
        
        for (let i = 1; i < tableContent.length; i++){
            let txtTdID = "<td class=\"t_ID\">" + (tableContent[i]["CourseId"]) + "</td>";
            let txtTdCRN = "<td class=\"t_CRN\">" + (tableContent[i]["CRN"]) + "</td>";
            let txtTdCourse = "<td class=\"t_course\">" + (tableContent[i]["Course Name"]) + "</td>";
            let txtTdDepartment = "<td class=\"t_department\">" + (tableContent[i]["Department"]) + "</td>";
            let txtTdProfessor = "<td class=\"t_professor\">" + (tableContent[i]["Professor Name"]) + "</td>";
            let txtTdCredits = "<td class=\"t_credits\">" + (tableContent[i]["Credits"]) +"</td>";
            let txtTr = "<tr id=\"row\">" + txtTdID + txtTdCRN + txtTdCourse + txtTdDepartment + txtTdProfessor + txtTdCredits + "</tr>";
            table.innerHTML += txtTr;
        }
    }
    main();
</script>

<!-- script for filtering based on filter checkboxes -->
<script>
    let checkProf = document.querySelector("#checkProf");
    checkProf.addEventListener("click", checkboxFilterCourses);
    let checkDept = document.querySelector("#checkDept");
    checkDept.addEventListener("click", checkboxFilterCourses);
    let checkCred = document.querySelector("#checkCred");
    checkCred.addEventListener("click", checkboxFilterCourses);
    function checkboxFilterCourses(){
        let boxes = document.querySelectorAll("button");
        for (let i = 0; i < boxes.length; i++){
            if (boxes[i].checked == true && boxes[i] != this)
                boxes[i].checked = false;
        }
        // function to filter goes here
    }
</script>

<!-- script for filtering based on search results -->
<script>
    let filterInput = document.querySelector("#filterInput");
    filterInput.addEventListener("keyup", searchFilterCourses); // filterCourses function runs everytime a key is pressed
    async function searchFilterCourses(){
        let filterValue = filterInput.value.toUpperCase(); // all text is uppercased to compare
        let rows = document.querySelectorAll("#row"); // gets all rows
        console.log(rows);
        for (let i = 0; i < rows.length; i++) {
            let rowTDs = rows[i].querySelectorAll("td"); // gets all td from row[i]
            let rowIDText = rowTDs[0].innerHTML;
            let rowCRNText = rowTDs[1].innerHTML;
            let rowCourseText = rowTDs[2].innerHTML.toUpperCase();
            let rowDepartmentText = rowTDs[3].innerHTML.toUpperCase();
            let rowProfessorText = rowTDs[4].innerHTML.toUpperCase();
            let rowCreditText = rowTDs[5].innerHTML;
            if (rowIDText.indexOf(filterValue) > -1 ||
                rowCRNText.indexOf(filterValue) > -1 ||
                rowCourseText.indexOf(filterValue) > -1 || // filterValue found in one of the cells
                rowDepartmentText.indexOf(filterValue) > -1 ||
                rowProfessorText.indexOf(filterValue) > -1 ||
                rowCreditText.indexOf(filterValue) > -1) rows[i].style.display = "";
            else rows[i].style.display = "none";
        }
    }
</script>

<!-- script for making another page if there are too many results 
<script>
    let tableHeight = document.querySelectorAll("#row");
    if (rows.length >= 2) console.log(rows);
</script>-->

```
---

### Built with 
- Node.js - used to create the filter function to produce an output of classes based on user's search
- Express - used connect the website to the database on the backend
- Visual Studio - used to make and style the website
- MySQL Server and Workbench - used to provide a dummy database to test the search algorithm

---

### Authors

- __Dalton Leight__ - Project Lead
- __Alonzo Gonzalez__ - Backend Programmer
- __Jayson Mendoza__ - Frontend Programmer
- __Renan Charles-Pierre__ - Frontend Programmer
- __Franklin "Hina" Chen__ - Database Management/Misc.
- __Aihra Villarreiz__ - Database Management/Misc

---

### Project Status
   This program is still in the process of being finalized.
	


