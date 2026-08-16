import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

function ResetPasswordPhone() {

    const navigate = useNavigate();
    const { phone } = useParams();

    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);


    const verifyOtp = async () => {

        if (!/^[0-9]{6}$/.test(code)) {

            toast.error(
                "Enter a valid 6-digit OTP"
            );

            return;

        }

        setLoading(true);

        try {

            const response =
                await api.post(
                    "/auth/verify-password-reset-otp",
                    {
                        phone,
                        code,
                    }
                );

            toast.success(
                response.data?.message ||
                "OTP verified successfully"
            );

            setOtpVerified(true);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Invalid OTP"
            );

        } finally {

            setLoading(false);

        }

    };


    const resetPassword = async (e) => {

        e.preventDefault();

        if (!otpVerified) {
            toast.error(
                "Please verify OTP first"
            );
            return;
        }

        if (password.length < 6) {

            toast.error(
                "Password must be at least 6 characters"
            );

            return;

        }

        if (password !== confirmPassword) {

            toast.error(
                "Passwords do not match"
            );

            return;

        }

        setLoading(true);

        try {

            const response =
                await api.put(
                    "/auth/reset-password-phone",
                    {
                        phone,
                        code,
                        password,
                    }
                );

            toast.success(
                response.data?.message ||
                "Password reset successful"
            );

            navigate("/");

        } catch (error) {

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
                    Reset Password
                </h1>

                <p
                    className="
                        mb-6
                        text-center
                        text-sm
                        text-slate-500
                    "
                >
                    OTP for {phone}
                </p>


                {!otpVerified ? (

                    <div>

                        <input
                            type="text"
                            inputMode="numeric"
                            maxLength={6}
                            placeholder="Enter OTP"
                            value={code}
                            onChange={(e) =>
                                setCode(
                                    e.target.value.replace(
                                        /\D/g,
                                        ""
                                    )
                                )
                            }
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
                            type="button"
                            onClick={verifyOtp}
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
                                ? "Verifying..."
                                : "Verify OTP"}
                        </button>

                    </div>

                ) : (

                    <form
                        onSubmit={resetPassword}
                    >

                        <input
                            type="password"
                            placeholder="New Password"
                            value={password}
                            onChange={(e) =>
                                setPassword(
                                    e.target.value
                                )
                            }
                            required
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
                                setConfirmPassword(
                                    e.target.value
                                )
                            }
                            required
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
                                ? "Resetting..."
                                : "Reset Password"}
                        </button>

                    </form>

                )}

            </div>

        </div>

    );
}

export default ResetPasswordPhone;