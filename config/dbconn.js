const mysql = require("mysql");

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'citest',
    port: '3306'
  });


  connection.getConnection(function(err, conn){
    if(err){
        console.log('Something went wrong' + err);
    }
    else{
        console.log('Database Connected.');
    }
  })
  
  module.exports = connection;