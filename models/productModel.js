const connection = require('../config/database');

module.exports = {
  findProductByEan: (ean) => { // Find product by EAN
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM Products WHERE EAN = ?';
      console.log(query)
      connection.query(query, [ean], (err, results) => {
        if (err) {
          reject(err);
        } else {
          if (results.length > 0) {
            const product = results;
            resolve(product); // Return product as json
          } else {
            resolve(null);
          }
        }
      });
    });
  },

  findProductByInput: (inputValue) => { // Find product by input value
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM Products WHERE (ID like ?) OR (Name like ?) OR (Brand like ?) OR (Brand_series like ?) OR (EAN like ?) LIMIT 50;";
      connection.query(query, [inputValue, inputValue, inputValue, inputValue, inputValue], (err, results) => {
        if (err) {
          reject(err);
        } else {
          if (results.length > 0) {
            const product = results;
            resolve(product); // Return product as json
          } else {
            resolve(null);
          }
        }
      });
    });
  },

  /* ADD CATEGORY TO THE PRODUCTS IF THIS IS TO EVER BE USED
  findProductByCategory: (category) => {
    return new Promise((resolve, reject) => { // Find product by category
      const query = 'SELECT * FROM `Products` WHERE Category like ?;';
      connection.query(query, [category], (err, results) => {
        console.log(query);
        if (err) {
          reject(err);
        } else {
          if (results.length > 0) {
            const product = results;
            resolve(product); // Return product as json
          } else {
            resolve(null);
          }
        }
      });
    });
  },*/

};
