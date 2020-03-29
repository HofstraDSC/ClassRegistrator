const db =  require(database);

function getUser(student)
{
    //Find user
    db.query(`SELECT * FROM Student WHERE id = ${student}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("Student: ", res[0]);
      result(null, res[0]);
      return;
    }
    //Student not found
    result({ kind: "not_found" }, null);
  });
}

function searchClassesForUser()
{
   db.query(`SELECT * FROM Courses`, function (err, res) {
    if (err)
    {        
        console.log("error: ", err);
        result(err, null);
        return;
    }
    //Run logic to check for validity
    result(null,res);
  });
}

function addCourseToUser(sid, courseID, column)
{
    db.query(`UPDATE Students SET {column} = ${courseID} WHERE studentID = ${sid}`,function (err, res) {
    if (err)
    {        
        console.log("error: ", err);
        result(err, null);
        return;
    });
}
//Alonzo's
function removeCourseFromUser(sid, courseID, column)
{
 db.query(`UPDATE Students SET ${column} = "" WHERE studentID = ${sid}`,function (err, res) {
    if (err)
    {        
        console.log("error: ", err);
        result(err, null);
        return;
    });   
}