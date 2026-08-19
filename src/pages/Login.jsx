import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error(
                "Please enter email and password"
            );
            return;
        }

        try {
            const response = await api.post(
                "/auth/login",
                {
                    email,
                    password,
                }
            );

            const {
                token,
                user,
            } = response.data;

            localStorage.setItem(
                "token",
                token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(user)
            );

            toast.success(
                "Login Successful"
            );

            if (user.role === "admin") {
                navigate("/admin-dashboard");
            } else if (user.role === "faculty") {
                navigate("/faculty-dashboard");
            } else {
                navigate("/dashboard");
            }
        } catch (error) {
            const message =
                error.response
                    ?.data
                    ?.message ||
                "Login Failed";

            toast.error(message);
        }
    };

    return (
        <div
            className="
                min-h-screen
                flex
                items-center
                justify-center
                bg-gradient-to-br
                from-slate-100
                via-blue-50
                to-indigo-100
                px-4
                py-8
            "
        >
            <div
                className="
                    w-full
                    max-w-lg
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/70
                    bg-white/90
                    shadow-2xl
                    backdrop-blur-xl
                "
            >
                {/* Header */}
                <div
                    className="
                        bg-gradient-to-r
                        from-indigo-600
                        via-purple-600
                        to-blue-600
                        px-6
                        py-8
                        text-center
                        text-white
                        sm:px-8
                    "
                >
                    <h1
                        className="
                            text-3xl
                            font-bold
                            tracking-tight
                        "
                    >
                        CampusOne
                    </h1>

                    <p
                        className="
                            mt-2
                            text-sm
                            text-white/80
                        "
                    >
                        Welcome back to your campus portal
                    </p>
                </div>

                {/* Form */}
                <div className="p-6 sm:p-8">
                    <div className="mb-6">
                        <h2
                            className="
                                text-2xl
                                font-bold
                                text-slate-800
                            "
                        >
                            Welcome Back
                        </h2>

                        <p
                            className="
                                mt-1
                                text-sm
                                text-slate-500
                            "
                        >
                            Sign in to continue to CampusOne
                        </p>
                    </div>

                    <form
                        onSubmit={handleLogin}
                        className="space-y-5"
                    >
                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                "
                            >
                                Email Address
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your college email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(
                                        e.target.value
                                    )
                                }
                                autoComplete="email"
                                required
                                className="
                                    w-full
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    px-4
                                    py-3
                                    text-slate-800
                                    outline-none
                                    transition
                                    placeholder:text-slate-400
                                    focus:border-indigo-500
                                    focus:bg-white
                                    focus:ring-4
                                    focus:ring-indigo-100
                                "
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <div
                                className="
                                    mb-2
                                    flex
                                    items-center
                                    justify-between
                                    gap-3
                                "
                            >
                                <label
                                    htmlFor="password"
                                    className="
                                        text-sm
                                        font-semibold
                                        text-slate-700
                                    "
                                >
                                    Password
                                </label>

                                <button
                                    type="button"
                                    onClick={() =>
                                        navigate(
                                            "/forgot-password"
                                        )
                                    }
                                    className="
                                        text-sm
                                        font-semibold
                                        text-indigo-600
                                        transition
                                        hover:text-indigo-800
                                        hover:underline
                                    "
                                >
                                    Forgot Password?
                                </button>
                            </div>

                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(
                                        e.target.value
                                    )
                                }
                                autoComplete="current-password"
                                required
                                className="
                                    w-full
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    px-4
                                    py-3
                                    text-slate-800
                                    outline-none
                                    transition
                                    placeholder:text-slate-400
                                    focus:border-indigo-500
                                    focus:bg-white
                                    focus:ring-4
                                    focus:ring-indigo-100
                                "
                            />
                        </div>

                        {/* Login */}
                        <button
                            type="submit"
                            className="
                                w-full
                                rounded-2xl
                                bg-gradient-to-r
                                from-indigo-600
                                via-purple-600
                                to-blue-600
                                px-4
                                py-3.5
                                font-semibold
                                text-white
                                shadow-lg
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:shadow-xl
                                active:scale-[0.99]
                            "
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Signup */}
                    <div
                        className="
                            mt-6
                            border-t
                            border-slate-100
                            pt-5
                            text-center
                        "
                    >
                        <p className="text-sm text-slate-500">
                            Don't have an account?

                            <button
                                type="button"
                                onClick={() =>
                                    navigate("/signup")
                                }
                                className="
                                    ml-1
                                    font-semibold
                                    text-indigo-600
                                    transition
                                    hover:text-indigo-800
                                    hover:underline
                                "
                            >
                                Create Account
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;