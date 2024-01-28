const express = require ('express');
const router = express.Router();
const product = require('../../models/reviewModel');

router.delete('/deleteReview', async (req, res) => { // Insert new review
    console.log(req.body);
    try {
        const { User_ID } = req.body;
        await product.deleteReview( User_ID );
        res.status(201).json({ message: 'Success'});
  } catch(error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error'}); // Error
  }
});

module.exports = router;