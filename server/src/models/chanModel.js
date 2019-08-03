const mongoose = require('mongoose');

const { Schema } = mongoose;

const chanSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    minlength: 3,
    maxlength: 50,
  },
  creation: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Chan', chanSchema);

/*
Channel types
General
Hacking 
Coding 
NSFW
*/