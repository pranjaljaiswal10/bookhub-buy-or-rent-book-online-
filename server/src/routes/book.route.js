import { Router } from "express";
import { addnewBooks, deleteBook, getAllBooks, getBookById } from "../controllers/book.controller";


const bookRouter = Router()

bookRouter.post("/", addnewBooks)
bookRouter.get("/", getAllBooks)
bookRouter.get("/:id", getBookById)
bookRouter.delete("/:id", deleteBook)

export default bookRouter;