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
    .get(getMessages);

  router.route(`${baseUrl}:id`)
    .get(getMessageById)
    .post(passport.authenticate('user-role',
      { session: false }), createMessage)
    .put(passport.authenticate('user-role',
      { session: false }), updateMessageById)
    .delete(passport.authenticate('user-role',
      { session: false }), deleteMessageById);
};

module.exports = messageRoutes;
