const mongoose = require('mongoose');

const { Schema } = mongoose;

const messageSchema = new Schema({
  channelID: {
    type: String,
    required: true,
  },
  channel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chan',
    required: true,
  },
  threadID: {
    type: String,
    required: true,
  },
  thread: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thread',
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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

module.exports = mongoose.model('Message', messageSchema);
