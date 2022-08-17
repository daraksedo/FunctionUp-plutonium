const express = require('express');
const router = express.Router();
const {createAuthors, createBooks, getBooksList, getNewBookPrice, getAuthorsName} = require("../controllers/Controller");

router.post("/createAuthors", createAuthors);
router.post("/createBooks", createBooks);

router.get("/getBooksList", getBooksList);
router.get("/getNewBookPrice", getNewBookPrice);
router.get("/getAuthorsName", getAuthorsName);

module.exports = router;