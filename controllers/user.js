const User = require('../models/userSchema');

const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const _ = require("lodash");
// const passport = require("passport");
// const uniqueRandom = require("unique-random");
// const rand = uniqueRandom(10000000, 99999999);


exports.registerUser = async (req, res) => {

  const initialQuery = _.cloneDeep(req.body);
  const saltRounds = 10;
  const newUser = new User(initialQuery);

  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {

    console.log(req.body);
    if (err) {
      res
        .status(400)
        .json({ message: `Error happened on server: ${err}` });

      return;
    }

    console.log(newUser);
    newUser
      .save()
      .then(user => res.json({message: 'User Added successfully!'}))
      .catch(err =>
        res.status(400).json({
          message: `Error happened on server: "${err}"`
        })
      );
      
      console.log(hash);
    });
  });
};

exports.logInUser = async (req, res, next) => {

};

exports.getUser = async (req, res, next) => {

};

exports.editUserInfo = async (req, res, next) => {

};

exports.updateUser = async (res, req, next) => {

};