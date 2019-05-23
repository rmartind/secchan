const mongoose = require('mongoose');

const { Schema } = mongoose;

const chanSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    minlength: 2,
    maxlength: 100,
  },
  type: {
    type: String,
    minlength: 3,
    maxlength: 50,
  },
  nsfw: Boolean,
  position: {
    type: Number,
    min: 0,
    max: 100,
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