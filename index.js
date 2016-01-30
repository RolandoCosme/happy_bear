debugger;

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'bears_db'
});
 
connection.connect();
 
connection.query('SELECT happy_bears.name, favorite_food, personality FROM happy_bears;', function(err, rows, fields) {
  if (err) throw err;
  for ( var i = 0; i < rows.length; i++) {
    console.log(rows[i].name + " is " + rows[i].personality);
  }
});
 
connection.end();