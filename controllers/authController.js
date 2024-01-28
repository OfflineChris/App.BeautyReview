function checkNotAuthenticated(req, res, next) { // Continue if user is logged in
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/login')
}

function checkAuthenticated(req, res, next) { // Redirect to login page if user is not logged in
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}

module.exports = { checkAuthenticated, checkNotAuthenticated }