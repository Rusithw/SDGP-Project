const { error } = require("console");
const connection = require("../db/db");
const { json } = require("body-parser");

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
          res.json("1");
        } else {
          res.json("0");
        }
      } else {
        res.json("0");
      }
    }
  );
};

exports.userSignUp = (req, res) => {};