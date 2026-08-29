import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

import AnalyticsCards from "../components/admin/AnalyticsCards";
import StatusPieChart from "../components/admin/StatusPieChart";
import CategoryBarChart from "../components/admin/CategoryBarChart";
import RecentActivity from "../components/admin/RecentActivity";
import AdminNotificationBell from "../components/admin/AdminNotificationBell";

import AdminComplaintHeader from "../components/adminComplaints/AdminComplaintHeader";
import ComplaintFilters from "../components/adminComplaints/ComplaintFilters";
import ComplaintTable from "../components/adminComplaints/ComplaintTable";
import LoadingComplaints from "../components/adminComplaints/LoadingComplaints";
import EmptyComplaints from "../components/adminComplaints/EmptyComplaints";

function AdminDashboard() {
    const navigate = useNavigate();

    const [complaints, setComplaints] = useState([]);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] =
        useState("All");
    const [priorityFilter, setPriorityFilter] =
        useState("All");
    const [loading, setLoading] = useState(true);
    const [faculties, setFaculties] = useState([]);

    const fetchComplaints = async () => {
        try {
            setLoading(true);

            const response = await api.get(
                "/complaints/all"
            );

            setComplaints(
                response.data?.complaints || []
            );
        } catch (error) {
            console.error(
                "Fetch Complaints Error:",
                error
            );

            toast.error(
                "Failed to load complaints"
            );
        } finally {
            setLoading(false);
        }
    };

    const fetchFaculties = async () => {
        try {
            const response = await api.get(
                "/users"
            );

            const facultyUsers = (
                response.data?.users || []
            ).filter(
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
            console.error(
                "Update Complaint Error:",
                error
            );

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
            console.error(
                "Excel Download Error:",
                error
            );

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
            console.error(
                "PDF Download Error:",
                error
            );

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
            (complaint) =>
                complaint.status === "Pending"
        ).length;

    const inProgress =
        complaints.filter(
            (complaint) =>
                complaint.status === "In Progress"
        ).length;

    const resolved =
        complaints.filter(
            (complaint) =>
                complaint.status === "Resolved"
        ).length;

    const highPriority =
        complaints.filter(
            (complaint) =>
                complaint.priority === "High"
        ).length;

    const overdue =
        complaints.filter(
            (complaint) =>
                complaint.dueDate &&
                new Date(complaint.dueDate) <
                    new Date() &&
                complaint.status !== "Resolved"
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

    const filteredComplaints =
        complaints
            .filter((complaint) => {
                const matchSearch =
                    complaint.title
                        ?.toLowerCase()
                        .includes(
                            search.toLowerCase()
                        );

                const isOverdue =
                    complaint.dueDate &&
                    new Date(
                        complaint.dueDate
                    ) < new Date() &&
                    complaint.status !==
                        "Resolved";

                const matchStatus =
                    statusFilter === "All"
                        ? true
                        : statusFilter ===
                            "Overdue"
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
                    priorityOrder[
                        a.priority
                    ] || 0;

                const priorityB =
                    priorityOrder[
                        b.priority
                    ] || 0;

                if (
                    priorityB !== priorityA
                ) {
                    return (
                        priorityB -
                        priorityA
                    );
                }

                return (
                    new Date(
                        b.createdAt
                    ) -
                    new Date(
                        a.createdAt
                    )
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
                    (complaint) =>
                        complaint.category ===
                        category
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
                    mx-auto
                    max-w-[1600px]
                    px-4
                    py-6
                    sm:px-6
                    sm:py-8
                    lg:px-8
                "
            >

                <header
                    className="
                        relative
                        z-50
                        mb-8
                        rounded-3xl
                        border
                        border-white/60
                        bg-white/80
                        px-5
                        py-5
                        shadow-xl
                        backdrop-blur-xl
                        sm:px-8
                        sm:py-6
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            gap-5
                            md:flex-row
                            md:items-center
                            md:justify-between
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
                                type="button"
                                onClick={() =>
                                    navigate(
                                        "/admin/users"
                                    )
                                }
                                className="
                                    hidden
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-gradient-to-r
                                    from-purple-600
                                    to-indigo-600
                                    px-5
                                    py-3
                                    text-white
                                    shadow-lg
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:shadow-xl
                                    sm:flex
                                "
                            >
                                Manage Users
                            </button>

                            <button
                                type="button"
                                onClick={
                                    handleLogout
                                }
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-2xl
                                    bg-gradient-to-r
                                    from-red-500
                                    to-red-600
                                    px-4
                                    py-3
                                    text-white
                                    shadow-lg
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:from-red-600
                                    hover:to-red-700
                                    hover:shadow-xl
                                    active:scale-95
                                    sm:px-5
                                "
                            >
                                <LogOutIcon />
                                Logout
                            </button>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() =>
                            navigate(
                                "/admin/users"
                            )
                        }
                        className="
                            mt-5
                            w-full
                            rounded-2xl
                            bg-gradient-to-r
                            from-purple-600
                            to-indigo-600
                            px-5
                            py-3
                            text-white
                            shadow-lg
                            sm:hidden
                        "
                    >
                        Manage Users
                    </button>
                </header>

                <section className="mb-8">
                    <AnalyticsCards
                        total={total}
                        pending={pending}
                        inProgress={
                            inProgress
                        }
                        resolved={
                            resolved
                        }
                        highPriority={
                            highPriority
                        }
                        overdue={overdue}
                    />
                </section>

                <section
                    className="
                        mb-8
                        flex
                        flex-col
                        justify-end
                        gap-3
                        sm:flex-row
                    "
                >
                    <button
                        type="button"
                        onClick={
                            downloadExcel
                        }
                        className="
                            flex-1
                            rounded-xl
                            bg-green-600
                            px-5
                            py-3
                            text-white
                            shadow-md
                            transition
                            hover:bg-green-700
                            sm:flex-none
                        "
                    >
                        📊 Download Excel Report
                    </button>

                    <button
                        type="button"
                        onClick={
                            downloadPDF
                        }
                        className="
                            flex-1
                            rounded-xl
                            bg-red-600
                            px-5
                            py-3
                            text-white
                            shadow-md
                            transition
                            hover:bg-red-700
                            sm:flex-none
                        "
                    >
                        📄 Download PDF
                    </button>
                </section>

                <section
                    className="
                        mb-8
                        grid
                        grid-cols-1
                        gap-6
                        lg:grid-cols-2
                    "
                >
                    <StatusPieChart
                        pieData={pieData}
                        COLORS={COLORS}
                    />

                    <CategoryBarChart
                        categoryData={
                            categoryData
                        }
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
                            faculties={
                                faculties
                            }
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
function LogOutIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M9 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44772 3 5 3H9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M16 17L21 12L16 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M21 12H9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default AdminDashboard;
