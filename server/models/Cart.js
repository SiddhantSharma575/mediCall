const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    product_id: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("cart", CartSchema)