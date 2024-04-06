var mysql      = require('mysql2');

var connection = mysql.createConnection({
  host     : 'localhost',
  port: "3306", // 데이터베이스 포트
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

module.exports = {
  init: function () {
    return mysql.createConnection(db_info);
  },
  connect: function (conn) {
    conn.connect(function (err) {
      if (err) console.error("mysql connection error : " + err);
      else console.log("mysql is connected successfully!");
    });
  },
};