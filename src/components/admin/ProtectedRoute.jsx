import { Navigate } from "react-router-dom";

function ProtectedRoute({
    children,
    role,
}) {

    const token =
        localStorage.getItem("token");

    const storedUser =
        localStorage.getItem("user");


    if (!token || !storedUser) {

        return (
            <Navigate
                to="/"
                replace
            />
        );

    }

    let user;

    try {

        user =
            JSON.parse(storedUser);

    } catch (error) {

        console.error(
            "Invalid user data:",
            error
        );

        localStorage.removeItem(
            "token"
        );

        localStorage.removeItem(
            "user"
        );

        return (
            <Navigate
                to="/"
                replace
            />
        );

    }

    if (
        role &&
        user.role !== role
    ) {


        if (
            user.role === "student"
        ) {

            return (
                <Navigate
                    to="/dashboard"
                    replace
                />
            );

        }

        if (
            user.role === "faculty"
        ) {

            return (
                <Navigate
                    to="/faculty-dashboard"
                    replace
                />
            );

        } 

        if (
            user.role === "admin"
        ) {

            return (
                <Navigate
                    to="/admin-dashboard"
                    replace
                />
            );

        }


        return (
            <Navigate
                to="/"
                replace
            />
        );

    }

    return children;

}

export default ProtectedRoute;