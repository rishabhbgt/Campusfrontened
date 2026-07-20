function StatusDropdown({

    complaint,

    updateComplaintStatus,

}) {

    const statusOptions = [

        "Pending",

        "In Progress",

        "Resolved",

        "Rejected",

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

                        assignedTo: complaint.assignedTo?._id,

                    }

                )

            }

            className="
                px-4
                py-2
                rounded-xl
                border
                border-slate-300
                bg-white
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