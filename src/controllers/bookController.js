const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const mongoose = require('mongoose');
const publisherModel = require("../models/publisherModel");


const isValidObjectId = function (objectId) {
    return mongoose.Types.ObjectId.isValid(objectId);
};

const createBook = async function (req, res) {
    let book = req.body;
    let { author_id, publisher_id } = book;
    if (!author_id || !publisher_id) {
        return res.send("ID is required")
    }
    if (!isValidObjectId(author_id)) {
        return res.send({ status: false, message: "Author is not present" });
    }
    if (!isValidObjectId(publisher_id)) {
        return res.send({ status: false, message: "Publisher is not present" });
    }

    let bookCreated = await bookModel.create(book)
    return res.send({ data: bookCreated })
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author_id', 'publisher_id'])
    res.send({ data: specificBook })
}

const updateHardCover = async function (req, res) {
    let pub_id = await publisherModel.find({$or: [{name : "Penguin"}, {name : "HarperCollins"}]}).select({_id:1});
    console.log(pub_id)
    let updatebooks = await bookModel.updateMany(
        {$or: [{publisher_id: pub_id[0]._id }, {publisher_id: pub_id[1]._id}]},
        { $set: { isHardCover: false } }
    )
    let auth_id = await authorModel.find({rating:{$gt: 3.5}}).select({_id:1});
    console.log(auth_id);
    let updatePrice = await bookModel.updateMany(
        {$or: [{author_id: auth_id[0]._id }, {author_id: auth_id[1]._id}]},
        {$inc: {price: 10}}
    )
    return res.send({updatebooks,updatePrice})
}

module.exports = { createBook, getBooksWithAuthorDetails, updateHardCover };
