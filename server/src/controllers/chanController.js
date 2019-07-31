require('mongoose');
const Chan = require('../models/chanModel');
const Thread = require('../models/threadModel');

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

const getChanThreadsByID = async (req, res) => {
  try {
    const threads = await Thread.find(req.params.channelID);
    res.send(threads);
  } catch (error) {
    res.json(error);
  }
};

const getChanByName = async (req, res) => {
  try {
    const channel = await Chan.findOne(req.params).populate('user');
    res.json(channel);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

const getChanThreadsByName = async (req, res) => {
  try {
    const channel = await Thread.find({ channelName: req.params.name }).populate('user');
    res.json(channel);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};


module.exports = {
  getChans,
  getChanById,
  createChan,
  updateChanById,
  deleteChanById,
  getChanThreadsByID,
  getChanThreadsByName,
  getChanByName,
};
