# ClassRegistrator
   This software filters out all the classes you don't need while searching for your classes.
   The website to access this class search filter can be found using this link <http://35.188.230.180:3000/>.

### Prerequisites
   What things you need to get the website running and how to install them.
   
#### Database 
  If you would like to make your own database, we recommend installing MySQL Server and workbench using the link       <https://dev.mysql.com/doc/workbench/en/wb-installing.html>.
  Select the installation process that corresponds with your operating system and follow the steps.
	
---
	
### How the Code Works
#### Backend
The code can be found in a folder named __routes__ under the file, __user.js__, and is intended to route information from the website to the database in order for the user to view the classes that matched their search on the database. In the __models__ folder, there is also a __user.js__ , assuming the classes searched for do not have prerequisites the program is meant to update the user's classes and information based on the search. However, the classes are not stored under the user's information if the prerequisites for the class have not been met.

#### Frontend
   The website should display the classes that result after you input your search. The filter function should take your search, connect to the backend, and access the data from the database that match your search. The code can be found in the folder, __views__,in the __course_list.handlebars__ file.

---

### Built with 
- Node.js - used to create the filter function to produce an output of classes based on user's search
- Express - used connect the website to the database on the backend
- Visual Studio - used to make and style the website
- MySQL Server and Workbench - used to provide a dummy database to test the search algorithm

---

### Authors

- __Dalton Leight__ - Project Lead
- __Jayson Mendoza__ - Frontend Programmer
- __Alonzo Gonzalez__ - Backend Programmer
- __Renan Charles-Pierre__ - Frontend Programmer
- __Franklin "Hina" Chen__ - Database Management/Misc.
- __Aihra Villarreiz__ - Database Management/Misc.

---

### Project Status
   This program is still in the process of being finalized.
	


