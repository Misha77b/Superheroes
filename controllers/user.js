const User = require('../models/userSchema');
require("dotenv").config(); // load .env variables

//DESTRUCTURE ENV VARIABLES WITH DEFAULTS
const { SECRET = "secret" } = process.env;

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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

    newUser.password = hash;
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
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({
    $or: [{email: email}, {login: email}]
  })
    .then(user => {
      if(!user) {
        res
        .status(404)
        .json({ message: `User not found` });
      } else {
        bcrypt.compare(password, user.password).then(result => {
          console.log(password, user.password);
          if(result) {
            // console.log(!result);
            const payload = {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              isAdmin: user.isAdmin
            };
            console.log(payload);
            
            let token = jwt.sign(
              payload, 
              SECRET, 
              { expiresIn: 3600000 }
            )
            res.json({
              success: true,
              token: "Bearer " + token
            });
          } else {
            return res.status(400).json({ message: `Password is incorrect` });
          }
        })
      }
    })      
    .catch(err =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `
      })
    );
};

exports.getUser = async (req, res) => {

};

exports.editUserInfo = async (req, res) => {

};

exports.updateUser = async (res, req, next) => {

};