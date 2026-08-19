import RoleBadge from "../adminUsers/RoleBadge";
import StatusDropdown from "./StatusDropdown";
import PriorityDropdown from "./PriorityDropdown";
import AssignFaculty from "./AssignFaculty";
import ComplaintActions from "./ComplaintActions";

function ComplaintRow({
    complaint,
    faculties,
    updateComplaintStatus,
    archiveComplaint,
}) {
    return (
        <tr
            className="
                border-b
                border-slate-100
                bg-white
                transition-all
                duration-200
                hover:bg-indigo-50/60
            "
        >
            <td className="px-6 py-5 align-top">
                <div className="max-w-sm space-y-1.5">
                    <h3
                        className="
                            line-clamp-2
                            text-sm
                            font-bold
                            leading-5
                            text-slate-800
                        "
                    >
                        {complaint.title}
                    </h3>

                    <p
                        className="
                            line-clamp-2
                            text-sm
                            leading-5
                            text-slate-500
                        "
                    >
                        {complaint.description}
                    </p>
                </div>
            </td>

            <td className="px-6 py-5 text-center align-top">
                <div className="min-w-0">
                    <p
                        className="
                            truncate
                            text-sm
                            font-semibold
                            text-slate-700
                        "
                    >
                        {complaint.createdBy?.fullName ||
                            "Unknown Student"}
                    </p>

                    <p
                        className="
                            mt-1
                            truncate
                            text-xs
                            text-slate-400
                        "
                    >
                        {complaint.createdBy?.email ||
                            "No email"}
                    </p>
                </div>
            </td>

            <td className="px-6 py-5 text-center align-top">
                <RoleBadge
                    role={complaint.category}
                />
            </td>

            <td className="px-6 py-5 text-center align-top">
                <PriorityDropdown
                    complaint={complaint}
                    updateComplaintStatus={
                        updateComplaintStatus
                    }
                />
            </td>

            <td className="px-6 py-5 text-center align-top">
                <StatusDropdown
                    complaint={complaint}
                    updateComplaintStatus={
                        updateComplaintStatus
                    }
                />
            </td>

            <td className="px-6 py-5 text-center align-top">
                <AssignFaculty
                    complaint={complaint}
                    faculties={faculties}
                    updateComplaintStatus={
                        updateComplaintStatus
                    }
                />
            </td>

            <td className="px-6 py-5 text-center align-top">
                <ComplaintActions
                    complaint={complaint}
                    archiveComplaint={
                        archiveComplaint
                    }
                />
            </td>
        </tr>
    );
}

export default ComplaintRow;