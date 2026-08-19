import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

function ForgotPassword() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleEmailSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await api.post(
                "/auth/forgot-password",
                {
                    email,
                }
            );

            toast.success(
                response.data?.message ||
                "Reset link sent to your email"
            );
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Unable to process request"
            );
        } finally {
            setLoading(false);
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
                        Secure account recovery
                    </p>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                    <div className="mb-6">
                        <h2
                            className="
                                text-2xl
                                font-bold
                                text-slate-800
                            "
                        >
                            Forgot Password?
                        </h2>

                        <p
                            className="
                                mt-2
                                text-sm
                                leading-6
                                text-slate-500
                            "
                        >
                            Enter your registered email and
                            we'll send you a secure password
                            reset link.
                        </p>
                    </div>

                    <form
                        onSubmit={handleEmailSubmit}
                        className="space-y-5"
                    >
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
                                Registered Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your registered email"
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

                        <button
                            type="submit"
                            disabled={loading}
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
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                                disabled:hover:translate-y-0
                            "
                        >
                            {loading
                                ? "Sending Reset Link..."
                                : "Send Reset Link"}
                        </button>
                    </form>

                    <div
                        className="
                            mt-6
                            border-t
                            border-slate-100
                            pt-5
                            text-center
                        "
                    >
                        <button
                            type="button"
                            onClick={() =>
                                navigate("/")
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
                            ← Back to Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;