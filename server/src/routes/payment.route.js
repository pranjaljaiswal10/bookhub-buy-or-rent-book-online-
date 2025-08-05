import { Router } from "express";
import { paymentCheckout, paymentVerify, paymentWebhook } from "../controllers/payment.controller.js";
import { authVerify } from "../middleware/auth.middleware.js";


const paymentRouter = Router()

paymentRouter.post("/checkout", authVerify, paymentCheckout)
paymentRouter.post("/webhook", paymentWebhook)
paymentRouter.post("/verification", authVerify, paymentVerify)


export default paymentRouter