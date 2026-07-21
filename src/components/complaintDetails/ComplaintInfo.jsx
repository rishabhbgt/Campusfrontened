import {
    FaUser,
    FaEnvelope,
    FaCalendarAlt,
    FaTag,
    FaFlag,
    FaClock,
} from "react-icons/fa";

function ComplaintInfo({ complaint }) {

    const getStatusStyle = (status) => {

        switch (status) {

            case "Pending":
                return "bg-yellow-100 text-yellow-700 border-yellow-200";

            case "In Progress":
                return "bg-blue-100 text-blue-700 border-blue-200";

            case "Resolved":
                return "bg-green-100 text-green-700 border-green-200";

            case "Rejected":
                return "bg-red-100 text-red-700 border-red-200";

            default:
                return "bg-gray-100 text-gray-700 border-gray-200";

        }

    };

    const getPriorityStyle = (priority) => {

        switch (priority) {

            case "High":
                return "bg-red-100 text-red-700 border-red-200";

            case "Medium":
                return "bg-yellow-100 text-yellow-700 border-yellow-200";

            case "Low":
                return "bg-green-100 text-green-700 border-green-200";

            default:
                return "bg-gray-100 text-gray-700 border-gray-200";

        }

    };

    return (

        <div
            className="
                bg-white
                rounded-3xl
                shadow-xl
                border
                border-slate-200
                p-6
                sm:p-8
                mt-6
            "
        >

            {/* TITLE */}

            <h2
                className="
                    text-2xl
                    sm:text-3xl
                    font-extrabold
                    text-slate-800
                    tracking-tight
                "
            >
                {complaint.title}
            </h2>


            {/* DESCRIPTION */}

            <p
                className="
                    text-slate-600
                    mt-4
                    leading-7
                    text-base
                    sm:text-lg
                "
            >
                {complaint.description}
            </p>


            {/* STATUS + PRIORITY */}

            <div className="flex flex-wrap gap-3 mt-6">

                <span
                    className={`
                        px-4
                        py-2
                        rounded-full
                        border
                        text-sm
                        font-semibold
                        ${getStatusStyle(complaint.status)}
                    `}
                >
                    Status: {complaint.status}
                </span>

                <span
                    className={`
                        px-4
                        py-2
                        rounded-full
                        border
                        text-sm
                        font-semibold
                        ${getPriorityStyle(complaint.priority)}
                    `}
                >
                    Priority: {complaint.priority || "Not Set"}
                </span>

            </div>


            {/* INFORMATION GRID */}

            <div
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-4
                    mt-8
                "
            >

                <InfoItem
                    icon={<FaTag className="text-blue-600" />}
                    title="Category"
                    value={complaint.category}
                />

                <InfoItem
                    icon={<FaUser className="text-green-600" />}
                    title="Student"
                    value={complaint.createdBy?.fullName || "N/A"}
                />

                <InfoItem
                    icon={<FaEnvelope className="text-purple-600" />}
                    title="Email"
                    value={complaint.createdBy?.email || "N/A"}
                />

                <InfoItem
                    icon={<FaCalendarAlt className="text-orange-500" />}
                    title="Due Date"
                    value={
                        complaint.dueDate
                            ? new Date(
                                complaint.dueDate
                            ).toLocaleDateString()
                            : "Not Set"
                    }
                />

                <InfoItem
                    icon={<FaClock className="text-cyan-600" />}
                    title="Created"
                    value={
                        complaint.createdAt
                            ? new Date(
                                complaint.createdAt
                            ).toLocaleString()
                            : "N/A"
                    }
                />

                <InfoItem
                    icon={<FaClock className="text-pink-600" />}
                    title="Last Updated"
                    value={
                        complaint.updatedAt
                            ? new Date(
                                complaint.updatedAt
                            ).toLocaleString()
                            : "N/A"
                    }
                />

            </div>

        </div>

    );

}


function InfoItem({
    icon,
    title,
    value,
}) {

    return (

        <div
            className="
                flex
                items-start
                gap-4
                bg-slate-50
                border
                border-slate-200
                rounded-2xl
                p-4
                hover:bg-blue-50
                hover:border-blue-200
                transition-all
                duration-300
            "
        >

            <div
                className="
                    w-10
                    h-10
                    rounded-xl
                    bg-white
                    shadow-sm
                    flex
                    items-center
                    justify-center
                    shrink-0
                "
            >
                {icon}
            </div>

            <div className="min-w-0">

                <p className="text-sm text-slate-500">
                    {title}
                </p>

                <p className="font-semibold text-slate-800 break-all mt-1">
                    {value}
                </p>

            </div>

        </div>

    );

}

export default ComplaintInfo;

