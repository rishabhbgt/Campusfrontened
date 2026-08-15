import {
    useCallback,
    useEffect,
    useState,
} from "react";

import api from "../services/api";
import toast from "react-hot-toast";


function useComplaints() {

    const [
        complaints,
        setComplaints,
    ] = useState([]);


    const [
        loading,
        setLoading,
    ] = useState(true);

    const fetchComplaints =
        useCallback(async () => {

            try {

                setLoading(true);


                const token =
                    localStorage.getItem(
                        "token"
                    );


                if (!token) {

                    setComplaints([]);

                    return;

                }


                const response =
                    await api.get(
                        "/complaints/my",
                        {
                            headers: {
                                Authorization:
                                    token,
                            },
                        }
                    );


                setComplaints(
                    response.data?.complaints ||
                    []
                );


            } catch (error) {

                console.error(
                    "Fetch Complaints Error:",
                    error
                );


                toast.error(
                    error.response
                        ?.data
                        ?.message ||
                    "Failed to load complaints"
                );


                // Keep UI stable
                setComplaints([]);

            } finally {

                setLoading(false);

            }

        }, []);

    const deleteComplaint =
        useCallback(async (id) => {

            try {

                const confirmed =
                    window.confirm(
                        "Delete this complaint?"
                    );


                if (!confirmed) {
                    return;
                }


                const token =
                    localStorage.getItem(
                        "token"
                    );


                if (!token) {

                    toast.error(
                        "Please login again"
                    );

                    return;

                }


                await api.delete(

                    `/complaints/${id}`,

                    {
                        headers: {
                            Authorization:
                                token,
                        },
                    }

                );


                toast.success(
                    "Complaint Deleted"
                );


                await fetchComplaints();


            } catch (error) {

                console.error(
                    "Delete Complaint Error:",
                    error
                );


                toast.error(
                    error.response
                        ?.data
                        ?.message ||
                    "Delete Failed"
                );

            }

        }, [
            fetchComplaints,
        ]);

    useEffect(() => {

        fetchComplaints();

    }, [
        fetchComplaints,
    ]);


    return {

        complaints,

        loading,

        fetchComplaints,

        deleteComplaint,

    };

}


export default useComplaints;