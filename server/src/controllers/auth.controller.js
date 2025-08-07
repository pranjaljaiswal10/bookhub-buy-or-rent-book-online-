import bcrypt from "bcrypt"
import { User } from "../models/user.model.js"

const registerUser = async (req, res, next) => {
    try {
        const findUser = await User.findOne({ email })
        if (findUser) {
            res.status(403).json({ error: "User is already exist", success: false })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const user = {
            username, email, password: hashPassword,
            role
        }
        const newUser = new User(user)
        await newUser.save()
        res.status(201).json({ message: "User registerd sucessfully", success: true })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const loginUser = async (req, res, next) => {
    try {
        const { email, password, role } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            res.status(404).json({ error: "User not found", success: false })
        }
        const isValid = await user.validatePassword(password)
        if (!isValid) {
            res.status(401).json({ error: "Invalid credentials", success: false })
        }
        const token = user.getJWT()
        const option = {
            httpOnly: true,
            secure: true
        }
        res.cookie('token', token)
        res.status(200).json({ data: user, message: "User login successfully", success: true })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const logOutUser = async (req, res, next) => {
    try {
        res.clearCookie('token').status(200).json({ message: "User logout successfully" })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const verifyEmail = async (req, res, next) => {
    try {

    } catch (error) {
        console.log(error)
        next(error)
    }
}

export { registerUser, loginUser, logOutUser }