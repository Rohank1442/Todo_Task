// Imports 
const express = require("express");
const router = express.Router();

// Controller Imports 
const mark = require("../../controllers/Task/mark");

router.patch("/:taskId", mark)

module.exports = router;