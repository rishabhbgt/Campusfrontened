import ComplaintRow from "./ComplaintRow";

function ComplaintTable({
    complaints,
    faculties,
    updateComplaintStatus,
    archiveComplaint,
}) {
    return (
        <div
            className="
                overflow-hidden
                rounded-3xl
                border
                border-white/70
                bg-white/90
                shadow-xl
                backdrop-blur-xl
            "
        >
            <div className="overflow-x-auto">
                <table className="min-w-[1200px] w-full">
                    <thead>
                        <tr
                            className="
                                bg-gradient-to-r
                                from-indigo-600
                                via-purple-600
                                to-blue-600
                                text-white
                            "
                        >
                            <th
                                className="
                                    px-6
                                    py-4
                                    text-left
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                "
                            >
                                Complaint
                            </th>

                            <th
                                className="
                                    px-6
                                    py-4
                                    text-center
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                "
                            >
                                Student
                            </th>

                            <th
                                className="
                                    px-6
                                    py-4
                                    text-center
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                "
                            >
                                Category
                            </th>

                            <th
                                className="
                                    px-6
                                    py-4
                                    text-center
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                "
                            >
                                Priority
                            </th>

                            <th
                                className="
                                    px-6
                                    py-4
                                    text-center
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                "
                            >
                                Status
                            </th>

                            <th
                                className="
                                    px-6
                                    py-4
                                    text-center
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                "
                            >
                                Faculty
                            </th>

                            <th
                                className="
                                    px-6
                                    py-4
                                    text-center
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                "
                            >
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                        {complaints.map((complaint) => (
                            <ComplaintRow
                                key={complaint._id}
                                complaint={complaint}
                                faculties={faculties}
                                updateComplaintStatus={
                                    updateComplaintStatus
                                }
                                archiveComplaint={
                                    archiveComplaint
                                }
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ComplaintTable;