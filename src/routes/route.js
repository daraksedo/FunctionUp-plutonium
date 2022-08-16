const express = require('express');
const router = express.Router();
const {createBooks, getBooksList, getBooksInYear, getParticularBooks, getXINRBooks, getRandomBooks} = require("../controllers/bookController");

router.post("/createBooks", createBooks);

router.get("/getBooksList", getBooksList);
router.get("/getBooksInYear", getBooksInYear);
router.get("/getParticularBooks/:index", getParticularBooks);
router.get("/getXINRBooks", getXINRBooks);
router.get("/getRandomBooks", getRandomBooks);

module.exports = router;