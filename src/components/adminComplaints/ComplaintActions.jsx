import {
    Eye,
    Pencil,
    Archive,
} from "lucide-react";
import { Link } from "react-router-dom";

function ComplaintActions({
    complaint,
    archiveComplaint,
}) {
    const canArchive =
        complaint.status === "Resolved";

    const handleArchive = () => {
        const confirmed = window.confirm(
            "Archive this resolved complaint?"
        );

        if (confirmed) {
            archiveComplaint(
                complaint._id
            );
        }
    };

    return (
        <div
            className="
                flex
                items-center
                justify-center
                gap-2
            "
        >
            <Link
                to={`/complaint/${complaint._id}`}
                title="View Complaint"
                aria-label="View Complaint"
                className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-blue-600
                    hover:text-white
                    hover:shadow-md
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    focus:ring-offset-2
                "
            >
                <Eye size={18} />
            </Link>

            <Link
                to={`/edit-complaint/${complaint._id}`}
                title="Edit Complaint"
                aria-label="Edit Complaint"
                className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-amber-50
                    text-amber-600
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-amber-500
                    hover:text-white
                    hover:shadow-md
                    focus:outline-none
                    focus:ring-2
                    focus:ring-amber-500
                    focus:ring-offset-2
                "
            >
                <Pencil size={18} />
            </Link>

            {canArchive && (
                <button
                    type="button"
                    onClick={handleArchive}
                    title="Archive Complaint"
                    aria-label="Archive Complaint"
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-purple-50
                        text-purple-600
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-purple-600
                        hover:text-white
                        hover:shadow-md
                        focus:outline-none
                        focus:ring-2
                        focus:ring-purple-500
                        focus:ring-offset-2
                    "
                >
                    <Archive size={18} />
                </button>
            )}
        </div>
    );
}

export default ComplaintActions;