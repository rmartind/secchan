const mongoose = require('mongoose');

const { Schema } = mongoose;

const threadSchema = new Schema({
  channelID: {
    type: String,
    required: true,
  },
  channelName: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
  },
  content: {
    type: String,
    minlength: 2,
    maxlength: 2000,
    required: true,
  },
  creation: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Thread', threadSchema);
