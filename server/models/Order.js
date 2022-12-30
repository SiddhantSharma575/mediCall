const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    customer: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true,
    },
    status: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("order", OrderSchema)