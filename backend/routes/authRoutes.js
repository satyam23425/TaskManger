const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();


router.post("/signup", async (req, res) => {

    const { name, email, password, role } = req.body;

    try {

        const existingUser = await User.findOne({ email });

        if(existingUser){
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role
        });

        res.json(user);

    } catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});


router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });

        if(!user){
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({
                message: "Invalid Credentials"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.json({
            token,
            user
        });

    } catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router;