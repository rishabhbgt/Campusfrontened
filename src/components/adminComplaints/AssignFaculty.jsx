function AssignFaculty({

    complaint,

    faculties,

    updateComplaintStatus,

}) {

    return (

        <select

            value={complaint.assignedTo?._id || ""}

            onChange={(e) =>

                updateComplaintStatus(

                    complaint._id,

                    {

                        status: complaint.status,

                        priority: complaint.priority,

                        assignedTo: e.target.value,

                    }

                )

            }

            className="
                w-44
                px-4
                py-2
                rounded-xl
                border
                border-slate-300
                bg-white
                text-sm
                shadow-sm
                outline-none
                transition-all
                duration-300
                hover:border-indigo-500
                focus:ring-2
                focus:ring-indigo-300
            "

        >

            <option value="">
                Assign Faculty
            </option>

            {faculties.map((faculty) => (

                <option

                    key={faculty._id}

                    value={faculty._id}

                >

                    {faculty.fullName}

                </option>

            ))}

        </select>

    );

}

export default AssignFaculty;