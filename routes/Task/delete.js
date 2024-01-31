// Imports 
const express = require("express");
const router = express.Router();

// Controller Imports 
const del = require("../../controllers/Task/delete");

router.delete("/:taskId", del)

module.exports = router;