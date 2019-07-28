require('express');
const passport = require('passport');
require('../auth/jwtAuth');
const {
  getMessageById,
  createMessage,
  updateMessageById,
  deleteMessageById,
  getMessages,
} = require('../controllers/messageController');

const baseUrl = '/api/v1/messages/';

const messageRoutes = (router) => {
  router.route(`${baseUrl}`)
    .get(getMessages)
    .post(passport.authenticate('any-role',
      { session: false }), createMessage);

  router.route(`${baseUrl}:id`)
    .get(getMessageById)
    .put(passport.authenticate('user-role',
      { session: false }), updateMessageById)
    .delete(passport.authenticate('user-role',
      { session: false }), deleteMessageById);
};

module.exports = messageRoutes;
