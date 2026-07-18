import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardActions from "../components/dashboard/DashboardActions";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardStats from "../components/dashboard/DashboardStats";
import Toolbar from "../components/dashboard/Toolbar";
import ComplaintGrid from "../components/dashboard/ComplaintGrid";
import EmptyState from "../components/dashboard/EmptyState";
import LoadingGrid from "../components/dashboard/LoadingGrid";
import SectionHeader from "../components/dashboard/SectionHeader";
import useComplaints from "../hooks/useComplaints";
import useNotifications from "../hooks/useNotifications";




function Dashboard() {
    const user = JSON.parse(localStorage.getItem("user"));

    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const {
    complaints,
    loading,
    deleteComplaint,
    fetchComplaints,
} = useComplaints();

const {
    notifications,
    showNotifications,
    setShowNotifications,
    markNotificationsAsRead,
} = useNotifications(user);


    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        navigate("/");
    };

    const filteredComplaints = complaints.filter((complaint) => {
    const matchesSearch = complaint.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
        statusFilter === "All" ||
        complaint.status === statusFilter;

    return matchesSearch && matchesStatus;
});

    return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">

        <div className="max-w-7xl mx-auto px-6 py-8">

            <DashboardActions
                onRefresh={fetchComplaints}
            />

            <DashboardHeader
                user={user}
                notifications={notifications}
                showNotifications={showNotifications}
                setShowNotifications={setShowNotifications}
                markNotificationsAsRead={markNotificationsAsRead}
                handleLogout={handleLogout}
            />

            <DashboardStats complaints={complaints} />

            {/* Search + Filter */}
            <div className="mt-8">
                <Toolbar
                    search={search}
                    setSearch={setSearch}
                    statusFilter={statusFilter}
                    setStatusFilter={setStatusFilter}
                />
            </div>

            {/* Complaint Header */}
            <section className="mt-12">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

                    <SectionHeader
                        title="My Complaints"
                        subtitle={`Showing ${filteredComplaints.length} complaint(s)`}
                    />

                </div>

                {loading ? (
                    <LoadingGrid />
                ) : filteredComplaints.length === 0 ? (
                    <EmptyState />
                ) : (
                    <ComplaintGrid
                        complaints={filteredComplaints}
                        deleteComplaint={deleteComplaint}
                    />
                )}

            </section>

        </div>

    </div>
);
}

export default Dashboard;