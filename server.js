// Imports 
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const routes = require("./routes/index");

// Configurations 
const PORT = process.env.PORT || 5000;

// Middlewares 
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: true}));

// Routes 
app.use(routes);

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.wto2koe.mongodb.net/todo_task`)
.then(() => {
    console.log("Database Connected Successfully!");

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`)
    })
})
.catch((err) => {
    console.log(err);
})