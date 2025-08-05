import { Router } from "express";
import { addnewBooks, deleteBook, getAllBooks, getBookById } from "../controllers/book.controller.js";
import { authVerify } from "../middleware/auth.middleware.js";


const bookRouter = Router()

bookRouter.post("/",authVerify, addnewBooks)
bookRouter.get("/", getAllBooks)
bookRouter.get("/:id", getBookById)
bookRouter.delete("/:id",authVerify, deleteBook)

export default bookRouter;