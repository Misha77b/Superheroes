const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require("bcryptjs");

const userSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    login: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    // enabled: {
    //     type: Boolean,
    //     required: true,
    //     default: true
    // }
}, { strict: false })

const user = mongoose.model("user", userSchema);
module.exports = user;