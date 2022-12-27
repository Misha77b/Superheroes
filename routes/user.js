const Router = require("express");

const {
    registerUser,
    logInUser,
} = require('../controllers/user');

const router = new Router();

router.post("/register", registerUser);
router.post("/login", logInUser);
// router.post("/auth", registerUser);

module.exports = router;