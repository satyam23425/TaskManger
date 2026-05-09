const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

    title: String,

    description: String,

    status: {
        type: String,
        enum: ["pending", "in-progress", "completed"],
        default: "pending"
    },

    dueDate: Date,

    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    },

    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model("Task", taskSchema);