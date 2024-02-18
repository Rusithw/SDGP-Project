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
      const insertedId = results.insertId;
      res.json(insertedId)
  }
  )
}

exports.dataSaveModules = (req, res) => {
  const data = req.body;
  console.log(data);

  connection.query(
    "INSERT INTO enrolement_has_university_program_modules SET ?", data,
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

// Here created a database connection query to load profile data. Here we have applied an INNER-Join query to get data from enrollment table and enrolement_has_university_program_modules table.
exports.loadProfileData = (req, res) =>{
  const data = req.body;
  console.log(data)
  connection.query( 'SELECT * FROM enrolement INNER JOIN enrolement_has_university_program_modules ON enrolement_has_university_program_modules.enrolement_id = enrolement.enrolement_id  WHERE enrolement.user_id = ?', [data.user_id] ,
  (error, results)  =>{
      if(error){
          console.log("Error message", error);
          res.status(500).json({ message: 'Error fetching data' });
          return;
      }
      res.json(results);
  });
};

// Users have been loaded from the database(back-end) according to user id to the My Account page.
exports.getUser = (req, res) =>{
  const value = req.body;
  connection.query
  ('SELECT * FROM user WHERE user_id=? ',
  value.user_id,
  (error, results) =>{
    if(error){
      console.log("Error:", error);
      res.json({})
      return
    }
    console.log(results[0]);
    res.json(results[0]);
  }
  )

};

// This is where users are updated as a query.
exports.updateUser = (req, res) =>{
  const{id} = req.params;
  const updatedData = req.body;
  connection.query('UPDATE user SET ? WHERE user_id = ?', [updatedData, id], (error, result) =>{
    if(error){
      console.error('Error updating sample data:', error);
      res.status(500).json({message:'Error updating data'});
      return
    }
    if(result.affectedRows === 0){
      res.status(404).json({message:'Data not found'});
    }
    res.json({message: 'Data updated successfully'})
  }

  )
};

// All cities are loaded from this query from city table in database.
exports.getCities = (req, res) =>{
  const data = req.body;
  connection.query('SELECT * FROM city ', [data], 
  (error, results) => {
    if(error){
      console.log('Error message', error);
      res.status(500).json({message: 'Error fetching data'});
      return;
    }
    res.json(results)
  }
  )
}