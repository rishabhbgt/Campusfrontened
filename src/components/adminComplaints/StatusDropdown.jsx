function StatusDropdown({
    complaint,
    updateComplaintStatus,
}) {
    const statusOptions = [
        "Pending",
        "In Progress",
        "Resolved",
    ];

    return (
        <select
            value={complaint.status}
            onChange={(e) =>
                updateComplaintStatus(
                    complaint._id,
                    {
                        status: e.target.value,
                        priority: complaint.priority,
                        dueDate:
                            complaint.dueDate || null,
                        assignedTo:
                            complaint.assignedTo?._id ||
                            complaint.assignedTo ||
                            null,
                    }
                )
            }
            className="
                rounded-xl
                border
                border-slate-300
                bg-white
                px-4
                py-2
                text-sm
                font-medium
                shadow-sm
                outline-none
                transition-all
                duration-300
                hover:border-indigo-500
                focus:ring-2
                focus:ring-indigo-300
            "
        >
            {statusOptions.map((status) => (
                <option
                    key={status}
                    value={status}
                >
                    {status}
                </option>
            ))}
        </select>
    );
}
export default StatusDropdown;