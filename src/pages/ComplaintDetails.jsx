import { useState } from "react";
import { useParams } from "react-router-dom";

import ComplaintImage from "../components/complaintDetails/ComplaintImage";
import ComplaintInfo from "../components/complaintDetails/ComplaintInfo";
import ComplaintTimeline from "../components/complaintDetails/ComplaintTimeline";
import OverdueAlert from "../components/complaintDetails/OverdueAlert";
import CommentForm from "../components/complaintDetails/CommentForm";
import CommentList from "../components/complaintDetails/CommentList";

import useComplaintDetails from "../hooks/useComplaintDetails";

function ComplaintDetails() {

    const { id } = useParams();

    const [message, setMessage] = useState("");

    const {
        complaint,
        comments,
        loading,
        addComment,
    } = useComplaintDetails(id);

    const handleComment = async () => {

        if (!message.trim()) return;

        await addComment(message);

        setMessage("");

    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-2xl font-semibold">
                    Loading...
                </h2>
            </div>
        );
    }

    if (!complaint) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h2 className="text-2xl font-semibold text-red-600">
                    Complaint Not Found
                </h2>
            </div>
        );
    }

    return (

        <div className="min-h-screen bg-gray-100 flex justify-center p-8">

            <div className="bg-white shadow-xl rounded-xl p-8 max-w-3xl w-full">

                <h1 className="text-3xl font-bold text-blue-600 mb-6">
                    Complaint Details
                </h1>

                <ComplaintImage image={complaint.image} />

                <ComplaintInfo complaint={complaint} />

                <ComplaintTimeline status={complaint.status} />

                <OverdueAlert complaint={complaint} />

                <hr className="my-8" />

                <CommentForm
                    message={message}
                    setMessage={setMessage}
                    handleComment={handleComment}
                />

                <CommentList comments={comments} />

            </div>

        </div>

    );
}

export default ComplaintDetails;