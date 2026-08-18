import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

function Signup() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        
        const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_\-\\[\]\/+=;']).{8,}$/;

        if (!passwordRegex.test(password)) {
            toast.error(
                "Password must contain 8+ characters, uppercase, lowercase, number and special character"
            );
            return;
        }

        try {
            const response = await api.post(
                "/auth/signup",
                {
                    fullName,
                    email,
                    phone,
                    password,
                }
            );

            console.log(response.data);

            toast.success("Signup successful! Please login.");

            navigate("/");
        } catch (error) {
            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Signup Failed"
            );
        }
    };

    return (
        <div
            className="
                min-h-screen
                flex
                items-center
                justify-center
                bg-gray-100
                px-4
            "
        >
            <div
                className="
                    w-full
                    max-w-md
                    rounded-xl
                    bg-white
                    p-8
                    shadow-md
                "
            >
                <h1
                    className="
                        mb-6
                        text-center
                        text-2xl
                        font-bold
                    "
                >
                    Signup
                </h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) =>
                            setFullName(e.target.value)
                        }
                        required
                        className="
                            mb-3
                            w-full
                            rounded-lg
                            border
                            p-2
                            outline-none
                            focus:ring-2
                            focus:ring-blue-500
                        "
                    />

                    <input
                        type="email"
                        placeholder="College Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        required
                        className="
                            mb-3
                            w-full
                            rounded-lg
                            border
                            p-2
                            outline-none
                            focus:ring-2
                            focus:ring-blue-500
                        "
                    />

                    <input
                        type="tel"
                        placeholder="Mobile Number"
                        value={phone}
                        onChange={(e) =>
                            setPhone(e.target.value)
                        }
                        required
                        maxLength={10}
                        pattern="[0-9]{10}"
                        className="
                            mb-3
                            w-full
                            rounded-lg
                            border
                            p-2
                            outline-none
                            focus:ring-2
                            focus:ring-blue-500
                        "
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        required
                        minLength={8}
                        className="
                            mb-5
                            w-full
                            rounded-lg
                            border
                            p-2
                            outline-none
                            focus:ring-2
                            focus:ring-blue-500
                        "
                    />

                    <button
                        type="submit"
                        className="
                            w-full
                            rounded-lg
                            bg-blue-600
                            p-2
                            font-semibold
                            text-white
                            transition
                            hover:bg-blue-700
                        "
                    >
                        Signup
                    </button>

                </form>

                <p
                    className="
                        mt-5
                        text-center
                        text-sm
                        text-slate-600
                    "
                >
                    Already have an account?

                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="
                            ml-1
                            font-semibold
                            text-blue-600
                            hover:underline
                        "
                    >
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Signup;