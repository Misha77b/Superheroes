const Router = require("express");
const uploads = require("../models/imageStorage");

const {
    registerUser
} = require('../controllers/user');

const router = new Router();

router.post("/register", registerUser);

module.exports = router;