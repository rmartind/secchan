require('mongoose');
const Message = require('../models/messageModel');
const User = require('../models/userModel');

const getMessages = async (req, res) => {
  try {
    const message = await Message.find({});
    res.json(message);
  } catch (error) {
    res.json(error);
  }
};

const getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    res.json(message);
  } catch (error) {
    res.json(error);
  }
};

const createMessage = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.user.username });
    const data = {
      threadID: req.body.threadID,
      userID: user.id,
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
    const updatedMessage = await Message.findOneAndUpdate(query, req.body, { new: true });
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
