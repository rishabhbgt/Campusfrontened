import { Link } from "react-router-dom";

function ComplaintCard({ complaint, updateStatus }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-5 mb-5">

            <h2 className="text-2xl font-bold">
                {complaint.title}
            </h2>

            <p className="mt-2">
                {complaint.description}
            </p>

            {complaint.image && (
            <img
                src={complaint.image}
                alt="Complaint"
                className="w-full h-56 object-cover rounded-lg mt-3"
            />
        )}

            <p className="mt-2">
                <span className="font-semibold">Category:</span>{" "}
                {complaint.category}
            </p>

            <p className="mt-2">
                <span className="font-semibold">Student:</span>{" "}
                {complaint.createdBy?.fullName}
            </p>

            <p className="mt-2">
                <span className="font-semibold">Email:</span>{" "}
                {complaint.createdBy?.email}
            </p>

            <p className="mt-2">
                <span className="font-semibold">Status: </span>

                <span
                    className={`px-3 py-1 rounded text-white text-sm ${
                        complaint.status === "Pending"
                            ? "bg-yellow-500"
                            : complaint.status === "In Progress"
                            ? "bg-blue-500"
                            : "bg-green-500"
                    }`}
                >
                    {complaint.status}
                </span>
            </p>

            <div className="mt-4">
                <label className="font-semibold mr-2">
                    Status:
                </label>

                <select
                    value={complaint.status}
                    onChange={(e) =>
                        updateStatus(
                            complaint._id,
                            e.target.value,
                            complaint.priority,
                        )
                    }
                    className="border rounded px-3 py-2"
                >

                    <option value="Pending">Pending</option>
                    <option value="In Progress">
                        In Progress
                    </option>
                    <option value="Resolved">
                        Resolved
                    </option>
                </select>
            </div>

            <p className="mt-2">
                <span className="font-semibold">Priority: </span>

                <span
                    className={`px-3 py-1 rounded text-white text-sm ${
                        complaint.priority === "High"
                            ? "bg-red-500"
                            : complaint.priority === "Medium"
                            ? "bg-yellow-500"
                            : "bg-green-500"
                    }`}
                >
                    {complaint.priority}
                </span>
            </p>

            <div className="mt-4">
            <label className="font-semibold mr-2">
                Due Date:
            </label>

            <input
                type="date"
                value={
                    complaint.dueDate
                        ? complaint.dueDate.substring(0, 10)
                        : ""
                }
                onChange={(e) =>
                    updateStatus(
                        complaint._id,
                        complaint.status,
                        complaint.priority,
                        e.target.value
                    )
                }
                className="border rounded px-3 py-2"
            />
            </div>

            <div className="mt-4">
            <label className="font-semibold mr-2">
                Priority:
            </label>

            <select
                value={complaint.priority}
                onChange={(e) =>
                    updateStatus(
                        complaint._id,
                        complaint.status,
                        e.target.value,
                        complaint.dueDate
                    )
                }
                className="border rounded px-3 py-2"
            >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </div>

        <p className="mt-2">
            <span className="font-semibold">
                Due Date:
            </span>{" "}
            {complaint.dueDate
                ? new Date(complaint.dueDate).toLocaleDateString()
                : "Not Set"}
        </p>

        {complaint.dueDate &&
        new Date(complaint.dueDate) < new Date() &&
        complaint.status !== "Resolved" && (
            <div className="mt-3">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    ⚠ Overdue
                </span>
            </div>
    )}

        {complaint.dueDate &&
        complaint.status !== "Resolved" && (
            <p className="mt-2 text-sm text-gray-600">
                Days Left:{" "}
                {Math.ceil(
                    (new Date(complaint.dueDate) - new Date()) /
                    (1000 * 60 * 60 * 24)
                )}
            </p>
    )}

            <div className="mt-4">
                <Link
                    to={`/complaint/${complaint._id}`}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                >
                    View Details
                </Link>
            </div>

    </div>
    );
}

export default ComplaintCard;