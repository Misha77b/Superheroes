const User = require('../models/userSchema');
const fs = require('fs');

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const keys = require("../config/keys");
const getConfigs = require("../config/getConfigs");
const passport = require("passport");
const uniqueRandom = require("unique-random");
const rand = uniqueRandom(10000000, 99999999);


exports.register = (res, req, next) => {

};

exports.logIn = async (res, req, next) => {

};

exports.getUser = async (res, req, next) => {

};

exports.editUserInfo = async (res, req, next) => {

};

exports.updateUser = async (res, req, next) => {

};