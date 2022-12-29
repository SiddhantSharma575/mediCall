// const { me } = require("../controller/AuthController");
const { login, verifyToken, getUser, refreshToken } = require("../controller/AuthController");
const { register } = require("../controller/AuthController");
const router = require("express").Router()



router.post("/register", register)
router.post("/login", login)
router.get("/me", verifyToken, getUser)
router.get("/refresh", refreshToken, verifyToken, getUser)


module.exports = router;