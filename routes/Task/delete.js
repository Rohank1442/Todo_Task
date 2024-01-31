// Imports 
const express = require("express");
const router = express.Router();

// Model Imports 
const taskModel = require("../../models/Task");

router.delete("/:id", async (req, res) => {
    console.log("delete");

    const { taskId } = req.params;
    try {
        await taskModel.deleteOne({ taskId: taskId }).exec();

        return res.status(200).json({
            message: "Task Succesfully Deleted!"
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong while deleting the task"
        })
    }
})

module.exports = router;