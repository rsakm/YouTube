const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// connect to MongDB

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));


// // Test API
app.get("/test", (req, res) => {
    res.status(200).json({
        message: "API is working"
    });
});


app.listen(3000, () => {
    console.log("Server started on port 3000");
});