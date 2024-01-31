// Imports 
const express = require("express");
const router = express.Router();

// Routes Imports 
const create = require("./create");
const get = require("./get");
const edit = require("./edit");
const del = require("./delete");
const mark = require("./mark");

router.use("/create", create);
router.use("/get", get);
router.use("/edit", edit);
router.use("/delete", del);
router.use("/completed/", mark); 

module.exports = router;