import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

function ResetPassword() {
    const navigate = useNavigate();
    const { token } = useParams();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("UPDATE BUTTON CLICKED");
        console.log("Token:", token);
        console.log("Password entered:", password);
        console.log("Confirm password:", confirmPassword);

        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

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

        if (!token) {
            toast.error("Invalid or missing reset token");
            return;
        }

        try {
            setLoading(true);

            console.log("Calling reset API...");

            const response = await api.post(
                `/auth/reset-password/${token}`,
                {
                    password,
                }
            );

            console.log("Reset API response:", response.data);

            toast.success(
                response.data?.message || "Password reset successful"
            );

            setTimeout(() => {
                navigate("/");
            }, 1200);
        } catch (error) {
            console.error("Reset Password Error:", error);

            toast.error(
                error.response?.data?.message ||
                    "Password reset failed"
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
                        Securely update your account password
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
                            Reset Password
                        </h2>

                        <p
                            className="
                                mt-2
                                text-sm
                                leading-6
                                text-slate-500
                            "
                        >
                            Create a new strong password for your
                            CampusOne account.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >
                        {/* New Password */}
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
                                New Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your new password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                autoComplete="new-password"
                                required
                                minLength={8}
                                disabled={loading}
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
                                    disabled:cursor-not-allowed
                                    disabled:opacity-60
                                "
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                "
                            >
                                Confirm Password
                            </label>

                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Re-enter your new password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(
                                        e.target.value
                                    )
                                }
                                autoComplete="new-password"
                                required
                                minLength={8}
                                disabled={loading}
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
                                    disabled:cursor-not-allowed
                                    disabled:opacity-60
                                "
                            />
                        </div>

                        <p
                            className="
                                text-xs
                                leading-5
                                text-slate-500
                            "
                        >
                            Password must contain 8+ characters,
                            uppercase, lowercase, number and
                            special character.
                        </p>

                        {/* Submit */}
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
                                ? "Updating Password..."
                                : "Update Password"}
                        </button>
                    </form>

                    {/* Back */}
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
                            onClick={() => navigate("/")}
                            disabled={loading}
                            className="
                                text-sm
                                font-semibold
                                text-indigo-600
                                transition
                                hover:text-indigo-800
                                hover:underline
                                disabled:cursor-not-allowed
                                disabled:opacity-50
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

export default ResetPassword;

