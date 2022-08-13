const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    "bookName": {
        type: String,
        required: true
    },
    "authorName": {
        type: String,
        required: true
    },
   category: String,
    year: Number
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema)
 