const crypto = require("crypto");
const taskModel = require("../../models/Task");

const create = async (req, res) => {
    console.log("create");

    const { title, description, dueDate, categories } = req.body;

    if (!title) {
        return res.status(412).json({
            message: "Please Enter a Valid Title"
        });
    }

    try {
        const Task = new taskModel({
            taskId: crypto.randomBytes(16).toString("hex"),
            title: title,
            description: description ? description : "",
            dueDate: dueDate ? dueDate : null,
            categories: categories ? categories : []
        });

        const createdTask = await Task.save();
        return res.status(201).json(createdTask);
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Something went wrong while creating the resoure!"
        })
    }
}


module.exports = create;