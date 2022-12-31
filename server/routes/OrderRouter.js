const { postOrder, getAllOrder, getSingleOrder } = require("../controller/OrderController")

const router = require("express").Router()


router.post("/add", postOrder)
router.get("/all/:id", getAllOrder)
router.get("/:id", getSingleOrder)

// router.put("/update/:id",)

module.exports = router