const connection = require('../config/database');

module.exports = {
  postReview: (userID, productID, rating, content) => { // Insert new review
    return new Promise((resolve, reject) => { 
      const query = 'INSERT INTO reviews (User_ID, Product_ID, Rating, Content, Creation_Date) VALUES (?, ?, ?, ?, CURDATE());';
      connection.query(query,[userID, productID, rating, content], (err, results) => {
        if (err) {
          reject(err); // Error
        } else {
          resolve(null); // Success
        }
      });
    });
  },

  getReviewByProduct: (productID) => { // Get existing review for a specific product
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM reviews WHERE Product_ID = ?;';
      connection.query(query,[ productID ], (err, results) => {
        if (err) {
          reject(err); // Error
        } else {
          resolve(results); // Success
        }
      });
    });
  },

  getReviewByUser: (userID) => { // Get existing review for a specific user
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM reviews WHERE User_ID = ?;';
      connection.query(query,[ userID ], (err, results) => {
        if (err) {
          reject(err); // Error
        } else {
          resolve(results); // Success
        }
      });
    });
  },

  deleteReview: (userID) => { // Delete existing review
    return new Promise((resolve, reject) => {
      const query = 'DELETE FROM reviews WHERE User_ID = ?;';
      connection.query(query,[ userID ], (err, results) => {
        if (err) {
          reject(err); // Error
        } else {
          resolve(null); // Success
        }
      });
    });
  },
};
