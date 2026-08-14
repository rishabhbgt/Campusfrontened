import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

function Signup() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    const handleSubmit = async (e) => {

        e.preventDefault();


        try {

            const response =
                await api.post(
                    "/auth/signup",
                    {
                        fullName,
                        email,
                        password,
                    }
                );


            console.log(
                response.data
            );


            toast.success(
                "Signup Successful"
            );


            navigate("/");


        } catch (error) {

            console.log(error);


            toast.error(
                error.response
                    ?.data
                    ?.message ||
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


                <form
                    onSubmit={handleSubmit}
                >

                    {/* Full Name */}

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) =>
                            setFullName(
                                e.target.value
                            )
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


                    {/* Email */}

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>
                            setEmail(
                                e.target.value
                            )
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


                    {/* Password */}

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(
                                e.target.value
                            )
                        }
                        required
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


                    {/* Signup */}

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


                {/* Login */}

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
                        onClick={() =>
                            navigate("/")
                        }
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