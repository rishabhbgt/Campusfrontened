import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

function ResetPassword() {
    const navigate = useNavigate();
    const { token } = useParams();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_\-\\[\]\/+=;']).{8,}$/;

        if (!passwordRegex.test(password)) {
            toast.error(
                "Password must contain 8+ characters, uppercase, lowercase, number and special character"
            );
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            const response = await api.post(
                `/auth/reset-password/${token}`,
                {
                    password,
                }
            );

            toast.success(
                response.data?.message ||
                "Password reset successful"
            );

            navigate("/");
        } catch (error) {
            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Password reset failed"
            );
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
                        mb-6
                        text-center
                        text-2xl
                        font-bold
                    "
                >
                    Reset Password
                </h1>

                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        placeholder="New Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        required
                        minLength={8}
                        className="
                            mb-3
                            w-full
                            rounded-lg
                            border
                            p-3
                            outline-none
                            focus:ring-2
                            focus:ring-blue-500
                        "
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) =>
                            setConfirmPassword(e.target.value)
                        }
                        required
                        minLength={8}
                        className="
                            mb-5
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
                        className="
                            w-full
                            rounded-lg
                            bg-blue-600
                            p-3
                            font-semibold
                            text-white
                            hover:bg-blue-700
                        "
                    >
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;