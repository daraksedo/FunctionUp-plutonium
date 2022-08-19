const mongoose = require('mongoose');
const authorId = mongoose.Schema.Types.ObjectId;
const publisherId = mongoose.Schema.Types.ObjectId;

const bookSchema = new mongoose.Schema({
    name: String,
    author_id: {
        type: authorId,
        ref: "newAuthor",
        required: true
    },
    price: Number,
    rating: Number,
    publisher_id: {
        type: publisherId,
        ref: "newPublisher",
        required: true
    },
    isHardCover: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('newBook', bookSchema);
