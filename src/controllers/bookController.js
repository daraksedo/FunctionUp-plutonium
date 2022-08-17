const BookModel= require("../models/bookModel")

const createBooks = async function (req, res) {
    let data = req.body;
    let savedData = await BookModel.create(data);
    res.send({msg: savedData});
}

const getBooksList = async function (req, res) {
    let allBooks = await BookModel.find({}, {bookName : true, authorName : true, _id : 0})
    res.send({msg: allBooks});
}

const getBooksInYear = async function (req, res) {
    const yrs = req.query.year;
    let allBooks = await BookModel.find({year : yrs});
    res.send({msg: allBooks});
}

const getParticularBooks = async function (req, res) {
    const data = req.body;
    let allBooks = await BookModel.find(data);
    res.send({msg: allBooks});
}

const getXINRBooks = async function (req, res) {
    let allBooks = await BookModel.find( { "price.rupees" : {$in : ["100" , "200" , "500"]}} )
    res.send({msg: allBooks});
}

const getRandomBooks = async function (req, res) {
    let allBooks = await BookModel.find({$or: [{stocksAvailable : true}, {totalPages : {$gt : 500}}]});
    res.send({msg: allBooks});
}

module.exports = {createBooks, getBooksList, getBooksInYear, getParticularBooks, getXINRBooks, getRandomBooks};