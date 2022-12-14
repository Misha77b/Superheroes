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


exports.signUpUser = async (req, res) => {

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
            const payload = {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              isAdmin: user.isAdmin
            };
            
            let token = jwt.sign(
              payload, 
              SECRET, 
              { expiresIn: 360000000000 }
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

exports.getUsers = async (req, res) => {
  try{
    const users = await User.find({})
    res.send({users});
  } catch (e) {
      res.status(500).json(e);
  }
};

exports.authUser = async (req, res, next) => {
  try{
    const token = req.headers.authorization.split(' ')[1];
    const decode = jwt.verify(token, SECRET);

    console.log(decode);
    res.send(decode)
    // let userId = decode.id
    // console.log(userId);
    // User.findOne({id, userId})
    //   .then((user) => {
    //     user
    //   })
  
    // req.user = decode;
    next()
  }
  catch(err) {
    res.json({
      message: `Authorization  failed ${err}`
    })
  }
};

exports.editUserInfo = async (req, res) => {

};

exports.updateUser = async (res, req, next) => {

};