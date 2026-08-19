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
        if (!message.trim()) {
            return;
        }

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
                    py-8
                    sm:px-6
                    sm:py-10
                "
            >
                <main className="mx-auto max-w-5xl">
                    <div className="space-y-6 animate-pulse">
                        <div className="h-6 w-24 rounded-xl bg-slate-200" />

                        <div className="h-16 w-64 rounded-2xl bg-white/80" />

                        <div className="h-80 rounded-3xl bg-white/90" />

                        <div className="h-64 rounded-3xl bg-white/90" />

                        <div className="h-72 rounded-3xl bg-white/90" />
                    </div>
                </main>
            </div>
        );
    }

    if (!complaint) {
        return (
            <div
                className="
                    flex
                    min-h-screen
                    items-center
                    justify-center
                    bg-gradient-to-br
                    from-slate-100
                    via-blue-50
                    to-indigo-100
                    px-4
                "
            >
                <div
                    className="
                        w-full
                        max-w-md
                        rounded-3xl
                        border
                        border-white/70
                        bg-white/90
                        p-8
                        text-center
                        shadow-2xl
                        backdrop-blur-xl
                    "
                >
                    <div
                        className="
                            mx-auto
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            bg-indigo-50
                            text-indigo-600
                        "
                    >
                        <MessageSquare size={28} />
                    </div>

                    <h2
                        className="
                            mt-5
                            text-2xl
                            font-extrabold
                            tracking-tight
                            text-slate-800
                        "
                    >
                        Complaint Not Found
                    </h2>

                    <p
                        className="
                            mt-3
                            text-sm
                            leading-6
                            text-slate-500
                        "
                    >
                        The complaint you're looking for does not
                        exist or may have been removed.
                    </p>

                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="
                            mt-6
                            inline-flex
                            items-center
                            gap-2
                            rounded-2xl
                            bg-gradient-to-r
                            from-indigo-600
                            via-purple-600
                            to-blue-600
                            px-5
                            py-3
                            font-semibold
                            text-white
                            shadow-lg
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:shadow-xl
                            active:scale-95
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
                px-4
                py-6
                sm:px-6
                sm:py-10
            "
        >
            <main className="mx-auto max-w-5xl">
                <div className="mb-8">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="
                            mb-5
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            px-2
                            py-2
                            text-sm
                            font-semibold
                            text-slate-600
                            transition-all
                            duration-200
                            hover:-translate-x-0.5
                            hover:text-indigo-600
                        "
                    >
                        <ArrowLeft size={18} />
                        Back
                    </button>

                    <div>
                        <p
                            className="
                                mb-1
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.18em]
                                text-indigo-600
                            "
                        >
                            CampusOne
                        </p>

                        <h1
                            className="
                                text-3xl
                                font-extrabold
                                tracking-tight
                                text-slate-800
                                sm:text-4xl
                            "
                        >
                            Complaint Details
                        </h1>

                        <p
                            className="
                                mt-2
                                max-w-2xl
                                text-sm
                                leading-6
                                text-slate-500
                                sm:text-base
                            "
                        >
                            View complaint information, track progress
                            and communicate with the administration.
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

                <div className="space-y-8">
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
                            rounded-3xl
                            border
                            border-white/70
                            bg-white/90
                            p-5
                            shadow-xl
                            backdrop-blur-xl
                            sm:p-8
                        "
                    >
                        <div
                            className="
                                flex
                                items-start
                                gap-4
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-indigo-50
                                    text-indigo-600
                                "
                            >
                                <MessageSquare size={22} />
                            </div>

                            <div>
                                <h2
                                    className="
                                        text-2xl
                                        font-extrabold
                                        text-slate-800
                                    "
                                >
                                    Discussion
                                </h2>

                                <p
                                    className="
                                        mt-1
                                        text-sm
                                        leading-6
                                        text-slate-500
                                    "
                                >
                                    Communicate with the administration
                                    about this complaint.
                                </p>
                            </div>
                        </div>

                        <div className="mt-7">
                            <CommentForm
                                message={message}
                                setMessage={setMessage}
                                handleComment={handleComment}
                            />
                        </div>

                        <div
                            className="
                                mt-8
                                border-t
                                border-slate-100
                                pt-8
                            "
                        >
                            <CommentList
                                comments={comments}
                            />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default ComplaintDetails;