const mysql = require('mysql');

// Connected  Back End with MySQL Data Base (Data Base connection created)
const connection = mysql.createConnection({
  host: '128.199.242.254',
  user: 'sdgp',
  password: 'VUp[4u0N!fvC.LJV',
  database: 'sdgp'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection;