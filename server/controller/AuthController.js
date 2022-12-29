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

        const access_token = JwtService.sign({
            _id: isExist._id,
            role: isExist.role
        })

        res.cookie(String(isExist._id), access_token, {
            path: "/",
            expires: new Date(Date.now() + 1000 * 30), // 30 seconds
            httpOnly: true,
            sameSite: "lax",
        });


        res.json({
            access_token: access_token
        })
    } catch (error) {
        return next(error)
    }

}

const verifyToken = (req, res, next) => {
    const cookies = req.headers.cookie;
    const token = cookies.split("=")[1];
    console.log(token)
    const vertok = JwtService.verify(token, process.env.JWT_SECRET);
    if (!vertok) {
        return next(CustomErrorHandler.unAuthorized())
    }
    req.id = vertok._id;
    req.role = vertok.role;
    next()
}

const getUser = async (req, res, next) => {
    const userId = req.id;
    let fetchuser;
    let token = ""
    try {
        fetchuser = await user.findById(userId, "-password")
        if (!fetchuser) {
            return next(CustomErrorHandler.unAuthorized())
        }
    } catch (error) {
        return next(error)
    }
    const cookies = req.headers.cookie;
    token = cookies.split("=")[1];
    return res.json({ fetchuser, token })
}

const refreshToken = (req, res, next) => {
    const cookies = req.headers.cookie;
    const prevToken = cookies.split("=")[1];
    if (!prevToken) {
        return res.status(400).json({ message: "Couldn't find token" });
    }
    const fetchedUser = JwtService.verify(prevToken, process.env.JWT_SECRET);
    if (!fetchedUser) {
        return next(CustomErrorHandler.unAuthorized())
    }
    res.clearCookie(`${fetchedUser._id}`);
    req.cookies[`${fetchedUser._id}`] = "";
    const token = JwtService.sign({
        _id: fetchedUser._id,
        role: fetchedUser.role
    })
    console.log(token)
    res.cookie(String(fetchedUser._id), token, {
        path: "/",
        expires: new Date(Date.now() + 1000 * 30), // 30 seconds
        httpOnly: true,
        sameSite: "lax",
    });

    req.id = fetchedUser._id;
    req.role = fetchedUser.role;
    req.token = token;
    next()
}


exports.register = register;
exports.login = login;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
exports.refreshToken = refreshToken;