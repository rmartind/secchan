const mongoose = require('mongoose');

const { Schema } = mongoose;

const messageSchema = new Schema({
  chanID: {
    type: String,
    required: true,
  },
  threadID: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    minlength: 2,
    maxlength: 100,
  },
  creation: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Message', messageSchema);
