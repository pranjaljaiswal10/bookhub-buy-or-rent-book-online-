import {Router} from "express"
import { loginUser, logOutUser, registerUser } from "../controllers/auth.controller.js"
import { userLoginValidator, userRegisterValidator } from "../../validator/user.validator.js"
import { validator } from "../utils/validator.js"


const authRouter=Router()

authRouter.post("/register",userRegisterValidator(),validator,registerUser)
authRouter.post("/login",userLoginValidator(),validator,loginUser)
authRouter.post("/logout",logOutUser)


export default authRouter
