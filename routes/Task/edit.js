// Imports 
const express = require("express");
const router = express.Router();

// Controller Imports 
const edit = require("../../controllers/Task/edit");

router.put('/:id', edit);

module.exports = router;