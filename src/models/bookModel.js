const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName : {
        type : String,
        required : true
    },
    authorName : String,
    tags : [String],
    price : {
        rupees : Number,
        euros : Number
    },
    category: String,
    year: {
        type : Number,
        default : 2021
    },
    totalPages : Number,
    stocksAvailable : Boolean
},{ timestamps: true });

module.exports = mongoose.model('Book Details', bookSchema);