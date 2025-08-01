import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    pageCount: {
      type: Number,
      required: true,
    },
    genres: {
      type: String,
      required: true,
    },
    stock: {
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
    sold: {
      type: Boolean,
    },
    isRented: {
      type: Boolean,
    },
  },
  
);


export const Book = mongoose.model("Book", bookSchema);
