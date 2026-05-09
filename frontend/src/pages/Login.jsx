import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {

        e.preventDefault();

        // Temporary login
        localStorage.setItem("token", "testtoken");

        alert("Login Success");

        navigate("/dashboard");
    };

    return (

        <form onSubmit={handleSubmit}>

            <h1>Login</h1>

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

            <button type="submit">
                Login
            </button>

        </form>
    );
}

export default Login;