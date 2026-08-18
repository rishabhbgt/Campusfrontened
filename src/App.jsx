import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/admin/ProtectedRoute";
import CreateComplaint from "./pages/CreateComplaint";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminRoute from "./components/admin/AdminRoute";
import EditComplaint from "./pages/EditComplaint";
import ComplaintDetails from "./pages/ComplaintDetails";
import FacultyDashboard from "./pages/FacultyDashboard";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";


function App() {
  return (

      <>
        <Toaster
            position="top-right"
            reverseOrder={false}
        />

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

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
          <ProtectedRoute role= "student">
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
      
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;