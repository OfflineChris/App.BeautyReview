const mysql = require('mysql2');

const createConnection = (err) => { // Standard DB connection
  return mysql.createConnection(
    {
    host: 'banner.cba.pl',
    user: 'artemida',
    password: 'Vkrk8eEi!eWQKLd',
    database: 'grupa1wsb',
    //host: 'localhost',
    //user: 'root',
    //password: '',
    //database: 'beautyReview',
  });
};

module.exports = createConnection(); 
