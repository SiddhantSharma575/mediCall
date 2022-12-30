const Joi = require("joi")
const user = require("../models/user")
const CustomErrorHandler = require("../services/CustomErrorHandler")
const bcrypt = require("bcrypt")
const JwtService = require("../services/JwtService")

const register = async (req, res, next) => {
    // validate the request
    const registerSchema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        repeat_password: Joi.ref("password")
    })
    const { error } = registerSchema.validate(req.body)
    if (error) {
        return next(error)
    }

    // check if user exists in database
    try {
        const exist = await user.exists({
            email: req.body.email
        })
        if (exist) {
            return next(CustomErrorHandler.alreadyExists('This Email is already Taken'))
        }
    } catch (error) {
        return next(error)
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const { name, email } = req.body;
    const newUser = new user({
        name,
        email,
        password: hashedPassword
    }
    )

    try {
        const result = await newUser.save()
    } catch (error) {
        return next(error)
    }


    res.json({
        message: "User Created Successfully"
    })
}

const login = async (req, res, next) => {
    // Request Validation
    const loginSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    })
    const { error } = loginSchema.validate(req.body)

    if (error) {
        return next(error)
    }

    try {
        const isExist = await user.findOne({ email: req.body.email })
        if (!isExist) {
            return next(CustomErrorHandler.wrongCredentials())
        }

        // compare the password
        const match = await bcrypt.compare(req.body.password, isExist.password)
        if (!match) {
            return next(CustomErrorHandler.wrongCredentials())
        }

        // const access_token = JwtService.sign({
        //     _id: isExist._id,
        //     role: isExist.role
        // })

        // res.cookie(String(isExist._id), access_token, {
        //     path: "/",
        //     expires: new Date(Date.now() + 1000 * 30), // 30 seconds
        //     httpOnly: true,
        //     sameSite: "lax",
        // });

        const { _id, name, email, role } = isExist
        res.json({
            _id,
            name,
            email,
            role
        })
    } catch (error) {
        return next(error)
    }

}

const getUser = async (req, res, next) => {
    let fetchuser;
    try {
        fetchuser = await user.findById(req.params.id, "-password")
        if (!fetchuser) {
            return next(CustomErrorHandler.unAuthorized())
        }
    } catch (error) {
        return next(error)
    }
    const { _id, name, email, role } = fetchuser;
    return res.json({ _id, name, email, role })
}


exports.register = register;
exports.login = login;
exports.getUser = getUser;