const express = require('express');
const chanRoutes = require('./chanRoutes');
const messageRoutes = require('./messageRoutes');
const threadRoutes = require('./threadRoutes');
const userRoutes = require('./userRoutes');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Home page.');
});

chanRoutes(router);
messageRoutes(router);
threadRoutes(router);
userRoutes(router);

module.exports = router;
