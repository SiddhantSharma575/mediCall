const { addCart, getCart, deleteCart } = require("../controller/CartController");

const router = require("express").Router()

router.post("/addCart", addCart)
router.get("/myCart/:id", getCart)
router.delete("/myCart/:id", deleteCart)

module.exports = router;