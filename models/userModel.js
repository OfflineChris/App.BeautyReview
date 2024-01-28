const connection = require('../config/database');

module.exports = { // Create new user
  createUser: async (name, lastName, email, password) => {
    const query = 'INSERT INTO Users (First_Name, Last_Name, Email, Password, Registration_Date) VALUES (?, ?, ?, ?, CURDATE())';
    await connection.promise().query(query, [name, lastName, email, password]);
  },

  findByEmail: (email) => { // Find user by email
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM Users WHERE Email = ?';
      connection.query(query, [email], (err, results) => {
        if (err) {
          reject(err);
        } else {
          if (results.length > 0) {
            const user = results[0];
            resolve(user);
          } else {
            resolve(null);
          }
        }
      });
    });
  },

  findById: (id) => { // Find user by ID
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM Users WHERE ID = ?';
      connection.query(query, [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          if (results.length > 0) {
            const user = results[0];
            resolve(user);
          } else {
            resolve(null);
          }
        }
      });
    });
  },

  checkIfUserExists: async (email) => { // Check if user exists in database
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM Users WHERE Email = ?';
      connection.query(query, [email], (err, results) => {
        if (err) reject(err);

        if (results.length > 0) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  },
};
