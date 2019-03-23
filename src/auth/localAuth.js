const passport = require('passport');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/userModel');

passport.use('local-login', new LocalStrategy({ session: false },
  (username, password, done) => {
    User.findOne({ username }, (userError, user) => {
      if (userError) return done(userError);
      if (!user) return done(null, false);
      return bcrypt.compare(password, user.hashedPassword, (passwordError, result) => {
        if (userError) return done(passwordError);
        if (!result) return done(null, false);
        return done(null, user);
      });
    });
  }));
