const taskModel = require("../../models/Task");

const edit = async (req, res) => {
    console.log("edit");
    const { taskId } = req.params;
    const { title, description } = req.body;

    try {
        const updatedTask = await taskModel.findByIdAndUpdate(taskId, {
            $set: {
                title: title,
                description: description
            }
        });

        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }

        return res.json(updatedTask);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error editing task' });
    }
}

module.exports = edit;