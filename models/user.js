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
/*
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
    }});
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
    }});
}*/