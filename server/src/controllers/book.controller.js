import { Book } from "../models/book.model"


const addnewBooks = async (req, res, next) => {
    try {
        const { title, description, author, pageCount, genre, rentPrice, buyPrice, stocks } = req.body
        const file = req.file.path
        if (!file) {
            res.status(400).json({ message: "file not provided", success: false })
        }
        if ([title, description, author, pageCount, genre, rentPrice, buyPrice, stocks].some((item) => item.trim() === "")) {
            res.status(403).json({ message: "All field is required", success: false })
        }
        const book = {
            title, description, author, pageCount: Number(pageCount), rentPrice: Number(rentPrice), buyPrice: Number(buyPrice), rentPrice: Number(rentPrice), stocks: Number(stocks)
        }
        const newBook = new Book(data)
        const savedBook = await newBook.save()
        res.status(201).json({ success })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find({})
        if (!books) {
            res.status(404).json({ message: "No book exist" })
        }
        res.status(200).json({ data: books })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const getBookById = async (req, res, next) => {
    try {
        const { id } = req.params
        const book = await Book.findById(id)
        if (!book) {
            return res.status(404).json({ message: "This book doesn't exist", success: false })
        }
        res.status(200).json({ data: book })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const deleteBook = async (req, res, next) => {
    try {
        const { id } = req.params
        const book = await Book.findByIdAndDelete(id)
        if (!book) {
            return res.status(404).json({ message: "Book doesn't exit from this id" })
        }
        res.status(200).json({ message: "Book deleted successfully" })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export { addnewBooks, getAllBooks, getBookById, deleteBook }