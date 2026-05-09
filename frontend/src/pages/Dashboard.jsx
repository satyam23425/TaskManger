import { useEffect, useState } from "react";
import API from "../api/api";

function Dashboard() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {

        try {

            const res = await API.get("/tasks");

            setTasks(res.data);

        } catch (err) {

            console.log(err);
        }
    };

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task) => task.status === "completed"
    ).length;

    const pendingTasks = tasks.filter(
        (task) => task.status === "pending"
    ).length;

    const progressTasks = tasks.filter(
        (task) => task.status === "in-progress"
    ).length;


    return (

        <div style={{ padding: "20px" }}>

            <h1>Team Task Manager Dashboard</h1>

            <hr />

            <h2>Task Summary</h2>

            <p>Total Tasks: {totalTasks}</p>

            <p>Completed Tasks: {completedTasks}</p>

            <p>Pending Tasks: {pendingTasks}</p>

            <p>In Progress Tasks: {progressTasks}</p>

            <hr />

            <h2>All Tasks</h2>

            {
                tasks.map((task) => (

                    <div
                        key={task._id}
                        style={{
                            border: "1px solid gray",
                            padding: "10px",
                            marginBottom: "10px",
                            borderRadius: "10px",
                        }}
                    >

                        <h3>{task.title}</h3>

                        <p>Status: {task.status}</p>

                    </div>
                ))
            }

        </div>
    );
}

export default Dashboard;