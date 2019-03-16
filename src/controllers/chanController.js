const mongoose = require('mongoose');
const Chan = require('../models/chanModel');


const getChanById = (req, res) => {
  Chan.findById(req.params.id, (err, chan) => {
    if (err) res.send(err);
    res.json(chan);
  });
};

const createChan = (req, res) => {
  const chan = new Chan(req.body);
  chan.save((err, createdChan) => {
    if (err) res.send(err);
    res.json(createdChan);
  });
};

const updateChanById = (req, res) => {
  Chan.findByIdAndUpdate(req.params.id, req.body,
    { new: true }, (err, updatedChan) => {
      if (err) res.send(err);
      res.json(updatedChan);
    });
};

const deleteChanById = (req, res) => {
  Chan.findByIdAndDelete(req.params.id, (err, deletedChan) => {
    if (err) res.send(err);
    res.json(deletedChan);
  });
};

module.exports = {
  getChanById,
  createChan,
  updateChanById,
  deleteChanById,
};
