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

    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-10 px-6">

        <div className="max-w-5xl mx-auto">

            {/* Page Header */}
            <div className="mb-8">

                <h1 className="text-4xl font-bold text-slate-800">
                    Complaint Details
                </h1>

                <p className="text-slate-500 mt-2">
                    View complaint status, progress timeline and discussion.
                </p>

            </div>

            <div
                className="
                bg-white/80
                backdrop-blur-lg
                rounded-3xl
                shadow-2xl
                border
                border-white/40
                overflow-hidden
                "
            >

                <ComplaintImage image={complaint.image} />

                <div className="p-8">

                    <ComplaintInfo complaint={complaint} />

                    <div className="mt-8">
                        <ComplaintTimeline
                            status={complaint.status}
                        />
                    </div>

                    <div className="mt-8">
                        <OverdueAlert complaint={complaint} />
                    </div>

                    <div className="my-10 border-t"></div>

                    <CommentForm
                        message={message}
                        setMessage={setMessage}
                        handleComment={handleComment}
                    />

                    <div className="mt-8">

                        <CommentList
                            comments={comments}
                        />

                    </div>

                </div>

            </div>

        </div>

    </div>

);
}

export default ComplaintDetails;