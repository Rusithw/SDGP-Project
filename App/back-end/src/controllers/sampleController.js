const connection = require('../db/db'); // Import the db.js file from the db folder

// Get Sample Data controller function
exports.getSampleData = (req, res) => {
  connection.query('SELECT * FROM user', (error, results) => {
    if (error) {
      console.error('Error fetching sample data:', error);
      res.status(500).json({ message: 'Error fetching data' });
      return;
    }
    res.json(results);
  });
};

// Create Sample Data controller function
exports.createSampleData = (req, res) => {
  // Assuming req.body contains the data to be inserted into the database
  const data = req.body;

  connection.query('INSERT INTO your_table SET ?', data, (error, result) => {
    if (error) {
      console.error('Error creating sample data:', error);
      res.status(500).json({ message: 'Error creating data' });
      return;
    }
    res.json({ message: 'Data created successfully' });
  });
};