const taskModel = require("../../models/Task");

const del = async (req, res) => {
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
};

module.exports = del;