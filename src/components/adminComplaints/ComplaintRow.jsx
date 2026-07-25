import RoleBadge from "../adminUsers/RoleBadge";
import StatusDropdown from "./StatusDropdown";
import PriorityDropdown from "./PriorityDropdown";
import AssignFaculty from "./AssignFaculty";
import ComplaintActions from "./ComplaintActions";

function ComplaintRow({

    complaint,

    faculties,

    updateComplaintStatus,

    deleteComplaint,

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

            {/* Complaint */}

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

            {/* Student */}

            <td className="px-6 py-5 text-center">

                <div className="space-y-1">

                    <p className="font-medium">

                        {complaint.createdBy?.fullName}

                    </p>

                    <p
                        className="
                            text-xs
                            text-slate-500
                        "
                    >

                        {complaint.createdBy?.email}

                    </p>

                </div>

            </td>

            {/* Category */}

            <td className="px-6 py-5 text-center">

                <RoleBadge role={complaint.category} />

            </td>

            {/* Priority */}

            <td className="px-6 py-5 text-center">

                <PriorityDropdown

                    complaint={complaint}

                    updateComplaintStatus={updateComplaintStatus}

                />

            </td>

            {/* Status */}

            <td className="px-6 py-5 text-center">

                <StatusDropdown

                    complaint={complaint}

                    updateComplaintStatus={updateComplaintStatus}

                />

            </td>

            {/* Faculty */}

            <td className="px-6 py-5 text-center">

                <AssignFaculty

                    complaint={complaint}

                    faculties={faculties}

                    updateComplaintStatus={updateComplaintStatus}

                />

            </td>

            {/* Actions */}

            <td className="px-6 py-5 text-center">

                <ComplaintActions

                    complaint={complaint}

                    deleteComplaint={deleteComplaint}

                />

            </td>

        </tr>

    );

}

export default ComplaintRow;