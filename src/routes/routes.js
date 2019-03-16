const express = require('express');
const {
  getChanById,
  createChan,
  updateChanById,
  deleteChanById,
} = require('../controllers/chanController');

const {
  getThreadById,
  createThread,
  updateThreadById,
  deleteThreadById,
} = require('../controllers/threadController');

const {
  getMessageById,
  createMessage,
  updateMessageById,
  deleteMessageById,
} = require('../controllers/messageController');

const {
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require('../controllers/userController');

const router = express.Router();
const baseUrl = '/api/v1/';

router.get('/', (req, res) => {
  res.send('Home page.');
});

router.route(`${baseUrl}channels/:id?`)
  .get(getChanById)
  .post(createChan)
  .put(updateChanById)
  .delete(deleteChanById);

router.route(`${baseUrl}threads/:id?`)
  .get(getThreadById)
  .post(createThread)
  .put(updateThreadById)
  .delete(deleteThreadById);

router.route(`${baseUrl}messages/:id?`)
  .get(getMessageById)
  .post(createMessage)
  .put(updateMessageById)
  .delete(deleteMessageById);

router.route(`${baseUrl}users/:uid?`)
  .get(getUserById)
  .post(createUser)
  .put(updateUserById)
  .delete(deleteUserById);


module.exports = router;
