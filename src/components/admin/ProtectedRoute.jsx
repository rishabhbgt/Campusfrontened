import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {

    const user = JSON.parse(
        localStorage.getItem("user") || "null"
    );

    if (!user) {
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

        if (user.role === "admin") {
            return (
                <Navigate
                    to="/admin-dashboard"
                    replace
                />
            );
        }

        return (
            <Navigate
                to="/dashboard"
                replace
            />
        );
    }

    return children;
}

export default ProtectedRoute;