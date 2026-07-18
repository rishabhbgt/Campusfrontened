import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

function Signup() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await api.post("/auth/signup", {
            fullName,
            email,
            password,
            role,
        });

        console.log(response.data);

        toast.success("Signup Successful");

        navigate("/");
        } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || "Signup Failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">
            Signup
            </h1>

            <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-2 mb-3"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                className="w-full border p-2 mb-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <select
                className="w-full border p-2 mb-3"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            >
                <option value="student">Student</option>
                <option value="admin">Admin</option>
            </select>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded"
            >
                Signup
            </button>
            </form>
        </div>
        </div>
    );
}

export default Signup;