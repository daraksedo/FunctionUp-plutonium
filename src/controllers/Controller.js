const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")

const createAuthors = async function (req, res) {
    let data = req.body;
    let savedData = await authorModel.create(data);
    res.send({ msg: savedData });
}

const createBooks = async function (req, res) {
    let data = req.body;
    let savedData = await bookModel.create(data);
    res.send({ msg: savedData });
}

const getBooksList = async function (req, res) {
    let authordetails = await authorModel.find({ author_name: "Chetan Bhagat" });
    let authorId = authordetails[0].author_id;
    let allBooks = await bookModel.find({ author_id: authorId }).select({ bookName: 1, _id: 0 });

    res.send({ msg: allBooks });
}

const getNewBookPrice = async function (req, res) {
    const bookDetails = await bookModel.find({ name: "Two states" })
    const authorId = bookDetails[0].author_id;
    const authorName = await authorModel.find({ author_id: authorId }).select({ author_name: 1, _id: 0 })

    const book_name = bookDetails[0].name
    const newPrice = await bookModel.findOneAndUpdate({ name: book_name }, { price: 100 }, { new: true }).select({ price: 1, _id: 0 })

    res.send({ msg: { authorName, newPrice } })
}

const getAuthorsName = async function (req, res) {
    const booksId = await bookModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1, _id: 0 })
    const id = booksId.map(inp => inp.author_id)
    console.log(id)
    let temp = []
    for (let i = 0; i < id.length; i++) {
        const author = await authorModel.find({ author_id: id[i] }).select({ author_name: 1, _id: 0 })
        temp.push(author)
    }
    const authorName = temp.flat()
    res.send({ authorName })
}

module.exports = { createAuthors, createBooks, getBooksList, getNewBookPrice, getAuthorsName };