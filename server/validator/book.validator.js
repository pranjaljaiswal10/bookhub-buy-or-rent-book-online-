import { body } from "express-validator"

export const addbookValidator=()=>{
   return[
    body("title").trim(),
    body("description"),
    body("coverImage"),
    body("author"),
    body("pageCount"),
    body("genre"),
    body("stock")
   ] 
}

export const getAllBookValidator=()=>{
    return[

    ]
}

export const updateBookValidator=()=>{

}