import {
    Eye,
    Pencil,
    Archive,
} from "lucide-react";
import { Link } from "react-router-dom";

console.log("NEW ComplaintActions LOADED");

function ComplaintActions({
    complaint,
    archiveComplaint,
}) {
    const canArchive =
        complaint.status === "Resolved";

        console.log(
            "ACTION STATUS:",
            complaint.status,
            "CAN ARCHIVE:",
            canArchive
        );

    return (
        <div className="flex items-center justify-center gap-3">

            <Link
                to={`/complaint/${complaint._id}`}
                className="
                    w-10 h-10 rounded-xl
                    bg-blue-100 text-blue-600
                    flex items-center justify-center
                    hover:bg-blue-600 hover:text-white
                    transition-all duration-300
                "
                title="View Complaint"
            >
                <Eye size={18} />
            </Link>

            <Link
                to={`/edit-complaint/${complaint._id}`}
                className="
                    w-10 h-10 rounded-xl
                    bg-amber-100 text-amber-600
                    flex items-center justify-center
                    hover:bg-amber-500 hover:text-white
                    transition-all duration-300
                "
                title="Edit Complaint"
            >
                <Pencil size={18} />
            </Link>

            {canArchive && (
                <button
                    type="button"
                    onClick={() => {
                        if (
                            window.confirm(
                                "Archive this resolved complaint?"
                            )
                        ) {
                            archiveComplaint(
                                complaint._id
                            );
                        }
                    }}
                    className="
                        w-10 h-10 rounded-xl
                        bg-purple-100 text-purple-600
                        flex items-center justify-center
                        hover:bg-purple-600 hover:text-white
                        transition-all duration-300
                    "
                    title="Archive Complaint"
                >
                    <Archive size={18} />
                </button>
            )}
        </div>
    );
}

export default ComplaintActions;