const BookModel= require("../models/bookModel")

const createBooks = async function (req, res) {
    let data = req.body;
    let savedData = await BookModel.create(data);
    res.send({msg: savedData});
}

const getBooksList = async function (req, res) {
    let allBooks = await BookModel.find({}, {bookName : true, authorName : true});
    res.send({msg: allBooks});
}

const getBooksInYear = async function (req, res) {
    const yrs = req.query.year;
    let allBooks = await BookModel.find({year : yrs});
    res.send({msg: allBooks});
}

const getParticularBooks = async function (req, res) {
    const data = req.params.index;
    let allBooks = await BookModel.find( { status: "1930"} )
    res.send({msg: allBooks});
}

const getXINRBooks = async function (req, res) {
    let allBooks = await BookModel.find({}, {price : {rupees : { $eq : "500"}}});
    res.send({msg: allBooks});
}

const getRandomBooks = async function (req, res) {
    let allBooks = await BookModel.aggregate([{$sample:{size:1}}]);
    res.send({msg: allBooks});
}

module.exports = {createBooks, getBooksList, getBooksInYear, getParticularBooks, getXINRBooks, getRandomBooks};