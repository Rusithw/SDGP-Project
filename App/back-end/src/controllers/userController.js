const { error } = require("console");
const connection = require("../db/db");
const { json } = require("body-parser");

// database connection query for userlogin. here, select all added users from the user table 
exports.userLogin = (req, res) => {
  const data = req.body;
  console.log(data.userName);
  console.log(data.userPassword);
  connection.query(
    "SELECT * FROM user WHERE user_name = ?",
    [data.userName],
    (error, results) => {
      if (error) {
        console.error("Error fetching sample data:", error);
        res.json("0");
        return;
      }
      // res.json(results);
      console.log("This is:", results.length);
      if (results.length > 0) {
        if (results[0].user_password === data.userPassword) {
          res.json(results[0].user_id);
        } else {
          res.json("0");
        }
      } else {
        res.json("0");
      }
    }
  );
};

// database connection query for user signup. here, insert data to the user table
exports.userSignUp = (req, res) => {
  const data = req.body;
  console.log(data);

  connection.query(
    "INSERT INTO user SET ?", data,
    (error, results) =>{
        if(error){
          console.error("Error fetching sample data:", error);
          res.json("0");
          return;
        }
        console.log("This is:", results.length);
    }
  )
};

// database connection query for get user details from the user table
exports.userDetailsByUserName = (req, res) => {
  const data = req.body;
  console.log(data);

  connection.query(
    "SELECT user_name, user_first_name, user_last_name, user_email, user_mobile, user_address, city_id FROM user WHERE user_name =? ", [data.user_name],
    (error, results) => {
      if(error){
        console.error("Error fetching sample data:", error);
        res.json("0");
        return;
      }
      res.json(results)
    }
  )
}

// Database query to save user profile data during enrollment
exports.profileDataSave = (req, res) => {
  const data = req.body;
  console.log(data);

  connection.query(
    "INSERT INTO enrolement SET ?", data,
    (error, results) =>{
      if(error){
        console.error("Error fetching sample data:", error);
        res.json("0");
        return;
      }
      console.log("This is:", results.length);
  }
  )
}