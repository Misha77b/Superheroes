const Router = require("express");

const {
    signUpUser,
    logInUser,
    getUsers,
    authUser,
} = require('../controllers/user');

const router = new Router();

router.post("/signup", signUpUser);
router.post("/login", logInUser);
router.get("/auth", getUsers);
router.get("/auth", authUser);

module.exports = router;