const express = require("express");
const router = express.Router();
const taskRoutes = require("./Task/index");

router.use('/tasks', taskRoutes);

module.exports = router;    