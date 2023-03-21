var pool = require('../config/dbconn');


const User = function(user){
    this.name = user.name;
    this.occupation = user.occupation;
    this.age = user.age;
}


User.createUser = function(user, result){
    pool.query(`INSERT INTO users SET ?`, user, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        console.log("User created");
        result(null, { message: "User Created" });
      });
}


User.getAllUser = function(result){
    pool.query(`select * from users`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        result(null, res);
      });
}


module.exports = User;