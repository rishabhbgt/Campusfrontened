import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";
import AnalyticsCards from "../components/AnalyticsCards";
import StatusPieChart from "../components/StatusPieChart";
import CategoryBarChart from "../components/CategoryBarChart";
import RecentActivity from "../components/RecentActivity";
import ComplaintCard from "../components/ComplaintCard";
import AdminNotificationBell from "../components/AdminNotificationBell";

function AdminDashboard() {

    const navigate = useNavigate();

    const [complaints, setComplaints] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    const fetchComplaints = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await api.get("/complaints/all", {
                headers: {
                    Authorization: token,
                },
            });

            console.log("Complaints:", response.data.complaints);

            setComplaints(response.data.complaints);
        } catch (error) {
            console.log(error);
        }
    };

    const updateStatus = async (id, status, priority, dueDate) => {
        try {
            const token = localStorage.getItem("token");

            await api.put(
                `/complaints/${id}`,
                {
                    status,
                    priority,
                    dueDate,
                },
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            toast.success("Status Updated ✅");

            fetchComplaints();
        } catch (error) {
            console.log(error);
            toast.error(
                error.response?.data?.message ||
                "Failed to update status"
            );
        }
    };

    const downloadExcel = async () => {
    try {
        const token = localStorage.getItem("token");

        const response = await api.get("/reports/excel", {
            headers: {
                Authorization: token,
            },
            responseType: "blob",
        });

        const url = window.URL.createObjectURL(
            new Blob([response.data])
        );

        const link = document.createElement("a");

        link.href = url;
        link.setAttribute(
            "download",
            "Complaint_Report.xlsx"
        );

        document.body.appendChild(link);

        link.click();

        link.remove();

    } catch (error) {

        console.log(error);

        toast.error("Failed to download report");

    }
};

const downloadPDF = async () => {
    try {
        const token = localStorage.getItem("token");

        const response = await api.get("/reports/pdf", {
            headers: {
                Authorization: token,
            },
            responseType: "blob",
        });

        const url = window.URL.createObjectURL(
            new Blob([response.data])
        );

        const link = document.createElement("a");

        link.href = url;

        link.setAttribute(
            "download",
            "Complaint_Report.pdf"
        );

        document.body.appendChild(link);

        link.click();

        link.remove();

    } catch (error) {

        console.log(error);

        toast.error("Failed to download PDF");

    }
};

    useEffect(() => {
        fetchComplaints();
    }, []);

    const total = complaints.length;

    const pending = complaints.filter(
        (c) => c.status === "Pending"
    ).length;

    const inProgress = complaints.filter(
        (c) => c.status === "In Progress"
    ).length;

    const resolved = complaints.filter(
        (c) => c.status === "Resolved"
    ).length;


    const highPriority = complaints.filter(
        (c) => c.priority === "High"
    ).length;

    
    const overdue = complaints.filter(
        (c) =>
            c.dueDate &&
            new Date(c.dueDate) < new Date() &&
            c.status !== "Resolved"
    ).length;

    const pieData = [
        { name: "Pending", value: pending },
        { name: "In Progress", value: inProgress },
        { name: "Resolved", value: resolved },
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
        .filter((c) =>
            filter === "All"
                ? true
                : c.status === filter
        )
        .filter((c) =>
            c.title
                .toLowerCase()
                .includes(search.toLowerCase())
        )
        .sort((a, b) => {
            if (
                priorityOrder[b.priority] !==
                priorityOrder[a.priority]
            ) {
                return (
                    priorityOrder[b.priority] -
                    priorityOrder[a.priority]
                );
            }

            return (
                new Date(b.createdAt) -
                new Date(a.createdAt)
            );
        });

    const recentComplaints =
        filteredComplaints.slice(0, 5);

    const categoryData = [
        {
            category: "Hostel",
            complaints: complaints.filter(
                (c) => c.category === "Hostel"
            ).length,
        },
        {
            category: "Mess",
            complaints: complaints.filter(
                (c) => c.category === "Mess"
            ).length,
        },
        {
            category: "Library",
            complaints: complaints.filter(
                (c) => c.category === "Library"
            ).length,
        },
        {
            category: "Classroom",
            complaints: complaints.filter(
                (c) => c.category === "Classroom"
            ).length,
        },
        {
            category: "Other",
            complaints: complaints.filter(
                (c) => c.category === "Other"
            ).length,
        },
    ];

    const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logged Out");

    navigate("/");
};

    return (
        <div className="min-h-screen bg-gray-100 p-8">

        <div className="flex justify-between items-center mb-6">

                <h1 className="text-3xl font-bold text-blue-600">
                    Admin Dashboard
                </h1>

                <div className="flex items-center gap-4">

                <AdminNotificationBell />

                <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
                >
                    Logout
                </button>

            </div>
        </div>

            <button
                onClick={() => navigate("/admin/users")}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 mb-6"
            >
                Manage Users
            </button>

            <AnalyticsCards
                total={total}
                pending={pending}
                inProgress={inProgress}
                resolved={resolved}
                highPriority={highPriority}
                overdue={overdue}
            />

            <div className="flex justify-end mb-6">

                <button
                    onClick={downloadExcel}
                    className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
                >
                    📊 Download Excel Report
                </button>

                <button
                    onClick={downloadPDF}
                    className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
                >
                    📄 Download PDF
                </button>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

                <StatusPieChart
                    pieData={pieData}
                    COLORS={COLORS}
                />

                <CategoryBarChart
                    categoryData={categoryData}
                />

            </div>

            <input
                type="text"
                placeholder="Search complaints..."
                value={search}
                onChange={(e) =>
                    setSearch(e.target.value)
                }
                className="border p-2 w-full mb-4 rounded"
            />

            <div className="flex gap-3 mb-4">
                {[
                    "All",
                    "Pending",
                    "In Progress",
                    "Resolved",
                ].map((status) => (
                    <button
                        key={status}
                        onClick={() =>
                            setFilter(status)
                        }
                        className="px-3 py-1 border rounded"
                    >
                        {status}
                    </button>
                ))}
            </div>

            <RecentActivity
                recentComplaints={
                    recentComplaints
                }
            />

            {filteredComplaints.map(
                (complaint) => (
                    <ComplaintCard
                        key={complaint._id}
                        complaint={complaint}
                        updateStatus={
                            updateStatus
                        }
                    />
                )
            )}
        </div>
    );
}



export default AdminDashboard;