const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

async function initialize(passport, findByEmail, findById) {
  const authenticateUser = async (email, password, done) => { // Authenticate user by getting and comparing their email and password
    try {
      const user = await findByEmail(email); // Check if user exists
      if (!user) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }
      if (await bcrypt.compare(password, user.password)) { // Then check their password
        return done(null, user);
      } else {
        return done(null, false, { message: 'Incorrect email or password.' });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser)); // Auth with passport LocalStrategy using authenticateUser function
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    const user = await findById(id);
    return done(null, user);
  });
}

module.exports = initialize;
