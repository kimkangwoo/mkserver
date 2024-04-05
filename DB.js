var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'myserver'
});
 
connection.connect();
 
connection.query('SELECT * FROM user.user_status', function (error, results, fields) {
  if (error) throw error;
  console.log('users: ', results);
});
 
connection.end();
