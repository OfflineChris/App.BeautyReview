const express = require('express');
const router = express.Router();
const passport = require('passport');
const authentication = require('../../controllers/authController');
const passportConfig = require('../../config/passportConfig');
const user = require('../../models/userModel');

passportConfig( // Configure passport on login
  passport,
  async (email) => await user.findByEmail(email),
  async (id) => await user.findById(id)
);

router.get('/login', authentication.checkAuthenticated, (req, res) => { // Render example page if user is not logged in
  res.render('login.ejs');
});

router.post('/login', authentication.checkAuthenticated, passport.authenticate('local', { // Login user if not already logged in
  successRedirect: '/YouAreLoggedIn',
  failureRedirect: '/YouARENOTLoggedIn',
  failureFlash: true
}));

module.exports = router;
