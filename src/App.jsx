import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import ProtectedRoute from "./components/admin/ProtectedRoute";
import AdminRoute from "./components/admin/AdminRoute";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CreateComplaint = lazy(() => import("./pages/CreateComplaint"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const AdminUsers = lazy(() => import("./pages/AdminUsers"));
const EditComplaint = lazy(() => import("./pages/EditComplaint"));
const ComplaintDetails = lazy(() => import("./pages/ComplaintDetails"));
const FacultyDashboard = lazy(() => import("./pages/FacultyDashboard"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));

function LoadingScreen() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <div className="mx-auto mb-3 h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />

                <p className="text-sm font-medium text-slate-600">
                    Loading...
                </p>
            </div>
        </div>
    );
}

function App() {
    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />

            <Suspense fallback={<LoadingScreen />}>
                <Routes>
                    <Route
                        path="/"
                        element={<Login />}
                    />

                    <Route
                        path="/signup"
                        element={<Signup />}
                    />

                    <Route
                        path="/reset-password/:token"
                        element={<ResetPassword />}
                    />

                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />

                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute role="student">
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/faculty-dashboard"
                        element={
                            <ProtectedRoute role="faculty">
                                <FacultyDashboard />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/admin-dashboard"
                        element={
                            <AdminRoute>
                                <AdminDashboard />
                            </AdminRoute>
                        }
                    />

                    <Route
                        path="/admin/users"
                        element={
                            <AdminRoute>
                                <AdminUsers />
                            </AdminRoute>
                        }
                    />

                    <Route
                        path="/create-complaint"
                        element={
                            <ProtectedRoute role="student">
                                <CreateComplaint />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/edit-complaint/:id"
                        element={
                            <ProtectedRoute role="student">
                                <EditComplaint />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/complaint/:id"
                        element={
                            <ProtectedRoute>
                                <ComplaintDetails />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                </Routes>
            </Suspense>
        </>
    );
}

export default App;