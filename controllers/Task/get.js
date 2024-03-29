const taskModel = require("../../models/Task");

const get = async (req, res) => {
    console.log("get");
    const { category } = req.query;

    try {
        let query = category ? { categories: { "$in": [category] } } : {};
        let resp = await taskModel.find(query).exec();
        res.status(200).json(resp);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Something went wrong while fetching the tasks!"
        })
    }
}

module.exports = get;