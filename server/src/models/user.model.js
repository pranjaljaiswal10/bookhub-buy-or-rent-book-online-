import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase:true,
      unique:true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role:{
      type:String,
      enum:["Seller","buyer"],
      default:"buyer"
    },
    profilePictureUrl: {
      type: String,
      default:""
    },
  },
  { timestamps: true }
);

userSchema.methods.getJWT=function(){
  const user=this;
  const token= jwt.sign({id:user._id},process.env.JWTSECRETKEY,{expiresIn:"7d"})
  return token
}

userSchema.methods.validatePassword=async function(passwordByuser) {
  const user=this;
  const isValid=await bcrypt.compare(passwordByuser,user.password)
  return isValid
}

export const User=mongoose.model("User",userSchema)