const express = require('express');
const passport = require('passport');
require('../auth/jwtAuth');
const {
  getThreads,
  getThreadById,
  createThread,
  updateThreadById,
  deleteThreadById,
  getThreadMessages,
} = require('../controllers/threadController');

const baseUrl = '/api/v1/threads/';

const threadRoutes = (router) => {
  router.route(`${baseUrl}`)
    // Get threads
    .get(getThreads);

  router.route(`${baseUrl}:id`)
    // Get thread
    .get(getThreadById)
    // Create thread
    .post(passport.authenticate('user-role',
      { session: false }), createThread)
    // Update thread
    .put(passport.authenticate('user-role',
      { session: false }), updateThreadById)
    // Delete thread
    .delete(passport.authenticate('user-role',
      { session: false }), deleteThreadById);

  router.route(`${baseUrl}:id/messages`)
    // Get thread messages
    .get(getThreadMessages);
};

module.exports = threadRoutes;
