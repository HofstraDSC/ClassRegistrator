# ClassRegistrator
Filters out all the classes you don't need while searching for your classes.


### Prerequisites
   What things you need to install the software and how to install them
   
#### Database 
  If you would like to make your own database, we recommend installing MySQL Server and workbench using the link   <https://dev.mysql.com/doc/workbench/en/wb-installing.html>.
  Select the installation process that corresponds with your operating system and follow the steps
	  
---
	
### How the Code Works
"""javascript
const db =  require(database);
//Requires parameter for user id
function getUser(id)
{
    //Find user

    db.query(`SELECT * FROM scheduler_data.Student WHERE StudentId = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      result(null, res[0]);
      return;
    }
    //Student not found
    result({ kind: "not_found" }, null);
  });
}

//Requires no parameters
function searchClassesForUser()
{
   db.query(`SELECT * FROM scheduler_data.Courses;`, function (err, res) {
    if (err)
    {        
        console.log("error: ", err);
        result(err, null);
        return;
    }
    result(null,res);
  });
}
//Requires parameters for student id, course id and column index
function addCourseToUser(sid, courseID, column)
{
    db.query(`UPDATE scheduler_data.Students SET {column} = ${courseID} WHERE StudentID = ${sid}`,function (err, res) {
    if (err)
    {        
        console.log("error: ", err);
        result(err, null);
        return;
    });
}
//Requires parameters for student id, course id and column index
function removeCourseFromUser(sid, courseID, column)
{
 db.query(`UPDATE scheduler_data.Students SET ${column} = "" WHERE StudentID = ${sid}`,function (err, res) {
    if (err)
    {        
        console.log("error: ", err);
        result(err, null);
        return;
    });   
}
"""

#### Frontend
   The website should display the classes that result after you input your search through the filter.
     
---	
	
### Running the Tests

---

### Built with 
- Node.js - used to filter the search 
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
   We are still working to get the software to run properly.
	


