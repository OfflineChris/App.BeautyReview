const express = require ('express');
const router = express.Router();
const product = require('../../models/productModel');

router.get('/getByEan', async (req, res) => { // Get product by EAN from DB
    try {
        const { EAN } = req.body;
        foundProduct = await product.findProductByEan( EAN );
        res.status(201).json({ message: foundProduct}); // Return product as json message
  } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error'}); // Error
  }
});

  router.get('/getByInput', async (req, res) => { // Get product by EAN from DB
      try {
          const { inputValue } = req.body;
          foundProduct = await product.findProductByInput( inputValue );
          res.status(201).json({ message: foundProduct}); // Return product as json message
    } catch(error) {
          console.log(error);
          res.status(500).json({ error: 'Internal Server Error'}); // Error
    }
  });

  /* ADD CATEGORY BEFORE USING THIS
  router.get('/getByCategory', async (req, res) => { // Get product category from DB
      try {
          const { category } = req.body;
          foundProduct = await product.findProductByCategory( category );
          res.status(201).json({ message: foundProduct}); // Return product as json message
    } catch(error) {
          console.log(error);
          res.status(500).json({ error: 'Internal Server Error'}); // Error
    }
  });*/


module.exports = router;