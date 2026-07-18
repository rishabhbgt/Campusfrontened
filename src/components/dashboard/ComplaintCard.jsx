import { useNavigate } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

function ComplaintCard({ complaint, deleteComplaint }) {

    const navigate = useNavigate();

    console.log("Complaint Image:", complaint.image);

    const [showPreview, setShowPreview] = useState(false);

    const getStatusColor = (status) => {

        switch (status) {

            case "Pending":
                return "bg-yellow-100 text-yellow-700";

            case "In Progress":
                return "bg-blue-100 text-blue-700";

            case "Resolved":
                return "bg-green-100 text-green-700";

            case "Rejected":
                return "bg-red-100 text-red-700";

            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    return (

<div
className="
bg-white/80
backdrop-blur-lg
rounded-3xl
overflow-hidden
shadow-lg
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
border
border-gray-200
"
>

    {complaint.image && (
        <img
            src={complaint.image}
            alt="Complaint"
            onClick={() => setShowPreview(true)}
            className="
                w-full
                h-56
                object-cover
                cursor-pointer
                hover:scale-105
                transition
            "
        />
    )}

    <div className="p-6">

        <div className="flex justify-between items-start">

            <h2 className="text-xl font-bold text-gray-800">
                {complaint.title}
            </h2>

            <span
    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(complaint.status)}`}
>

                {complaint.status}

            </span>

        </div>

        <p className="text-gray-600 mt-4 line-clamp-3">

            {complaint.description}

        </p>

        <div className="mt-5 space-y-2 text-sm text-gray-500">

            <div className="flex items-center gap-2">

                <MdCategory />

                {complaint.category}

            </div>

            <div className="flex items-center gap-2">

                <FaRegCalendarAlt />

                {new Date(
                    complaint.createdAt
                ).toLocaleDateString()}

            </div>

        </div>

        <div className="grid grid-cols-3 gap-2 mt-6">

            <button
                onClick={() => navigate(`/complaint/${complaint._id}`)}
                className="
                flex items-center justify-center gap-2
                bg-blue-600
                hover:bg-blue-700
                text-white
                rounded-xl
                py-2.5
                font-medium
                transition-all
                duration-300
                "
            >
                <Eye size={18} />
                View
            </button>


            <button
                onClick={() => navigate(`/edit-complaint/${complaint._id}`)}
                className="
                flex items-center justify-center gap-2
                bg-yellow-500
                hover:bg-yellow-600
                text-white
                rounded-xl
                py-2.5
                font-medium
                transition-all
                duration-300
                "
            >
                <Pencil size={18} />
                Edit
            </button>

            <button
                onClick={() => deleteComplaint(complaint._id)}
                className="
                flex items-center justify-center gap-2
                bg-red-500
                hover:bg-red-600
                text-white
                rounded-xl
                py-2.5
                font-medium
                transition-all
                duration-300
                "
            >
                <Trash2 size={18} />
                Delete
            </button>

        </div>

    </div>

        {showPreview && (
    <div
        onClick={() => setShowPreview(false)}
        className="
            fixed
            inset-0
            bg-black/80
            flex
            items-center
            justify-center
            z-50
            p-5
        "
    >

        <button
            onClick={() => setShowPreview(false)}
            className="
                absolute
                top-5
                right-5
                text-white
                text-5xl
            "
        >
            ×
        </button>

        <img
            src={complaint.image}
            alt="Complaint"
            className="
                max-w-[90vw]
                max-h-[90vh]
                rounded-xl
            "
            onClick={(e) => e.stopPropagation()}
        />

    </div>
)}
</div>

);

}

export default ComplaintCard;