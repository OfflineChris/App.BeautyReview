if (process.env.NODE_ENV !== 'production') { // Load DOTENV config file
  require('dotenv').config()
};

const express = require('express');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const methodOverride = require('method-override');
const router = require('./routes/index'); // Here are all the routes

const PORT = process.env.PORT || 3000; // Get port from the env file || use default port

const app = express();
app.use(express.json()); // Used to pass json
app.use(flash()); // Used to flash messages on the actual pages
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

app.use(router); // Here, the routes are used

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
