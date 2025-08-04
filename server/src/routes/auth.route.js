import {Router} from "express"
import { loginUser, logOutUser, registerUser } from "../controllers/auth.controller.js"

const authRouter=Router()

authRouter.post("/register",registerUser)
authRouter.post("/login",loginUser)
authRouter.post("/logout",logOutUser)


export default authRouter
