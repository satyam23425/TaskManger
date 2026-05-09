import { useState } from "react";
import API from "../api/api";

function Signup() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "member",
    });

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.post("/auth/signup", form);

            alert("Signup Successful");

        } catch (err) {

            console.log(err);

            alert("Signup Failed");
        }
    };

    return (

        <form onSubmit={handleSubmit}>

            <h1>Signup</h1>

            <input
                type="text"
                placeholder="Name"
                onChange={(e) =>
                    setForm({
                        ...form,
                        name: e.target.value,
                    })
                }
            />

            <br /><br />

            <input
                type="email"
                placeholder="Email"
                onChange={(e) =>
                    setForm({
                        ...form,
                        email: e.target.value,
                    })
                }
            />

            <br /><br />

            <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                    setForm({
                        ...form,
                        password: e.target.value,
                    })
                }
            />

            <br /><br />

            <select
                onChange={(e) =>
                    setForm({
                        ...form,
                        role: e.target.value,
                    })
                }
            >
                <option value="member">Member</option>
                <option value="admin">Admin</option>
            </select>

            <br /><br />

            <button type="submit">
                Signup
            </button>

        </form>
    );
}

export default Signup;