const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const routes = require('./src/routes/routes');
require('./src/auth/localAuth');
require('./src/auth/jwtAuth');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/secchan', {
  useNewUrlParser: true,
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Express: port ${PORT}`);
});
