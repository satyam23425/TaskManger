require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("./models/User");


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));


const seedUsers = async () => {

    try {

        await User.deleteMany();
        const users = [
            {
                name: "Satyam Pandit",
                email: "satyampandit396@gmail.com",
                password: await bcrypt.hash("123456", 10),
                role: "admin",
            },

            {
                name: "Admin User",
                email: "admin@gmail.com",
                password: await bcrypt.hash("123456", 10),
                role: "admin",
            },

            {
                name: "Member User",
                email: "member@gmail.com",
                password: await bcrypt.hash("123456", 10),
                role: "member",
            },
        ];
        await User.insertMany(users);

        console.log("Users Inserted");

        process.exit();

    } catch (err) {

        console.log(err);

        process.exit(1);
    }
};

seedUsers();