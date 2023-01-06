const Router = require("express");

const {
    authUser,
    signUpUser,
    logInUser,
    // getUser,
} = require('../controllers/user');

const router = new Router();

router.get("/auth", authUser);
router.post("/signup", signUpUser);
router.post("/login", logInUser);
// router.post("/auth", authUser);

module.exports = router;