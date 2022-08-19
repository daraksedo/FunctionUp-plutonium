const express = require('express');
const router = express.Router();

const { createAuthor, getAuthorsData } = require("../controllers/authorController");
const createPublisher = require("../controllers/publisherController");
const { createBook, getBooksWithAuthorDetails, updateHardCover } = require("../controllers/bookController");

// inserting the data in their respective Model.
router.post("/createAuthor", createAuthor);
router.post("/createPublisher", createPublisher);
router.post("/createBook", createBook)

// geting the data according to ask of questions.
router.get("/getAuthorsData", getAuthorsData);
router.get("/getBooksWithAuthorDetails", getBooksWithAuthorDetails);

// updating some feilds of the data.
router.put("/updateHardCover", updateHardCover);

module.exports = router;