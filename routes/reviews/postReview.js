const express = require ('express');
const router = express.Router();
const product = require('../../models/reviewModel');

router.post('/postReview', async (req, res) => { // Insert new review
    console.log(req.body);
    try {
        const { User_ID, Product_ID, Rating, Content } = req.body;
        await product.postReview( User_ID, Product_ID, Rating, Content );
        res.status(201).json({ message: 'Success'});
  } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error'}); // Error
  }
});

module.exports = router;