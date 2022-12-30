const { createProduct, getProduct, getSingleProduct } = require("../controller/ProductController")

const router = require("express").Router()


router.post("/create", createProduct)
router.get("/all", getProduct)
router.get("/:id", getSingleProduct)


module.exports = router