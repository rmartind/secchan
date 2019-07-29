require('mongoose');
const Message = require('../models/messageModel');
const User = require('../models/userModel');

const getMessages = async (req, res) => {
  try {
    const populaters = [{ path: 'thread' }, { path: 'user' }, { path: 'channel' }];
    const message = await Message.find({}).populate(populaters);
    res.json(message);
  } catch (error) {
    res.json(error);
  }
};

const getMessageById = async (req, res) => {
  try {
    const populaters = [{ path: 'thread' }, { path: 'user' }, { path: 'channel' }];
    const message = await Message.findById(req.params.id).populate(populaters);
    res.json(message);
  } catch (error) {
    res.json(error);
  }
};

const createMessage = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.user.username });
    const data = {
      channelID: req.body.channelID,
      channel: req.body.channelID,
      threadID: req.body.threadID,
      thread: req.body.threadID,
      userID: user.id,
      user: user.id,
      content: req.body.content,
    };
    let newMessage = await new Message(data);
    newMessage = await newMessage.save();
    res.json(newMessage);
  } catch (error) {
    res.json(error);
  }
};

const updateMessageById = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.user.username });
    const query = {
      _id: req.params.id,
      userID: user.id,
    };
    req.body.id = user.id;
    const updatedMessage = await Message.findOneAndUpdate(query, req.body.content, { new: true });
    res.json(updatedMessage);
  } catch (error) {
    res.json(error);
  }
};

const deleteMessageById = async (req, res) => {
  try {
    const deletedMessage = await Message.findOneAndDelete({
      _id: req.params.id,
      userID: req.user.id,
    });
    res.json(deletedMessage);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getMessageById,
  createMessage,
  updateMessageById,
  deleteMessageById,
  getMessages,
};
