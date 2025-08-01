import mongoose from "mongoose";


const paymentSchema=new mongoose.Schema({
    orderId:{
     type:String,
     required:true
    },
    paymentId:{
        type:String,
        required:true
    },status:{
        type:String,
        required:true
    },
    amount:{
     type:Number,
     required:true
    },
    currency:{
        type:String
    }
},{timestamps:true})

export const Payment=mongoose.model("Payment",paymentSchema)