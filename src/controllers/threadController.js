const mongoose = require('mongoose');
const Thread = require('../models/threadModel');

const getThreads = (req, res) => {

};

const getThreadById = (req, res) => {
  Thread.findById(req.params.id, (err, thread) => {
    if (err) res.send(err);
    res.json(thread);
  });
};

const createThread = (req, res) => {
  const thread = new Thread(req.body);
  thread.save((err, createdThread) => {
    if (err) res.send(err);
    res.json(createdThread);
  });
};

const updateThreadById = (req, res) => {
  Thread.findByIdAndUpdate(req.params.id, req.body,
    { new: true }, (err, updatedThread) => {
      if (err) res.send(err);
      res.json(updatedThread);
    });
};

const deleteThreadById = (req, res) => {
  Thread.findByIdAndDelete(req.params.id, (err, deletedThread) => {
    if (err) res.send(err);
    res.json(deletedThread);
  });
};

const getThreadMessages = (req, res) => {

};

module.exports = {
  getThreads,
  getThreadById,
  createThread,
  updateThreadById,
  deleteThreadById,
  getThreadMessages,
};
