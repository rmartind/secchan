const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./src/routes/routes');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/secchan', {
  useNewUrlParser: true,
});

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);
app.use(express.static('public'));


app.listen(PORT, () => {
  console.log(`Express: port ${PORT}`);
});
