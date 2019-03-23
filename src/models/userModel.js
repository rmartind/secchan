const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
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
  role: {
    type: String,
    required: true,
    default: 'user',
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
