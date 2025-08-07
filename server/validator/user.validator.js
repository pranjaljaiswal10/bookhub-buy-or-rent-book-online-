import { body } from "express-validator"
import { AvailabeleUserRoles } from "../src/utils/constants"


export const userRegisterValidator = () => {
    return [
        body("email").trim().notEmpty().withMessage("Email is required").isEmail().withMessage("Email is invalid"),
        body("username").trim().notEmpty().withMessage("username is required").isLowercase().isLength({ min: 4 }).withMessage("username must be atleast 3 character"),
        body("password").isLength({ min: 8 }).withMessage("Password must be atleast 8 characters").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/).withMessage("Password atleast one alphanumeric character and eight digit"),
        body("role").isIn(AvailabeleUserRoles).withMessage("Invalid user roles")
    ]
}

export const userLoginValidator = () => {
    return [
        body("email").trim().notEmpty().withMessage("Email is required").isEmail().withMessage("email is Invalid"),
        body("role").trim().notEmpty().withMessage("Password is required").isIn(AvailabeleUserRoles).withMessage("Invalid user roles")
    ]
}