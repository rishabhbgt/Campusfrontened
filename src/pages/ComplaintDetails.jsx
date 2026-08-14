import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    ArrowLeft,
    MessageSquare,
} from "lucide-react";

import ComplaintImage from "../components/complaintDetails/ComplaintImage";
import ComplaintInfo from "../components/complaintDetails/ComplaintInfo";
import ComplaintTimeline from "../components/complaintDetails/ComplaintTimeline";
import OverdueAlert from "../components/complaintDetails/OverdueAlert";
import CommentForm from "../components/complaintDetails/CommentForm";
import CommentList from "../components/complaintDetails/CommentList";

import useComplaintDetails from "../hooks/useComplaintDetails";

function ComplaintDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

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

            <div
                className="
                    min-h-screen
                    bg-gradient-to-br
                    from-slate-100
                    via-blue-50
                    to-indigo-100
                    px-4
                    py-10
                "
            >

                <div className="max-w-5xl mx-auto">

                    <div className="animate-pulse space-y-6">

                        <div className="h-10 w-64 bg-white rounded-xl" />

                        <div className="h-80 bg-white rounded-3xl" />

                        <div className="h-64 bg-white rounded-3xl" />

                    </div>

                </div>

            </div>

        );

    }

    if (!complaint) {

        return (

            <div
                className="
                    min-h-screen
                    bg-gradient-to-br
                    from-slate-100
                    via-blue-50
                    to-indigo-100
                    flex
                    items-center
                    justify-center
                    px-4
                "
            >

                <div
                    className="
                        bg-white
                        rounded-3xl
                        shadow-xl
                        border
                        border-slate-200
                        p-10
                        text-center
                        max-w-md
                        w-full
                    "
                >

                    <h2
                        className="
                            text-2xl
                            font-bold
                            text-slate-800
                        "
                    >
                        Complaint Not Found
                    </h2>

                    <p
                        className="
                            mt-2
                            text-slate-500
                        "
                    >
                        The complaint you're looking for
                        does not exist or may have been removed.
                    </p>

                    <button
                        onClick={() => navigate(-1)}
                        className="
                            mt-6
                            inline-flex
                            items-center
                            gap-2
                            px-5
                            py-3
                            rounded-2xl
                            bg-gradient-to-r
                            from-blue-600
                            to-indigo-600
                            text-white
                            font-semibold
                            shadow-lg
                            hover:shadow-xl
                            hover:scale-[1.02]
                            transition-all
                        "
                    >

                        <ArrowLeft size={18} />

                        Go Back

                    </button>

                </div>

            </div>

        );

    }


    return (

        <div
            className="
                min-h-screen
                bg-gradient-to-br
                from-slate-100
                via-blue-50
                to-indigo-100
                py-6
                sm:py-10
                px-4
                sm:px-6
            "
        >

            <main className="max-w-5xl mx-auto">

                <div className="mb-8">

                    <button
                        onClick={() => navigate(-1)}
                        className="
                            inline-flex
                            items-center
                            gap-2
                            text-slate-600
                            hover:text-blue-600
                            font-medium
                            transition
                            mb-5
                        "
                    >

                        <ArrowLeft size={19} />

                        Back

                    </button>


                    <div>

                        <h1
                            className="
                                text-3xl
                                sm:text-4xl
                                font-extrabold
                                text-slate-800
                                tracking-tight
                            "
                        >
                            Complaint Details
                        </h1>

                        <p
                            className="
                                mt-2
                                text-sm
                                sm:text-base
                                text-slate-500
                            "
                        >
                            View complaint information,
                            track progress and join the discussion.
                        </p>

                    </div>

                </div>

                {complaint.image && (

                    <div className="mb-8">

                        <ComplaintImage
                            image={complaint.image}
                        />

                    </div>

                )}

                <ComplaintInfo
                    complaint={complaint}
                />

                <ComplaintTimeline
                    history={complaint.history || []}
                />

                <OverdueAlert
                    complaint={complaint}
                />

                <section
                    className="
                        mt-8
                        bg-white
                        rounded-3xl
                        shadow-xl
                        border
                        border-slate-200
                        p-5
                        sm:p-8
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-3
                            mb-6
                        "
                    >

                        <div
                            className="
                                w-11
                                h-11
                                rounded-2xl
                                bg-blue-100
                                text-blue-600
                                flex
                                items-center
                                justify-center
                            "
                        >

                            <MessageSquare size={22} />

                        </div>


                        <div>

                            <h2
                                className="
                                    text-2xl
                                    font-bold
                                    text-slate-800
                                "
                            >
                                Discussion
                            </h2>

                            <p
                                className="
                                    text-sm
                                    text-slate-500
                                    mt-1
                                "
                            >
                                Communicate with the administration
                                about this complaint.
                            </p>

                        </div>

                    </div>


                    <CommentForm
                        message={message}
                        setMessage={setMessage}
                        handleComment={handleComment}
                    />


                    <div
                        className="
                            mt-8
                            border-t
                            border-slate-200
                            pt-8
                        "
                    >

                        <CommentList
                            comments={comments}
                        />

                    </div>

                </section>

            </main>

        </div>

    );

}

export default ComplaintDetails;
