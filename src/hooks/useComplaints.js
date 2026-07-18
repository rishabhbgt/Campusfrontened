import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

function useComplaints() {

    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchComplaints = async () => {

        try {

            setLoading(true);

            const token = localStorage.getItem("token");

            const response = await api.get("/complaints/my", {
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

    const deleteComplaint = async (id) => {

        try {

            const token = localStorage.getItem("token");

            if (!window.confirm("Delete this complaint?")) return;

            await api.delete(`/complaints/${id}`, {
                headers: {
                    Authorization: token,
                },
            });

            toast.success("Complaint Deleted");

            fetchComplaints();

        } catch (error) {

            toast.error(error.response?.data?.message || "Delete Failed");

        }

    };

    useEffect(() => {

        fetchComplaints();

    }, []);

    return {

        complaints,
        loading,
        fetchComplaints,
        deleteComplaint,

    };

}

export default useComplaints;