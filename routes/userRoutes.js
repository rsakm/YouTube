const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
require("dotenv").config();
const User = require("../models/userModel");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;

 // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME, 
        api_key: process.env.API_KEY, 
        api_secret: process.env.API_SECRET, 
    });

router.post("/signup", async(req, res) => {

    try{


        // // Check if user already exists
        const userExists = await User.findOne({email: req.body.email});
        if(userExists){
            return res.status(409).json({error: "User already exists"});
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        // console.log(hashedPassword);

        const logo = await cloudinary.uploader.upload(req.files.logo.tempFilePath);
        // console.log(logo);

        const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            channelName: req.body.channelName,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPassword,
            logoUrl: logo.secure_url,
            logoId: logo.public_id
        });
        const user = await newUser.save();
        res.status(200).json({
            newUser:user
        });


    }catch(err){
        console.log(err);
        res.status(500).json({error: err.message});
    }
});

module.exports = router;