const { addCart, getCart } = require("../controller/CartController");

const router = require("express").Router()

router.post("/addCart", addCart)
router.get("/myCart/:id", getCart)



module.exports = router;