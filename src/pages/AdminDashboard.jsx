import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";
import AnalyticsCards from "../components/AnalyticsCards";
import StatusPieChart from "../components/StatusPieChart";
import CategoryBarChart from "../components/CategoryBarChart";
import RecentActivity from "../components/RecentActivity";
import AdminComplaintHeader from "../components/adminComplaints/AdminComplaintHeader";
import ComplaintFilters from "../components/adminComplaints/ComplaintFilters";
import ComplaintStats from "../components/adminComplaints/ComplaintStats";
import ComplaintTable from "../components/adminComplaints/ComplaintTable";
import LoadingComplaints from "../components/adminComplaints/LoadingComplaints";
import EmptyComplaints from "../components/adminComplaints/EmptyComplaints";
import AdminNotificationBell from "../components/AdminNotificationBell";

function AdminDashboard() {

    const navigate = useNavigate();

    const [complaints, setComplaints] = useState([]);

    const [search, setSearch] = useState("");

    const [statusFilter, setStatusFilter] = useState("All");

    const [priorityFilter, setPriorityFilter] = useState("All");

    const [loading, setLoading] = useState(true);

    const fetchComplaints = async () => {

    try {

        setLoading(true);

        const token = localStorage.getItem("token");

        const response = await api.get("/complaints/all", {
            headers: {
                Authorization: token,
            },
        });

        setComplaints(response.data.complaints);

    } catch (error) {

        console.log(error);

    } finally {

        setLoading(false);

    }
};

    const updateStatus = async (id, data) => {

    try {

        const token = localStorage.getItem("token");

        await api.put(
            `/complaints/${id}`,
            data,
            {
                headers: {
                    Authorization: token,
                },
            }
        );

        toast.success("Complaint Updated");

        fetchComplaints();

    } catch (error) {

        console.log(error);

        toast.error(
            error.response?.data?.message ||
            "Failed to update"
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
    .filter((complaint) => {

        const matchSearch =
            complaint.title
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchStatus =
            statusFilter === "All"
                ? true
                : complaint.status === statusFilter;

        const matchPriority =
            priorityFilter === "All"
                ? true
                : complaint.priority === priorityFilter;

        return (
            matchSearch &&
            matchStatus &&
            matchPriority
        );

    })
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

                <AdminComplaintHeader />

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
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition mb-6">
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

            <ComplaintStats complaints={complaints} />

            <div className="flex justify-end gap-3 mb-6">

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

            <ComplaintFilters
                search={search}
                setSearch={setSearch}

                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}

                priorityFilter={priorityFilter}
                setPriorityFilter={setPriorityFilter}
            />

            <div className="mb-8">

                <RecentActivity
                    recentComplaints={recentComplaints}
                />

            </div>

            
            {loading ? (

            <LoadingComplaints />

        ) : filteredComplaints.length === 0 ? (

            <EmptyComplaints />

        ) : (

            <ComplaintTable
                complaints={filteredComplaints}
                faculties={[]}
                updateComplaintStatus={updateStatus}
            />

        )}

                    
    </div>
    );
}



export default AdminDashboard;