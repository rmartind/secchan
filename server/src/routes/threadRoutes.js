 require('express');
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
    .get(getThreads)

    .post(passport.authenticate('any-role',
      { session: false }), createThread);

  router.route(`${baseUrl}:id`)
    .get(getThreadById)

    .put(passport.authenticate('any-role',
      { session: false }), updateThreadById)

    .delete(passport.authenticate('any-role',
      { session: false }), deleteThreadById);

  router.route(`${baseUrl}:thread/messages`)
    // Get thread messages
    .get(getThreadMessages);
};

module.exports = threadRoutes;
