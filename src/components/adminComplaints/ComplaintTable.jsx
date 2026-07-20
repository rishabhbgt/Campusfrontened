import ComplaintRow from "./ComplaintRow";

function ComplaintTable({

    complaints,

    faculties,

    updateComplaintStatus,

}) {

    return (

        <div
            className="
                overflow-x-auto
                bg-white
                rounded-3xl
                shadow-xl
                border
                border-slate-200
            "
        >

            <table className="min-w-full">

                <thead
                    className="
                        bg-gradient-to-r
                        from-indigo-600
                        via-purple-600
                        to-blue-600
                        text-white
                    "
                >

                    <tr>

                        <th className="px-6 py-5 text-left font-semibold">
                            Complaint
                        </th>

                        <th className="px-6 py-5 text-center font-semibold">
                            Student
                        </th>

                        <th className="px-6 py-5 text-center font-semibold">
                            Category
                        </th>

                        <th className="px-6 py-5 text-center font-semibold">
                            Priority
                        </th>

                        <th className="px-6 py-5 text-center font-semibold">
                            Status
                        </th>

                        <th className="px-6 py-5 text-center font-semibold">
                            Faculty
                        </th>

                        <th className="px-6 py-5 text-center font-semibold">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {complaints.map((complaint) => (

                        <ComplaintRow

                            key={complaint._id}

                            complaint={complaint}

                            faculties={faculties}

                            updateComplaintStatus={updateComplaintStatus}

                        />

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default ComplaintTable;