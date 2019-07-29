require('mongoose');
const Thread = require('../models/threadModel');
const User = require('../models/userModel');
const Message = require('../models/messageModel');

const getThreads = async (req, res) => {
  try {
    const thread = await Thread.find({}).populate('user');
    res.json(thread);
  } catch (error) {
    res.json(error);
  }
};

const getThreadById = async (req, res) => {
  try {
    const thread = await Thread.findById(req.params.id).populate('user');
    res.json(thread);
  } catch (error) {
    res.json(error);
  }
};

const createThread = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.user.username });
    const data = {
      channelID: req.body.channelID,
      channelName: req.body.channelName,
      userID: user.id,
      user: user.id,
      title: req.body.title,
    };
    let newThread = await new Thread(data);
    newThread = await newThread.save();
    res.json(newThread);
  } catch (error) {
    res.json(error);
  }
};

const updateThreadById = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.user.username });
    const query = {
      _id: req.params.id,
      userID: user.id,
    };
    const updatedThread = await Thread.findOneAndUpdate(query, req.body.title, { new: true });
    res.json(updatedThread);
  } catch (error) {
    res.json(error);
  }
};

const deleteThreadById = async (req, res) => {
  try {
    const deletedThread = await Thread.findOneAndDelete({
      _id: req.params.id,
      userID: req.user.id,
    });
    res.json(deletedThread);
  } catch (error) {
    res.json(error);
  }
};

const getThreadMessages = async (req, res) => {
  try {
    const populaters = [{ path: 'thread' }, { path: 'user' }, { path: 'channel' }];
    const messages = await Message.find({ threadID: req.params.thread }).populate(populaters);
    res.send(messages);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getThreads,
  getThreadById,
  createThread,
  updateThreadById,
  deleteThreadById,
  getThreadMessages,
};
