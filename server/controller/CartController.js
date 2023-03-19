const Cart = require("../models/Cart")
const Joi = require("joi")


// Add to Cart 
const addCart = async (req, res, next) => {
    const CartSchema = Joi.object({
        title: Joi.string().required(),
        product_id: Joi.string().required(),
        user_id: Joi.string().required(),
        quantity: Joi.number().required(),
        price: Joi.number().required(),
        img: Joi.string().required()
    })
    const { error } = CartSchema.validate(req.body)
    if (error) {
        return next(error)
    }
    const { title, product_id, user_id, quantity, price, img } = req.body;
    try {
        const result = Cart.create({
            title: title,
            product_id: product_id,
            user_id: user_id,
            quantity: quantity,
            price: price,
            img: img
        })
        res.json({
            message: "Cart Added Sucessfully"
        })
    } catch (error) {
        return next(error)
    }
}

// Get Cart
const getCart = async (req, res, next) => {
    try {
        const carts = await Cart.find({ user_id: req.params.id })
        return res.json(carts)
    } catch (error) {
        return next(error)
    }
}

const deleteCart = async (req, res, next) => {
    try {
        await Cart.deleteMany({ user_id: req.params.id })
        return res.json({
            message: "Carts Deleted Successfully"
        })
    } catch (error) {
        return next(error)
    }
}

exports.addCart = addCart
exports.getCart = getCart
exports.deleteCart = deleteCart