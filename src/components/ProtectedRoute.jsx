import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        return <Navigate to="/" />;
    }

    if (role && user.role !== role) {

        if (user.role === "admin") {
            return <Navigate to="/admin-dashboard" />;
        }

        return <Navigate to="/" />;
    }

    return children;
}

export default ProtectedRoute;