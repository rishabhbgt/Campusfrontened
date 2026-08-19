import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

import AnalyticsCards from "../components/admin/AnalyticsCards";
import StatusPieChart from "../components/admin/StatusPieChart";
import CategoryBarChart from "../components/admin/CategoryBarChart";
import RecentActivity from "../components/admin/RecentActivity";
import AdminNotificationBell from "../components/admin/AdminNotificationBell";

import AdminComplaintHeader from "../components/adminComplaints/AdminComplaintHeader";
import ComplaintFilters from "../components/adminComplaints/ComplaintFilters";
import ComplaintStats from "../components/adminComplaints/ComplaintStats";
import ComplaintTable from "../components/adminComplaints/ComplaintTable";
import LoadingComplaints from "../components/adminComplaints/LoadingComplaints";
import EmptyComplaints from "../components/adminComplaints/EmptyComplaints";

function AdminDashboard() {
    const navigate = useNavigate();

    const [complaints, setComplaints] = useState([]);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [priorityFilter, setPriorityFilter] = useState("All");
    const [loading, setLoading] = useState(true);
    const [faculties, setFaculties] = useState([]);

    const fetchComplaints = async () => {
        try {
            setLoading(true);

            const response = await api.get(
                "/complaints/all"
            );

            setComplaints(
                response.data.complaints || []
            );
        } catch (error) {
            console.log(error);

            toast.error(
                "Failed to load complaints"
            );
        } finally {
            setLoading(false);
        }
    };

    const fetchFaculties = async () => {
        try {
            const response = await api.get("/users");

            const facultyUsers =
                (response.data.users || []).filter(
                    (user) =>
                        user.role === "faculty" &&
                        !user.isBlocked
                );

            setFaculties(facultyUsers);
        } catch (error) {
            console.error(
                "Failed to fetch faculties:",
                error
            );

            toast.error(
                "Failed to load faculty list"
            );
        }
    };

    const updateStatus = async (id, data) => {
        try {
            await api.put(
                `/complaints/${id}`,
                data
            );

            toast.success(
                "Complaint Updated"
            );

            await fetchComplaints();
        } catch (error) {
            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Failed to update"
            );
        }
    };

    const archiveComplaint = async (id) => {
        try {
            await api.put(
                `/complaints/archive/${id}`
            );

            toast.success(
                "Complaint Archived Successfully"
            );

            await fetchComplaints();
        } catch (error) {
            console.error(
                "Archive Complaint Error:",
                error
            );

            toast.error(
                error.response?.data?.message ||
                "Failed to archive complaint"
            );
        }
    };

    const downloadExcel = async () => {
        try {
            const response = await api.get(
                "/reports/excel",
                {
                    responseType: "blob",
                }
            );

            const url =
                window.URL.createObjectURL(
                    new Blob([response.data])
                );

            const link =
                document.createElement("a");

            link.href = url;

            link.setAttribute(
                "download",
                "Complaint_Report.xlsx"
            );

            document.body.appendChild(link);

            link.click();

            link.remove();

            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.log(error);

            toast.error(
                "Failed to download report"
            );
        }
    };

    const downloadPDF = async () => {
        try {
            const response = await api.get(
                "/reports/pdf",
                {
                    responseType: "blob",
                }
            );

            const url =
                window.URL.createObjectURL(
                    new Blob([response.data])
                );

            const link =
                document.createElement("a");

            link.href = url;

            link.setAttribute(
                "download",
                "Complaint_Report.pdf"
            );

            document.body.appendChild(link);

            link.click();

            link.remove();

            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.log(error);

            toast.error(
                "Failed to download PDF"
            );
        }
    };

    useEffect(() => {
        fetchComplaints();
        fetchFaculties();
    }, []);

    const total =
        complaints.length;

    const pending =
        complaints.filter(
            (c) => c.status === "Pending"
        ).length;

    const inProgress =
        complaints.filter(
            (c) => c.status === "In Progress"
        ).length;

    const resolved =
        complaints.filter(
            (c) => c.status === "Resolved"
        ).length;

    const highPriority =
        complaints.filter(
            (c) => c.priority === "High"
        ).length;

    const overdue =
        complaints.filter(
            (c) =>
                c.dueDate &&
                new Date(c.dueDate) < new Date() &&
                c.status !== "Resolved"
        ).length;

    const pieData = [
        {
            name: "Pending",
            value: pending,
        },
        {
            name: "In Progress",
            value: inProgress,
        },
        {
            name: "Resolved",
            value: resolved,
        },
    ];

    const COLORS = [
        "#FACC15",
        "#3B82F6",
        "#22C55E",
    ];

    const priorityOrder = {
        High: 3,
        Medium: 2,
        Low: 1,
    };

    const filteredComplaints = complaints
        .filter((complaint) => {
            const matchSearch =
                complaint.title
                    ?.toLowerCase()
                    .includes(
                        search.toLowerCase()
                    );

            const isOverdue =
                complaint.dueDate &&
                new Date(complaint.dueDate) <
                    new Date() &&
                complaint.status !== "Resolved";

            const matchStatus =
                statusFilter === "All"
                    ? true
                    : statusFilter === "Overdue"
                    ? isOverdue
                    : complaint.status ===
                      statusFilter;

            const matchPriority =
                priorityFilter === "All" ||
                complaint.priority ===
                    priorityFilter;

            return (
                matchSearch &&
                matchStatus &&
                matchPriority
            );
        })
        .sort((a, b) => {
            const priorityA =
                priorityOrder[a.priority] || 0;

            const priorityB =
                priorityOrder[b.priority] || 0;

            if (
                priorityB !== priorityA
            ) {
                return (
                    priorityB -
                    priorityA
                );
            }

            return (
                new Date(b.createdAt) -
                new Date(a.createdAt)
            );
        });

    const recentComplaints =
        filteredComplaints.slice(0, 5);

    const categories = [
        "Hostel",
        "Mess",
        "Library",
        "Classroom",
        "Other",
    ];

    const categoryData =
        categories.map((category) => ({
            category,

            complaints:
                complaints.filter(
                    (c) =>
                        c.category === category
                ).length,
        }));

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        toast.success("Logged Out");

        navigate("/");
    };

    return (
        <div
            className="
                min-h-screen
                bg-gradient-to-br
                from-slate-100
                via-blue-50
                to-indigo-100
            "
        >
            <main
                className="
                    max-w-[1600px]
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-8
                    py-6
                    sm:py-8
                "
            >
                <header
                    className="
                        relative
                        z-50
                        bg-white/80
                        backdrop-blur-xl
                        rounded-3xl
                        shadow-xl
                        border
                        border-white/60
                        px-5
                        sm:px-8
                        py-5
                        sm:py-6
                        mb-8
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            md:flex-row
                            md:items-center
                            md:justify-between
                            gap-5
                        "
                    >
                        <AdminComplaintHeader />

                        <div
                            className="
                                flex
                                items-center
                                justify-end
                                gap-3
                                sm:gap-4
                            "
                        >
                            <div
                                className="
                                    relative
                                    z-[9999]
                                "
                            >
                                <AdminNotificationBell />
                            </div>

                            <button
                                onClick={() =>
                                    navigate(
                                        "/admin/users"
                                    )
                                }
                                className="
                                    hidden
                                    sm:flex
                                    items-center
                                    justify-center
                                    bg-gradient-to-r
                                    from-purple-600
                                    to-indigo-600
                                    text-white
                                    px-5
                                    py-3
                                    rounded-2xl
                                    shadow-lg
                                    hover:shadow-xl
                                    hover:-translate-y-0.5
                                    transition-all
                                    duration-300
                                "
                            >
                                Manage Users
                            </button>

                            <button
                                onClick={handleLogout}
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    bg-gradient-to-r
                                    from-red-500
                                    to-red-600
                                    hover:from-red-600
                                    hover:to-red-700
                                    text-white
                                    px-4
                                    sm:px-5
                                    py-3
                                    rounded-2xl
                                    shadow-lg
                                    hover:shadow-xl
                                    transition-all
                                    duration-300
                                    active:scale-95
                                "
                            >
                                Logout
                            </button>
                        </div>
                    </div>

                    <button
                        onClick={() =>
                            navigate(
                                "/admin/users"
                            )
                        }
                        className="
                            sm:hidden
                            w-full
                            mt-5
                            bg-gradient-to-r
                            from-purple-600
                            to-indigo-600
                            text-white
                            px-5
                            py-3
                            rounded-2xl
                            shadow-lg
                        "
                    >
                        Manage Users
                    </button>
                </header>

                <section className="mb-8">
                    <AnalyticsCards
                        total={total}
                        pending={pending}
                        inProgress={inProgress}
                        resolved={resolved}
                        highPriority={highPriority}
                        overdue={overdue}
                    />
                </section>

                <section className="mb-8">
                    <ComplaintStats
                        complaints={complaints}
                    />
                </section>

                <section
                    className="
                        flex
                        flex-col
                        sm:flex-row
                        justify-end
                        gap-3
                        mb-8
                    "
                >
                    <button
                        onClick={downloadExcel}
                        className="
                            flex-1
                            sm:flex-none
                            bg-green-600
                            text-white
                            px-5
                            py-3
                            rounded-xl
                            hover:bg-green-700
                            shadow-md
                            transition
                        "
                    >
                        📊 Download Excel Report
                    </button>

                    <button
                        onClick={downloadPDF}
                        className="
                            flex-1
                            sm:flex-none
                            bg-red-600
                            text-white
                            px-5
                            py-3
                            rounded-xl
                            hover:bg-red-700
                            shadow-md
                            transition
                        "
                    >
                        📄 Download PDF
                    </button>
                </section>

                <section
                    className="
                        grid
                        grid-cols-1
                        lg:grid-cols-2
                        gap-6
                        mb-8
                    "
                >
                    <StatusPieChart
                        pieData={pieData}
                        COLORS={COLORS}
                    />

                    <CategoryBarChart
                        categoryData={categoryData}
                    />
                </section>

                <section className="mb-8">
                    <ComplaintFilters
                        search={search}
                        setSearch={setSearch}
                        statusFilter={
                            statusFilter
                        }
                        setStatusFilter={
                            setStatusFilter
                        }
                        priorityFilter={
                            priorityFilter
                        }
                        setPriorityFilter={
                            setPriorityFilter
                        }
                    />
                </section>

                <section className="mb-8">
                    <RecentActivity
                        recentComplaints={
                            recentComplaints
                        }
                    />
                </section>

                <section>
                    {loading ? (
                        <LoadingComplaints />
                    ) : filteredComplaints.length ===
                    0 ? (
                        <EmptyComplaints />
                    ) : (
                        <ComplaintTable
                            complaints={
                                filteredComplaints
                            }
                            faculties={faculties}
                            updateComplaintStatus={
                                updateStatus
                            }
                            archiveComplaint={
                                archiveComplaint
                            }
                        />
                    )}
                </section>
            </main>
        </div>
    );
}

export default AdminDashboard;