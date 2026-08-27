import { useState } from "react";
import RoleBadge from "../adminUsers/RoleBadge";
import StatusDropdown from "./StatusDropdown";
import PriorityDropdown from "./PriorityDropdown";
import AssignFaculty from "./AssignFaculty";
import ComplaintActions from "./ComplaintActions";
import toast from "react-hot-toast";

function ComplaintRow({
    complaint,
    faculties,
    updateComplaintStatus,
    archiveComplaint,
}) {
    const [updatingDueDate, setUpdatingDueDate] =
        useState(false);

    const formatDateForInput = (date) => {
        if (!date) {
            return "";
        }

        const parsedDate = new Date(date);

        if (Number.isNaN(parsedDate.getTime())) {
            return "";
        }

        const year = parsedDate.getFullYear();
        const month = String(
            parsedDate.getMonth() + 1
        ).padStart(2, "0");
        const day = String(
            parsedDate.getDate()
        ).padStart(2, "0");

        return `${year}-${month}-${day}`;
    };

    const handleDueDateChange = async (e) => {
        const value = e.target.value;

        try {
            setUpdatingDueDate(true);

            await updateComplaintStatus(
                complaint._id,
                {
                    status: complaint.status,
                    priority: complaint.priority,
                    dueDate: value || null,
                    assignedTo:
                        complaint.assignedTo?._id ||
                        complaint.assignedTo ||
                        null,
                }
            );

            toast.success(
                value
                    ? "Due date updated"
                    : "Due date removed"
            );
        } catch (error) {
            console.error(
                "Due Date Update Error:",
                error
            );

            toast.error(
                "Failed to update due date"
            );
        } finally {
            setUpdatingDueDate(false);
        }
    };

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

            {/* ================= DUE DATE ================= */}
            <td className="px-6 py-5 text-center align-top">
                <div className="flex flex-col items-center gap-2">
                    <input
                        type="date"
                        value={formatDateForInput(
                            complaint.dueDate
                        )}
                        onChange={
                            handleDueDateChange
                        }
                        disabled={updatingDueDate}
                        aria-label="Set complaint due date"
                        className="
                            w-[155px]
                            rounded-xl
                            border
                            border-slate-200
                            bg-white
                            px-3
                            py-2.5
                            text-sm
                            font-medium
                            text-slate-700
                            shadow-sm
                            outline-none
                            transition-all
                            duration-300
                            hover:border-indigo-300
                            focus:border-indigo-500
                            focus:ring-4
                            focus:ring-indigo-500/10
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                        "
                    />

                    {complaint.dueDate && (
                        <span
                            className={`
                                rounded-full
                                px-2.5
                                py-1
                                text-[11px]
                                font-semibold
                                ${
                                    new Date(
                                        complaint.dueDate
                                    ) < new Date() &&
                                    complaint.status !==
                                        "Resolved"
                                        ? "bg-red-50 text-red-600"
                                        : "bg-indigo-50 text-indigo-600"
                                }
                            `}
                        >
                            {new Date(
                                complaint.dueDate
                            ) < new Date() &&
                            complaint.status !==
                                "Resolved"
                                ? "Overdue"
                                : "Scheduled"}
                        </span>
                    )}
                </div>
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
