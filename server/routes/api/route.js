const express = require("express")
const app = express.Router()
const AuthRouter = require("../AuthRouter")
const ProductRouter = require("../ProductRouter")
const CartRouter = require("../CartRouter")
const OrderRouter = require("../OrderRouter")

app.use("/api", AuthRouter)
app.use("/product", ProductRouter)
app.use("/cart", CartRouter)
app.use("/order", OrderRouter)

module.exports = app;