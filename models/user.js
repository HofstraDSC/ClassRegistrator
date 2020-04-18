const db =  require(database);

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
//Alonzo's
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