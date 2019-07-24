const express = require('express');
const passport = require('passport');
const {
  getUserById,
  updateUserById,
  deleteUserById,
  registerUser,
  localLogin,
  getCurrentUser,
  deleteCurrentUser,
  updateCurrentUser,
  reauthToken,
} = require('../controllers/userController');

const baseUrl = '/api/v1/users/';

const userRoutes = (router) => {
  router.route(`${baseUrl}me`)
    // Get current user
    .get(passport.authenticate('any-role',
      { session: false }), getCurrentUser)
    // Update current user
    .put(passport.authenticate('any-role',
      { session: false }), updateCurrentUser)
    // Delete current user
    .delete(passport.authenticate('any-role',
      { session: false }), deleteCurrentUser);

  router.route(`${baseUrl}me/token`)
    .post(reauthToken);

  router.route(`${baseUrl}:uid`)
    // Get user
    .get(getUserById)
    // Update user
    .put(passport.authenticate('admin-role',
      { session: false }), updateUserById)
    // Delete user
    .delete(passport.authenticate('admin-role',
      { session: false }), deleteUserById);

  // Local login
  router.route(`${baseUrl}auth/login`)
    .post(localLogin);

  // User register
  router.route(`${baseUrl}auth/register`)
    .post(registerUser);
};

module.exports = userRoutes;
