const dbcon = require("./DatabaseConnect")
const mysql = require("mysql2");
const connection = mysql.createConnection(dbcon);

connection.connect();

connection.query('SELECT * from user_table', (error, rows) => {
    if (error) throw error;
    dbdata = rows;
  });

  module.exports = {
    getUnum:function(row){
        const num = dbdata[row].user_number;
        return num;
    },
    getUid:function(row){
        const num = dbdata[row].user_id;
        return num;
    },
    getUpw:function(row){
        const num = dbdata[row].user_pw;
        return num;
    },
    getUname:function(row){
        const num = dbdata[row].user_name;
        return num;
    },
    getUphone:function(row){
        const num = dbdata[row].user_phone;
        return num;
    },
    getUemail:function(row){
        const num = dbdata[row].user_email;
        return num;
    },
    getUbirth:function(row){
        const num = dbdata[row].user_birth;
        return num;
    }
  }