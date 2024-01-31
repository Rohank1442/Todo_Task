// Imports 
const express = require("express");
const router = express.Router();

// Controller Imports 
const create = require("../../controllers/Task/create");

router.post("/", create)

module.exports = router;