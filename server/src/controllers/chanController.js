require('mongoose');
const Chan = require('../models/chanModel');
const Threads = require('../models/threadModel');

const getChans = async (req, res) => {
  try {
    const chans = await Chan.find({});
    res.json(chans);
  } catch (error) {
    res.json(error);
  }
};

const getChanById = async (req, res) => {
  try {
    const chan = await Chan.findById(req.params.id);
    res.json(chan);
  } catch (error) {
    res.json(error);
  }
};

const createChan = async (req, res) => {
  try {
    let newChan = await new Chan(req.body);
    newChan = await newChan.save();
    res.json(newChan);
  } catch (error) {
    res.json(error);
  }
};

const updateChanById = async (req, res) => {
  try {
    const updatedChan = await Chan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedChan);
  } catch (error) {
    res.json(error);
  }
};

const deleteChanById = async (req, res) => {
  try {
    const deletedChan = await Chan.findByIdAndDelete(req.params.id);
    res.json(deletedChan);
  } catch (error) {
    res.json(error);
  }
};

const getChanThreads = async (req, res) => {
  try {
    const threads = Threads.find(req.params.channelID);
    res.send(threads);
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  getChans,
  getChanById,
  createChan,
  updateChanById,
  deleteChanById,
  getChanThreads,
};
