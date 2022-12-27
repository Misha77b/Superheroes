const User = require('../models/userSchema');
const fs = require('fs');

const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const _ = require("lodash");
// const passport = require("passport");
// const uniqueRandom = require("unique-random");
// const rand = uniqueRandom(10000000, 99999999);


exports.registerUser = (req, res, next) => {

    const saltRounds = 10;
    const password = req.body.password;

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {

            if (err) {
                res
                  .status(400)
                  .json({ message: `Error happened on server: ${err}` });
    
                return;
            }

            let user = new User ({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.hash,
            });
        
            user.save()
            .then(user => res.json({message: 'User Added successfully!'}))
            .catch(err =>
              res.status(400).json({
                message: `Error happened on server: "${err}" "${req.body}"`
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