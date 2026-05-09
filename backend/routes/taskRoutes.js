const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {

    try {

        const task = req.body;

        res.json({
            message: "Task Created",
            task,
        });

    } catch (err) {

        res.status(500).json({
            message: err.message,
        });
    }
});


router.get("/", async (req, res) => {

    const tasks = [

        {
            _id: 1,
            title: "Build Login Page",
            status: "pending",
        },

        {
            _id: 2,
            title: "Create Dashboard",
            status: "completed",
        },

        {
            _id: 3,
            title: "Deploy Project",
            status: "in-progress",
        },
    ];

    res.json(tasks);
});

router.put("/:id", async (req, res) => {

    res.json({
        message: "Task Updated",
        taskId: req.params.id,
    });
});


module.exports = router;