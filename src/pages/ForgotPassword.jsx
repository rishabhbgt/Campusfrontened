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
                flex
                min-h-screen
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
                        mb-2
                        text-center
                        text-2xl
                        font-bold
                    "
                >
                    Forgot Password
                </h1>

                <p
                    className="
                        mb-6
                        text-center
                        text-sm
                        text-slate-500
                    "
                >
                    Enter your registered email to reset your password
                </p>

                <form onSubmit={handleEmailSubmit}>
                    <input
                        type="email"
                        placeholder="Registered Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        required
                        className="
                            mb-4
                            w-full
                            rounded-lg
                            border
                            p-3
                            outline-none
                            focus:ring-2
                            focus:ring-blue-500
                        "
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="
                            w-full
                            rounded-lg
                            bg-blue-600
                            p-3
                            font-semibold
                            text-white
                            hover:bg-blue-700
                            disabled:opacity-60
                        "
                    >
                        {loading
                            ? "Sending..."
                            : "Send Reset Link"}
                    </button>
                </form>

                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="
                        mt-4
                        w-full
                        text-sm
                        font-semibold
                        text-blue-600
                        hover:underline
                    "
                >
                    Back to Login
                </button>
            </div>
        </div>
    );
}

export default ForgotPassword;