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
                hover:bg-indigo-50
                transition-all
                duration-300
            "
        >
            <td className="px-6 py-5">
                <div className="space-y-1">
                    <h3 className="font-semibold text-slate-800">
                        {complaint.title}
                    </h3>

                    <p
                        className="
                            text-sm
                            text-slate-500
                            line-clamp-2
                            max-w-xs
                        "
                    >
                        {complaint.description}
                    </p>
                </div>
            </td>

            <td className="px-6 py-5 text-center">
                <div className="space-y-1">
                    <p className="font-medium">
                        {complaint.createdBy?.fullName}
                    </p>

                    <p className="text-xs text-slate-500">
                        {complaint.createdBy?.email}
                    </p>
                </div>
            </td>

            <td className="px-6 py-5 text-center">
                <RoleBadge role={complaint.category} />
            </td>

            <td className="px-6 py-5 text-center">
                <PriorityDropdown
                    complaint={complaint}
                    updateComplaintStatus={
                        updateComplaintStatus
                    }
                />
            </td>

            <td className="px-6 py-5 text-center">
                <StatusDropdown
                    complaint={complaint}
                    updateComplaintStatus={
                        updateComplaintStatus
                    }
                />
            </td>

            <td className="px-6 py-5 text-center">
                <AssignFaculty
                    complaint={complaint}
                    faculties={faculties}
                    updateComplaintStatus={
                        updateComplaintStatus
                    }
                />
            </td>

            <td className="px-6 py-5 text-center">
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