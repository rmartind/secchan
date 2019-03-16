const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 31,
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 32,
  },
  hashedPassword: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 64,
  },
  phone: {
    type: String,
  },
  ipAddr: {
    type: Number,
  },
  creation: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
