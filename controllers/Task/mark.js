const taskModel = require("../../models/Task");

const mark = async (req, res) => {
    const { taskId } = req.params;

    try {
        const updatedTask = await taskModel.findOne({ taskId: taskId })

        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }

        if (updatedTask.isCompleted === true) {
            return res.json({ message: "It is already completed" });
        }

        const newData = await taskModel.findOneAndUpdate({ taskId: taskId }, { $set: { isCompleted: true } }, { new: true })

        return res.json(newData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error marking task' });
    }
}

module.exports = mark;