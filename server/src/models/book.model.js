import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  stocks: {
    type: Number,
  },
  rentPrice: {
    type: Number,
    required: true,
  },
  buyPrice: {
    type: Number,
    required: true,
  }, 
  sold:{
    type:String,
    default:false
  },
  sold:{
    type:Number,
    required:true
  }
  ,isRented:{
    type:Boolean
  }
  
});

export const Book = mongoose.model("Book", bookSchema);
