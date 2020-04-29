const db = require('../models/database');

module.exports = {
  getUser: function(id){
    //Requires parameter for user id
    //Find user
    db.query(`SELECT * FROM scheduler_data.Student WHERE StudentId = ${id}`, (err, result, res) => {
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
  },

  searchClassesForUser: function(){
    //Requires no parameters
     db.query(`SELECT * FROM scheduler_data.Courses;`, function (err, result, res) {
        if (err)
        {        
          console.log("error: ", err);
          result(err, null);
          return;
        }
        result(null,res);
      });
  },

  addCourseToUser: function(sid, courseID, column){
    //Requires parameters for student id, course id and column index
    db.query(`UPDATE scheduler_data.Student SET {column} = ${courseID} WHERE StudentID = ${sid}`,function (err, result, res) {
      if (err)
      {        
          console.log("error: ", err);
          result(err, null);
          return;
      }
    });
  },

  removeCourseFromUser: function(sid, courseID, column){
    //Requires parameters for student id, course id and column index
    db.query(`UPDATE scheduler_data.Students SET ${column} = "" WHERE StudentID = ${sid}`,function (err, result, res) {
      if (err)
      {        
        console.log("error: ", err);
        result(err, null);
        return;
      }
    });
  }
}