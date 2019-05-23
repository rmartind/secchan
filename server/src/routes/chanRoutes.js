require('express');
require('../auth/jwtAuth');
const passport = require('passport');
const {
  getChans,
  getChanById,
  createChan,
  updateChanById,
  deleteChanById,
  getChanThreads,
} = require('../controllers/chanController');

const baseUrl = '/api/v1/channels/';


const chanRoutes = (router) => {
  router.route(`${baseUrl}`)
    // Get channels
    .get(getChans)
    // Create channel
    .post(passport.authenticate('admin-role',
      { session: false }), createChan);

  router.route(`${baseUrl}:id`)
    // Get channel
    .get(getChanById)
    .put(passport.authenticate('admin-role',
      { session: false }), updateChanById)
    // Delete channela
    .delete(passport.authenticate('admin-role',
      { session: false }), deleteChanById);

  router.route(`${baseUrl}:id/threads`)
    // Get channel threads
    .get(getChanThreads);
};

module.exports = chanRoutes;
