const express = require ('express')
const router = express.Router()
const authentication = require('../../controllers/authController')

router.delete('/logout', authentication.checkNotAuthenticated, (req, res, next) => { // Log out user by deleting it's session
    req.logOut(next);
    res.redirect('/LogoutSuccess');
  })

module.exports = router;