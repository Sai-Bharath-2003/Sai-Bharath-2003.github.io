const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '9701413588',
  database: 'rentify'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected');
});

module.exports = db;
