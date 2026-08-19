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

        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_\-\\[\]/+=;']).{8,}$/;

        if (!passwordRegex.test(password)) {
            toast.error(
                "Password must contain 8+ characters, uppercase, lowercase, number and special character"
            );
            return;
        }

        try {
            await api.post(
                "/auth/signup",
                {
                    fullName,
                    email,
                    phone,
                    password,
                }
            );

            toast.success(
                "Signup successful! Please login."
            );

            navigate("/");
        } catch (error) {
            console.error(
                "Signup Error:",
                error
            );

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
                        Create your campus account
                    </p>
                </div>

                {/* Form */}
                <div className="p-6 sm:p-8">
                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        {/* Full Name */}
                        <div>
                            <label
                                htmlFor="fullName"
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                "
                            >
                                Full Name
                            </label>

                            <input
                                id="fullName"
                                type="text"
                                placeholder="Enter your full name"
                                value={fullName}
                                onChange={(e) =>
                                    setFullName(
                                        e.target.value
                                    )
                                }
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
                                College Email
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

                        {/* Phone */}
                        <div>
                            <label
                                htmlFor="phone"
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                "
                            >
                                Mobile Number
                            </label>

                            <input
                                id="phone"
                                type="tel"
                                inputMode="numeric"
                                placeholder="Enter 10-digit mobile number"
                                value={phone}
                                onChange={(e) =>
                                    setPhone(
                                        e.target.value
                                            .replace(
                                                /\D/g,
                                                ""
                                            )
                                    )
                                }
                                required
                                maxLength={10}
                                pattern="[0-9]{10}"
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
                            <label
                                htmlFor="password"
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                "
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                placeholder="Create a strong password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(
                                        e.target.value
                                    )
                                }
                                required
                                minLength={8}
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

                            <p
                                className="
                                    mt-2
                                    text-xs
                                    leading-5
                                    text-slate-500
                                "
                            >
                                Use 8+ characters with uppercase,
                                lowercase, number and special
                                character.
                            </p>
                        </div>

                        {/* Signup */}
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
                            Create Account
                        </button>
                    </form>

                    {/* Login */}
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
                            Already have an account?

                            <button
                                type="button"
                                onClick={() =>
                                    navigate("/")
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
                                Login
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;