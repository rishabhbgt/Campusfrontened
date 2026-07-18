import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

function useComplaintDetails(id) {

    const [complaint, setComplaint] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem("token");

    const fetchComplaint = async () => {

        try {

            const response = await api.get(
                `/complaints/${id}`,
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            setComplaint(response.data.complaint);

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Failed to load complaint."
            );

        }

    };

    const fetchComments = async () => {

        try {

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

    const addComment = async (message) => {

        try {

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

            fetchComments();

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Failed to add comment."
            );

        }

    };

    useEffect(() => {

        const loadData = async () => {

            setLoading(true);

            await fetchComplaint();

            await fetchComments();

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