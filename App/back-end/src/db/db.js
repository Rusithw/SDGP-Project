const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '139.59.103.54',
  user: 'testuser',
  password: 'rVdANJIapxqBsUEa',
  database: 'sdgpdb'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection;