const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();


// // Import routes
const userRoutes = require("./routes/userRoutes");
const videoRoutes = require("./routes/videoRoutes");
const commentRoutes = require("./routes/commentRoutes");
const fileUpload = require('express-fileupload');


const app = express();
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}))    ///// middleware for Express that allows you to handle file uploads easily.

///////////////////// connect to MongDB   ////////////////////

// mongoose.connect(process.env.MONGO_URI)
// .then((res) => {
//     // console.log(res);
//     console.log("Connected to MongoDB")})
// .catch((err) => console.log(err));

const connectDB = async ()=>{
    try {
        const res  = await mongoose.connect(process.env.MONGO_URI);
        // console.log(res);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}
connectDB();


// // Test API
app.get("/test", (req, res) => {
    res.status(200).json({
        message: "API is working"
    });
});



// // Use routes
app.use("/user", userRoutes);
// app.use("/video", videoRoutes);
// app.use("/comment", commentRoutes);


app.listen(3000, () => {
    console.log("Server started on port 3000");
});