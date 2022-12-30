const Joi = require("joi")
const Order = require("../models/Order")


const postOrder = async (req, res, next) => {
    const OrderSchema = Joi.object({
        userId: Joi.string().required(),
        customer: Joi.string().required(),
        address: Joi.string().required(),
        total: Joi.number().required(),
        status: Joi.number().required()
    })

    const { error } = OrderSchema.validate(req.body)
    if (error) {
        return next(error)
    }

    const { userId, customer, address, total, status } = req.body;
    try {
        const result = await Order.create({
            userId: userId,
            customer: customer,
            address: address,
            total: total,
            status: status
        })
        return res.json("Order Placed Successfully")
    } catch (error) {
        return next(error)
    }
}

const getAllOrder = async (req, res, next) => {
    try {
        const allOrder = await Order.find({ userId: req.params.id })
        return res.json(allOrder)
    } catch (error) {
        return next(error)
    }
}

const getSingleOrder = async (req, res, next) => {
    try {
        const singleOrder = await Order.findById(req.params.id)
        return res.json(singleOrder)
    } catch (error) {
        return next(error)
    }
}


exports.postOrder = postOrder
exports.getAllOrder = getAllOrder
exports.getSingleOrder = getSingleOrder