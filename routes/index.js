const express = require ('express');
const router = express.Router(); // All routing in one place - less code in the actual server when exported
const register = require('./user/register');
const login = require('./user/login');
const logout = require('./user/logout');
const getProduct = require('./product/getProduct');
const postReview = require('./reviews/postReview');
const getReview = require('./reviews/getReview');
const deleteReview  = require('./reviews/deleteReview');

// Login

router.use('/', register);

router.use('/', login);

router.use('/', logout);

// Product

router.use('/', getProduct);

// Review

router.use('/', postReview);

router.use('/', getReview);

router.use('/', deleteReview);

module.exports = router;
