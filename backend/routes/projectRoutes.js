const express = require("express");

const Project = require("../models/Project");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", auth, async (req, res) => {

    try {

        if(req.user.role !== "admin"){
            return res.status(403).json({
                message: "Access Denied"
            });
        }

        const project = await Project.create({
            ...req.body,
            createdBy: req.user.id
        });

        res.json(project);

    } catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});

router.get("/", auth, async (req, res) => {

    const projects = await Project.find()
    .populate("teamMembers");

    res.json(projects);
});

module.exports = router;