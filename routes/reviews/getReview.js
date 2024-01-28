const express = require ('express');
const router = express.Router();
const review = require('../../models/reviewModel');

router.get('/getReviewByProduct', async (req, res) => { // Get review by it's ID from DB
    try {
        const { Product_ID } = req.body;
        foundReview = await review.getReviewByProduct( Product_ID );
        res.status(201).json({ message: foundReview}); // Return review as json message
  } catch(error) {
    console.log(error);
        res.status(500).json({ error: 'Internal Server Error'}); // Error
  }
});

router.get('/getReviewByUser', async (req, res) => { // Get review by user id from DB
  try {
      const { User_ID } = req.body;
      foundReview = await review.getReviewByUser( User_ID );
      res.status(201).json({ message: foundReview}); // Return review as json message
} catch(error) {
  console.log(error);
      res.status(500).json({ error: 'Internal Server Error'}); // Error
}
});

module.exports = router;