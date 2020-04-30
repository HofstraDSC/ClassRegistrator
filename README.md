# ClassRegistrator
Filters out all the classes you don't need while searching for your classes.


### Prerequisites
   What things you need to install the software and how to install them
   
#### Database 
  If you would like to make your own database, we recommend installing MySQL Server and workbench using the link   <https://dev.mysql.com/doc/workbench/en/wb-installing.html>.
  Select the installation process that corresponds with your operating system and follow the steps
	  
---
	
### How the Code Works
#### Backend
The below code can be found under the file, __user.js__, and is intended to route information from the database to the website in order for the user to view the classes that matched their search on the database. 

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
   The website should display the classes that result after you input your search through the filter.
     
---	
	
### Running the Tests

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
   We are still working to get the software.
	


