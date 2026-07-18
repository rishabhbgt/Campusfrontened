import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";
import ComplaintImage from "../components/complaintDetails/ComplaintImage";
import ComplaintInfo from "../components/complaintDetails/ComplaintInfo";

function ComplaintDetails() {
    const { id } = useParams();

    const [complaint, setComplaint] = useState(null);
    const [message, setMessage] = useState("");
    const [comments, setComments] = useState([]);

    const fetchComplaint = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await api.get(`/complaints/${id}`, {
                headers: {
                    Authorization: token,
                },
            });

            setComplaint(response.data.complaint);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchComments = async () => {
    try {
        const token = localStorage.getItem("token");

        const response = await api.get(
            `/complaints/${id}/comments`,
            {
                headers: {
                    Authorization: token,
                },
            }
        );

        setComments(response.data.comments);
    } catch (error) {
        console.log(error);
    }
};

    useEffect(() => {
        fetchComplaint();
        fetchComments();
    }, [id]);

    const handleComment = async () => {
        try {
            const token = localStorage.getItem("token");

            await api.post(
                `/complaints/${id}/comment`,
                { message },
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            toast.success("Comment Added");

            setMessage("");

            fetchComments();

        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Failed to add comment");
        }
    };

    if (!complaint) return <h2>Loading...</h2>;

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center p-8">
            <div className="bg-white shadow-xl rounded-xl p-8 max-w-3xl w-full">

                <h1 className="text-3xl font-bold text-blue-600 mb-6">
                    Complaint Details
                </h1>

                {complaint.image && (
                    <ComplaintImage image={complaint.image} />
                )}

                <h2 className="text-2xl font-bold mb-3">
                    {complaint.title}
                </h2>

                <p className="mb-4 text-gray-700">
                    {complaint.description}
                </p>

                <div className="space-y-3">

                    <p>
                        <strong>Category:</strong> {complaint.category}
                    </p>

                    <p>
                        <strong>Status:</strong> {complaint.status}
                    </p>
                    <p>
                        <strong>Priority:</strong>{" "}
                        <span
                            className={`px-3 py-1 rounded text-white ${
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

                    <p>
                        <strong>Due Date:</strong>{" "}
                        {complaint.dueDate
                            ? new Date(complaint.dueDate).toLocaleDateString()
                            : "Not Set"}
                    </p>

                    <p>
                        <strong>Student:</strong> {complaint.createdBy?.fullName}
                    </p>

                    <p>
                        <strong>Email:</strong> {complaint.createdBy?.email}
                    </p>

                    <p>
                        <strong>Created:</strong>{" "}
                        {new Date(complaint.createdAt).toLocaleString()}
                    </p>

                    <p>
                        <strong>Updated:</strong>{" "}
                        {new Date(complaint.updatedAt).toLocaleString()}
                    </p>

                    <hr className="my-6" />

                        <h2 className="text-2xl font-bold mb-4">
                            Complaint Progress
                        </h2>

                        <div className="space-y-4">

                            <div className="flex items-center">
                                <div className="w-5 h-5 rounded-full bg-green-500"></div>
                                <span className="ml-3 font-semibold">
                                    Complaint Created
                                </span>
                            </div>

                            <div className="ml-2 border-l-2 border-gray-300 h-6"></div>

                            <div className="flex items-center">
                                <div
                                    className={`w-5 h-5 rounded-full ${
                                        complaint.status === "Pending" ||
                                        complaint.status === "In Progress" ||
                                        complaint.status === "Resolved"
                                            ? "bg-green-500"
                                            : "bg-gray-300"
                                    }`}
                                ></div>

                                <span className="ml-3">
                                    Pending
                                </span>
                            </div>

                            <div className="ml-2 border-l-2 border-gray-300 h-6"></div>

                            <div className="flex items-center">
                                <div
                                    className={`w-5 h-5 rounded-full ${
                                        complaint.status === "In Progress" ||
                                        complaint.status === "Resolved"
                                            ? "bg-green-500"
                                            : "bg-gray-300"
                                    }`}
                                ></div>

                                <span className="ml-3">
                                    In Progress
                                </span>
                            </div>

                            <div className="ml-2 border-l-2 border-gray-300 h-6"></div>

                            <div className="flex items-center">
                                <div
                                    className={`w-5 h-5 rounded-full ${
                                        complaint.status === "Resolved"
                                            ? "bg-green-500"
                                            : "bg-gray-300"
                                    }`}
                                ></div>

                                <span className="ml-3">
                                    Resolved
                                </span>
                            </div>

                        </div>

                </div>

                
        {complaint.dueDate &&
            new Date(complaint.dueDate) < new Date() &&
            complaint.status !== "Resolved" && (
                <div className="mt-6 bg-red-100 border border-red-500 text-red-700 rounded-lg p-4">
                    <h3 className="font-bold text-lg">
                        ⚠ Overdue Complaint
                    </h3>

                    <p>
                        This complaint has crossed its due date and is still not resolved.
                    </p>
                </div>
        )}

            <hr className="my-6" />
                <h2 className="text-2xl font-bold mb-4">
                    Comments
                </h2>

                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write a comment..."
                    className="w-full border rounded-lg p-3 mb-3"
                />

                <button
                    onClick={handleComment}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    Add Comment
                </button>

                <div className="mt-6 space-y-3">
                    {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div
                            key={comment._id}
                            className="border rounded-lg p-3 bg-gray-50"
                        >
                            <p className="font-semibold">
                                {comment.user?.fullName} ({comment.user?.role})
                            </p>

                            <p>{comment.message}</p>

                            <p className="text-xs text-gray-500 mt-1">
                                {new Date(comment.createdAt).toLocaleString()}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No comments yet.</p>
                )}
                </div>
            
            </div>
        </div>
    );
}

export default ComplaintDetails;