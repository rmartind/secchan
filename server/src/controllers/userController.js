require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/userModel');

const getCurrentUser = (req, res) => {
  req.user.hashedPassword = undefined;
  res.json(req.user);
};

const deleteCurrentUser = (req, res) => {
  User.deleteOne({ username: req.user.username }, (err, deletedUser) => {
    if (err) res.send(err);
    res.json(deletedUser);
  });
};

const updateCurrentUser = (req, res) => {
  User.findOneAndUpdate(req.user.username, req.body,
    { new: true }, (err, updatedUser) => {
      if (err) res.send(err);
      res.json(updatedUser);
    });
};

const getUserById = (req, res) => {
  User.findById(req.params.uid, (err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};

const updateUserById = (req, res) => {
  User.findByIdAndUpdate(req.params.uid, req.body,
    { new: true }, (err, updatedUser) => {
      if (err) res.send(err);
      res.json(updatedUser);
    });
};

const deleteUserById = (req, res) => {
  User.findByIdAndDelete(req.params.uid, (err, deletedUser) => {
    if (err) res.send(err);
    res.json(deletedUser);
  });
};

const localLogin = (req, res, next) => {
  passport.authenticate('local-login', (authError, user) => {
    if (authError || !user) {
      return res.status(401).send('User Auth Error');
    }
    req.login(user, { session: false }, (loginError) => {
      if (loginError) return next(loginError);
      jwt.sign({
        username: user.username,
        password: user.hashedPassword,
        role: user.role,
      }, 'DF3D81D29F464A8BCC3768BAC4264', (tokenError, token) => {
        if (tokenError) return next(tokenError);
        return res.json({
          token,
          username: user.username,
          role: user.role,
          email: user.email,
        });
      });
      return next(loginError);
    });
    return next(authError);
  })(req, res, next);
};

const registerUser = async (req, res) => {
  const password = await bcrypt.hash(req.body.password, 7);
  const newUser = await new User({ hashedPassword: password, ...req.body });
  await newUser.save();

  const token = await jwt.sign({
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
  }, 'DF3D81D29F464A8BCC3768BAC4264');
  delete req.body.password;

  return res.json({
    token,
    username: newUser.username,
    role: newUser.role,
    email: newUser.email,
  });
};

const reauthToken = (req, res, next) => {
  passport.authenticate('any-role', (authError, user) => {
    if (authError || !user) {
      return res.status(401).send('Reauthorization error');
    }
    return res.status(200).send('Reauthorization successful');
  })(req, res, next);
};

module.exports = {
  getUserById,
  updateUserById,
  deleteUserById,
  registerUser,
  localLogin,
  getCurrentUser,
  deleteCurrentUser,
  updateCurrentUser,
  reauthToken,
};
