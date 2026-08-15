import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

function VerifyPhone() {

    const navigate = useNavigate();

    const [searchParams] =
        useSearchParams();

    const phone =
        searchParams.get("phone") || "";

    const [code, setCode] =
        useState("");


    const handleVerify = async (e) => {

        e.preventDefault();


        if (!/^\d{6}$/.test(code)) {

            toast.error(
                "Enter a valid 6-digit OTP"
            );

            return;

        }


        try {

            await api.post(
                "/auth/verify-phone",
                {
                    phone,
                    code,
                }
            );


            toast.success(
                "Mobile number verified successfully"
            );


            navigate("/");


        } catch (error) {

            toast.error(
                error.response
                    ?.data
                    ?.message ||
                "OTP verification failed"
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
                        mb-2
                        text-center
                        text-2xl
                        font-bold
                    "
                >
                    Verify Mobile Number
                </h1>


                <p
                    className="
                        mb-6
                        text-center
                        text-sm
                        text-slate-500
                    "
                >
                    Enter the 6-digit OTP sent to
                    <br />

                    <span className="font-semibold">
                        +91 {phone}
                    </span>
                </p>


                <form
                    onSubmit={handleVerify}
                >

                    <input
                        type="text"
                        inputMode="numeric"
                        maxLength={6}
                        placeholder="Enter OTP"
                        value={code}
                        onChange={(e) =>
                            setCode(
                                e.target.value
                                    .replace(/\D/g, "")
                            )
                        }
                        className="
                            mb-4
                            w-full
                            rounded-lg
                            border
                            p-3
                            text-center
                            text-xl
                            tracking-[0.5em]
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
                            transition
                            hover:bg-blue-700
                        "
                    >
                        Verify OTP
                    </button>

                </form>


                <button
                    type="button"
                    onClick={() =>
                        navigate("/signup")
                    }
                    className="
                        mt-4
                        w-full
                        text-sm
                        font-semibold
                        text-blue-600
                        hover:underline
                    "
                >
                    Back to Signup
                </button>

            </div>

        </div>

    );

}

export default VerifyPhone;