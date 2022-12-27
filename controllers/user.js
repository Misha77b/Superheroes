const User = require('../models/userSchema');

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const passport = require("passport");
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

exports.logInUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({$or: [{email: email}, {password: password}]})
    .then(user => {
      if(user){
        const payload = {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          isAdmin: user.isAdmin
        };
        bcrypt.compare(password, user.password, function(err, result){
          console.log(password, user.password);
          if(err) {
            res
            .status(404)
            .json({ message: `User not found` });
          }
          if(result) {
            let token = jwt.sign(payload, 'very secret value', {expiresIn: 3600000})
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