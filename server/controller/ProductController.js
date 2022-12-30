const Product = require("../models/Product")
const Joi = require("joi")

const createProduct = async (req, res, next) => {
    const productSchema = Joi.object({
        title: Joi.string().min(3).required(),
        desc: Joi.string().required(),
        img: Joi.string().required(),
        price: Joi.number().required()
    })
    const { error } = productSchema.validate(req.body)

    if (error) {
        return next(error)
    }

    const { title, desc, img, price } = req.body
    console.log(title, desc, img, price)
    try {
        const resp = await Product.create({
            title: title,
            desc: desc,
            img: img,
            price: price
        })
        return res.json({
            message: "Product Created Successfully"
        })
    } catch (error) {
        console.log(error)
        return next(error)
    }
}

const getProduct = async (req, res, next) => {
    try {
        const products = await Product.find()
        return res.json(products)
    } catch (error) {
        return next(error)
    }
}

const getSingleProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id)
        return res.json(product)
    } catch (error) {
        return next(error)
    }
}

exports.createProduct = createProduct
exports.getProduct = getProduct
exports.getSingleProduct = getSingleProduct