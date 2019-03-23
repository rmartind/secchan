const passport = require('passport');
const mongoose = require('mongoose');
const { ExtractJwt } = require('passport-jwt');
const { Strategy } = require('passport-jwt');
const fs = require('fs');
const User = require('../models/userModel');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

fs.readFile('private.key', 'UTF-8', (err, data) => {
  if (err) throw err;
  opts.secretOrKey = data;

  passport.use('user-role', new Strategy(opts, (payload, done) => {
    User.findOne({ username: payload.username }, (jwtErr, user) => {
      if (err) return done(jwtErr, false);
      if (!user) return done(null, false);
      if (payload.role === 'user' && user.role === 'user') return done(null, user);
      return done(null, false);
    });
  }));

  passport.use('admin-role', new Strategy(opts, (payload, done) => {
    User.findOne({ payload: payload.username }, (jwtErr, user) => {
      if (jwtErr) return done(jwtErr, false);
      if (!user) return done(null, false);
      if (payload.role === 'admin' && user.role === 'admin') return done(null, user);
      if (payload.role === 'user' && user.role === 'user') return done(null, user);
      return done(null, false);
    });
  }));
});
