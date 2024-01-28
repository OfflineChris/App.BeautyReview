const express = require ('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const user = require('../../models/userModel');
const authentication = require('../../controllers/authController');

router.get('/register', authentication.checkAuthenticated, (req, res) => { // Render example page if user is not logged in
  res.render('register.ejs');
});

router.post('/register', authentication.checkAuthenticated, async (req, res) => { // Perform registration to the DB
  try {
    const { First_Name, Last_Name, Email, Password } = req.body;
    if (isEmailValid(Email)){
      return res.status(422).json({ error: 'Given email address is not valid' });
    }
    const userExists = await user.checkIfUserExists(Email.toLowerCase()); // Check if user already exists
    if (userExists) {
      return res.status(409).json({ error: 'User with this email already exists' });
    }
    const hashedPassword = await bcrypt.hash(Password, 10); 
    await user.createUser( (First_Name[0].toUpperCase() + First_Name.slice(1).toLowerCase()), Last_Name, Email.toLowerCase(), hashedPassword); // Create user if it does not exist yet

    res.status(201).json({ message: 'User registered successfully'});
    

  } catch(error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error'}); // Error
  }
});
// Validate email
var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

function isEmailValid(email) {
    if (!email)
        return false;

    if(email.length>254)
        return false;

    var valid = emailRegex.test(email);
    if(!valid)
        return false;

    // Further checking of some things regex can't handle
    var parts = email.split("@");
    if(parts[0].length>64)
        return false;

    var domainParts = parts[1].split(".");
    if(domainParts.some(function(part) { return part.length>63; }))
        return false;

    return true;
}

module.exports = router;