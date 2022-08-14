const express = require('express');
const router = express.Router();
const {InsertBooks, getBooksData} = require("../controllers/bookController");

router.post("/InsertBooks", InsertBooks);

router.get("/getBooksData", getBooksData);

module.exports = router;