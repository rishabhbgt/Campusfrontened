import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

function useComplaintDetails(id) {

    const [
        complaint,
        setComplaint,
    ] = useState(null);


    const [
        comments,
        setComments,
    ] = useState([]);


    const [
        loading,
        setLoading,
    ] = useState(true);


    const fetchComplaint = async () => {

        try {

            const token =
                localStorage.getItem("token");


            const response =
                await api.get(
                    `/complaints/${id}`,
                    {
                        headers: {
                            Authorization:
                                token,
                        },
                    }
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

            const token =
                localStorage.getItem("token");


            const response =
                await api.get(
                    `/complaints/${id}/comments`,
                    {
                        headers: {
                            Authorization:
                                token,
                        },
                    }
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


    const addComment = async (
        message
    ) => {

        try {

            const token =
                localStorage.getItem("token");


            await api.post(

                `/complaints/${id}/comment`,

                {
                    message,
                },

                {
                    headers: {
                        Authorization:
                            token,
                    },
                }

            );


            toast.success(
                "Comment Added"
            );


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


            // Load complaint + comments together
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