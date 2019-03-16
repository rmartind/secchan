const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');


const getUserById = (req, res) => {
  User.findById(req.params.uid, (err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};

const createUser = async (req, res) => {
  const count = await User.countDocuments() + 1;
  const password = await bcrypt.hash(req.body.password, 7);
  delete req.body.password;
  const newUser = await new User({ _id: count, hashedPassword: password, ...req.body });
  await newUser.save();
  res.json(newUser);
};

const updateUserById = (req, res) => {
  User.findByIdAndUpdate(req.params.uid, req.body,
    { new: true }, (err, updatedUser) => {
      if (err) res.send(err);
      res.json(updatedUser);
    });
};

const deleteUserById = (req, res) => {
  User.findByIdAndDelete(req.params.uid, (err, deletedUser) => {
    if (err) res.send(err);
    res.json(deletedUser);
  });
};

module.exports = {
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
