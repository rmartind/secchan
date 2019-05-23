const mongoose = require('mongoose');
const Message = require('../models/messageModel');

const getMessages = (req, res) => {

};

const getMessageById = (req, res) => {
  Message.findById(req.params.uid, (err, message) => {
    if (err) res.send(err);
    res.json(message);
  });
};

const createMessage = (req, res) => {
  const message = new Message(req.body);
  message.save((err, createdMessage) => {
    if (err) res.send(err);
    res.json(createdMessage);
  });
};

const updateMessageById = (req, res) => {
  Message.findByIdAndUpdate(req.params.uid, req.body,
    { new: true }, (err, updatedMessage) => {
      if (err) res.send(err);
      res.json(updatedMessage);
    });
};

const deleteMessageById = (req, res) => {
  Message.findByIdAndDelete(req.params.uid, (err, deletedMessage) => {
    if (err) res.send(err);
    res.json(deletedMessage);
  });
};

module.exports = {
  getMessageById,
  createMessage,
  updateMessageById,
  deleteMessageById,
  getMessages,
};
