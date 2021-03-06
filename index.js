debugger;

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'bears_db'
});
 
connection.connect();

var showBears = function () {
  connection.query('SELECT * FROM happy_bears;', function(err, rows, fields) {
    if (err) throw err;
   // console.log(rows);
    for ( var i = 0; i < rows.length; i++) {
      console.log(rows[i].name + " is " + rows[i].personality);
    }
  });
}

var addBears = function () {
  connection.query('INSERT INTO happy_bears (name, favorite_food, personality) VALUES (?,?,?)', ["Smoky", "beef jerky", "mean"], function(err, results) {
    if (err) throw err;
    console.log("inserted");
  });
}

var deleteBears = function () {
  var query = "DELETE FROM happy_bears WHERE id=?";
  var idToBeDeleted = 5; //user input
  connection.query(query, idToBeDeleted, function(err, results) {
    if (err) throw err;
    console.log("deleted bears");
  });
}



showBears();
addBears();
deleteBears();

connection.end();