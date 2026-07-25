import { useState } from "react";
import { Check, ChevronDown, UserRound } from "lucide-react";
import toast from "react-hot-toast";

function AssignFaculty({
    complaint,
    faculties = [],
    updateComplaintStatus,
}) {

    const [updating, setUpdating] = useState(false);

    const currentFacultyId =
        complaint.assignedTo?._id ||
        complaint.assignedTo ||
        "";

    const handleAssign = async (e) => {

        const facultyId = e.target.value;

        try {

            setUpdating(true);

            await updateComplaintStatus(
                complaint._id,
                {
                    status: complaint.status,
                    priority: complaint.priority,
                    dueDate: complaint.dueDate,
                    assignedTo:
                        facultyId || null,
                }
            );

            toast.success(
                facultyId
                    ? "Complaint assigned successfully"
                    : "Faculty assignment removed"
            );

        } catch (error) {

            console.error(
                "Faculty Assignment Error:",
                error
            );

            toast.error(
                "Failed to update faculty assignment"
            );

        } finally {

            setUpdating(false);

        }

    };

    return (

        <div className="relative w-full min-w-[210px]">

            {/* Current Assignment Indicator */}

            <div
                className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    z-10
                    pointer-events-none
                "
            >

                {currentFacultyId ? (

                    <div
                        className="
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-lg
                            bg-indigo-50
                            text-indigo-600
                        "
                    >

                        <Check size={15} />

                    </div>

                ) : (

                    <div
                        className="
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-lg
                            bg-slate-100
                            text-slate-500
                        "
                    >

                        <UserRound size={15} />

                    </div>

                )}

            </div>


            {/* Dropdown */}

            <select

                value={currentFacultyId}

                onChange={handleAssign}

                disabled={
                    updating ||
                    faculties.length === 0
                }

                aria-label="Assign complaint to faculty"

                className="
                    w-full
                    appearance-none
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    py-3
                    pl-12
                    pr-10
                    text-sm
                    font-medium
                    text-slate-700
                    shadow-sm
                    outline-none
                    transition-all
                    duration-300
                    hover:border-indigo-300
                    hover:shadow-md
                    focus:border-indigo-500
                    focus:ring-4
                    focus:ring-indigo-500/10
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                "
            >

                <option value="">

                    {faculties.length === 0
                        ? "No faculty available"
                        : "Unassigned"}

                </option>


                {faculties.map(
                    (faculty) => (

                        <option
                            key={faculty._id}
                            value={faculty._id}
                        >

                            {faculty.fullName}

                        </option>

                    )
                )}

            </select>


            {/* Dropdown Icon */}

            <ChevronDown
                size={17}
                className="
                    pointer-events-none
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                "
            />


            {/* Updating Indicator */}

            {updating && (

                <div
                    className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        rounded-2xl
                        bg-white/70
                        backdrop-blur-sm
                    "
                >

                    <div
                        className="
                            h-5
                            w-5
                            animate-spin
                            rounded-full
                            border-2
                            border-indigo-200
                            border-t-indigo-600
                        "
                    />

                </div>

            )}

        </div>

    );

}

export default AssignFaculty;