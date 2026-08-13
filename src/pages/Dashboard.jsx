import { useState } from "react";
import DashboardActions from "../components/dashboard/DashboardActions";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardStats from "../components/dashboard/DashboardStats";
import Toolbar from "../components/dashboard/Toolbar";
import ComplaintGrid from "../components/dashboard/ComplaintGrid";
import EmptyComplaint from "../components/dashboard/EmptyComplaint";
import LoadingGrid from "../components/dashboard/LoadingGrid";
import useComplaints from "../hooks/useComplaints";
import useNotifications from "../hooks/useNotifications";

function Dashboard() {

    const user = JSON.parse(
        localStorage.getItem("user")
    );

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
        markAsRead,
        markAllAsRead,
    } = useNotifications(user);

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        window.location.href = "/";
    };

    const filteredComplaints = complaints.filter(
        (complaint) => {

            const matchesSearch =
                complaint.title
                    ?.toLowerCase()
                    .includes(
                        search.toLowerCase()
                    );

            const matchesStatus =
                statusFilter === "All" ||
                complaint.status === statusFilter;

            return (
                matchesSearch &&
                matchesStatus
            );
        }
    );

    return (

        <div className="
            min-h-screen
            bg-gradient-to-br
            from-slate-100
            via-blue-50
            to-indigo-100
        ">

            <main className="
                max-w-7xl
                mx-auto
                px-4
                sm:px-6
                lg:px-8
                py-6
                sm:py-8
            ">

                {/* ================= HEADER ================= */}

                <DashboardHeader
                    user={user}
                    notifications={notifications}
                    markAsRead={markAsRead}
                    markAllAsRead={markAllAsRead}
                    handleLogout={handleLogout}
                />


                {/* ================= STATS ================= */}

                <section className="mt-8">

                    <DashboardStats
                        complaints={complaints}
                    />

                </section>


                {/* ================= SEARCH & FILTER ================= */}

                <section className="mt-8">

                    <Toolbar
                        search={search}
                        setSearch={setSearch}
                        statusFilter={statusFilter}
                        setStatusFilter={
                            setStatusFilter
                        }
                    />

                </section>


                {/* ================= COMPLAINTS ================= */}

                <section className="mt-10">

                    <div className="mb-6">
                        <DashboardActions
                            onRefresh={fetchComplaints}
                        />
                    </div>


                    {/* ================= CONTENT ================= */}

                    {loading ? (

                        <LoadingGrid />

                    ) : filteredComplaints.length === 0 ? (

                        <EmptyComplaint />

                    ) : (

                        <ComplaintGrid
                            complaints={
                                filteredComplaints
                            }
                            deleteComplaint={
                                deleteComplaint
                            }
                        />

                    )}

                </section>

            </main>

        </div>

    );
}

export default Dashboard;