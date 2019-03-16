const mongoose = require('mongoose');

const { Schema } = mongoose;

const threadSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  chanID: {
    type: Number,
    required: true,
  },
  userID: {
    type: Number,
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

module.exports = mongoose.model('Thread', threadSchema);
