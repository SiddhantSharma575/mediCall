// const { me } = require("../controller/AuthController");
const { login, getUser } = require("../controller/AuthController");
const { register } = require("../controller/AuthController");
const router = require("express").Router()



router.post("/register", register)
router.post("/login", login)
router.get("/me/:id", getUser)


module.exports = router;