const Book = require("../modals/bookModel")

const bookController = {}

bookController.create = async(req, res) => {
    const body = req.body
    try{
        const book = new Book(body)
        await book.save()

        res.status(200).json({data: "book added successfully"})
    }
    catch(err){
        res.status(500).json({err: "server error"})
    }
}



// show list of books
bookController.list = async(req, res) => {
    try{
        const books = await Book.find()

        res.status(200).json(books)
    }
    catch(err){
        res.status(500).json({err: "server error"})
    }
}
  
  

module.exports = bookController