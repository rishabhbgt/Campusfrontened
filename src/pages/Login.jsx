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

            console.log(
                "Sending Request..."
            );


            const response =
                await api.post(
                    "/auth/login",
                    {
                        email,
                        password,
                    }
                );


            console.log(
                "Success:",
                response.data
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

            if (
                user.role === "admin"
            ) {

                navigate(
                    "/admin-dashboard"
                );

            } else if (
                user.role === "faculty"
            ) {

                navigate(
                    "/faculty-dashboard"
                );

            } else {

                navigate(
                    "/dashboard"
                );

            }


        } catch (error) {

            console.log(
                "Status:",
                error.response?.status
            );


            console.log(
                "Data:",
                error.response?.data
            );


            const message =
                error.response
                    ?.data
                    ?.message ||
                "Login Failed";


            toast.error(
                message
            );

        }

    };


    return (

        <div
            className="
                min-h-screen
                bg-gray-100
                flex
                items-center
                justify-center
            "
        >

            <div
                className="
                    w-full
                    max-w-md
                    bg-white
                    shadow-lg
                    rounded-xl
                    p-8
                "
            >

                <h1
                    className="
                        text-3xl
                        font-bold
                        text-center
                        text-blue-600
                        mb-6
                    "
                >
                    CampusOne
                </h1>


                <h2
                    className="
                        text-xl
                        font-semibold
                        text-center
                        mb-6
                    "
                >
                    Login
                </h2>


                <form
                    onSubmit={handleLogin}
                >

                    {/* EMAIL */}

                    <div className="mb-4">

                        <label
                            className="
                                block
                                mb-2
                                font-medium
                            "
                        >
                            Email
                        </label>


                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) =>
                                setEmail(
                                    e.target.value
                                )
                            }
                            className="
                                w-full
                                border
                                rounded-lg
                                px-4
                                py-2
                                outline-none
                                focus:ring-2
                                focus:ring-blue-500
                            "
                        />

                    </div>


                    {/* PASSWORD */}

                    <div className="mb-6">

                        <label
                            className="
                                block
                                mb-2
                                font-medium
                            "
                        >
                            Password
                        </label>


                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) =>
                                setPassword(
                                    e.target.value
                                )
                            }
                            className="
                                w-full
                                border
                                rounded-lg
                                px-4
                                py-2
                                outline-none
                                focus:ring-2
                                focus:ring-blue-500
                            "
                        />

                    </div>


                    {/* LOGIN BUTTON */}

                    <button
                        type="submit"
                        className="
                            w-full
                            bg-blue-600
                            text-white
                            py-2
                            rounded-lg
                            hover:bg-blue-700
                            transition
                        "
                    >
                        Login
                    </button>

                </form>


                {/* SIGNUP */}

                <p
                    className="
                        text-center
                        mt-5
                    "
                >

                    Don't have an account?

                    <span
                        onClick={() =>
                            navigate(
                                "/signup"
                            )
                        }
                        className="
                            text-blue-600
                            cursor-pointer
                            ml-1
                            hover:underline
                        "
                    >
                        Sign Up
                    </span>

                </p>

            </div>

        </div>

    );

}

export default Login;