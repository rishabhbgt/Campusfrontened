import {
    FaUser,
    FaEnvelope,
    FaCalendarAlt,
    FaTag,
    FaFlag,
    FaClock,
} from "react-icons/fa";

function ComplaintInfo({ complaint }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-7 mt-6">

            <h2 className="text-3xl font-bold text-gray-800">
                {complaint.title}
            </h2>

            <p className="text-gray-600 mt-3 leading-7">
                {complaint.description}
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-8">

                <InfoItem
                    icon={<FaTag className="text-blue-600" />}
                    title="Category"
                    value={complaint.category}
                />

                <InfoItem
                    icon={<FaFlag className="text-indigo-600" />}
                    title="Status"
                    value={complaint.status}
                />

                <InfoItem
                    icon={<FaFlag className="text-red-500" />}
                    title="Priority"
                    value={complaint.priority}
                />

                <InfoItem
                    icon={<FaUser className="text-green-600" />}
                    title="Student"
                    value={complaint.createdBy?.fullName}
                />

                <InfoItem
                    icon={<FaEnvelope className="text-purple-600" />}
                    title="Email"
                    value={complaint.createdBy?.email}
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
                    value={new Date(
                        complaint.createdAt
                    ).toLocaleString()}
                />

                <InfoItem
                    icon={<FaClock className="text-pink-600" />}
                    title="Updated"
                    value={new Date(
                        complaint.updatedAt
                    ).toLocaleString()}
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
        <div className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">

            <div className="text-2xl">
                {icon}
            </div>

            <div>

                <p className="text-sm text-gray-500">
                    {title}
                </p>

                <p className="font-semibold text-gray-800 break-all">
                    {value}
                </p>

            </div>

        </div>
    );
}

export default ComplaintInfo;