// Imports 
const express = require("express");
const router = express.Router();

// Controller Imports 
const get = require("../../controllers/Task/get");

router.get("/", get);

module.exports = router;