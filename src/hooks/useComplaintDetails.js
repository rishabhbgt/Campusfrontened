import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

function useComplaintDetails(id) {
    const [complaint, setComplaint] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchComplaint = async () => {
        try {
            const response = await api.get(
                `/complaints/${id}`
            );

            setComplaint(
                response.data?.complaint || null
            );
        } catch (error) {
            console.error(
                "Fetch Complaint Error:",
                error
            );

            toast.error(
                error.response?.data?.message ||
                "Failed to load complaint."
            );
        }
    };

    const fetchComments = async () => {
        try {
            const response = await api.get(
                `/complaints/${id}/comments`
            );

            setComments(
                response.data?.comments || []
            );
        } catch (error) {
            console.error(
                "Fetch Comments Error:",
                error
            );
        }
    };

    const addComment = async (message) => {
        try {
            await api.post(
                `/complaints/${id}/comment`,
                {
                    message,
                }
            );

            toast.success("Comment Added");

            await fetchComments();
        } catch (error) {
            console.error(
                "Add Comment Error:",
                error
            );

            toast.error(
                error.response?.data?.message ||
                "Failed to add comment."
            );
        }
    };

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);

            await Promise.all([
                fetchComplaint(),
                fetchComments(),
            ]);

            setLoading(false);
        };

        loadData();
    }, [id]);

    return {
        complaint,
        comments,
        loading,
        addComment,
        fetchComplaint,
        fetchComments,
    };
}

export default useComplaintDetails;