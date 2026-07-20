import { User, Clock } from "lucide-react";

function RecentActivity({ recentComplaints }) {

    const getStatusColor = (status) => {
        switch (status) {
            case "Pending":
                return "bg-yellow-100 text-yellow-700";
            case "In Progress":
                return "bg-blue-100 text-blue-700";
            case "Resolved":
                return "bg-green-100 text-green-700";
            case "Rejected":
                return "bg-red-100 text-red-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    return (
        <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6">

            <h2 className="text-2xl font-bold text-slate-800 mb-5">
                Recent Activity
            </h2>

            {recentComplaints.length === 0 ? (

                <div className="text-center py-12 text-slate-500">
                    No recent complaints.
                </div>

            ) : (

                <div className="space-y-4">

                    {recentComplaints.map((complaint) => (

                        <div
                            key={complaint._id}
                            className="flex justify-between items-center border rounded-2xl p-4 hover:bg-slate-50 transition"
                        >

                            <div>

                                <h3 className="font-semibold text-slate-800">
                                    {complaint.title}
                                </h3>

                                <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">

                                    <User size={14} />

                                    {complaint.createdBy?.fullName}

                                </div>

                                <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">

                                    <Clock size={13} />

                                    {new Date(
                                        complaint.createdAt
                                    ).toLocaleString()}

                                </div>

                            </div>

                            <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                                    complaint.status
                                )}`}
                            >
                                {complaint.status}
                            </span>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}

export default RecentActivity;