import { useNavigate } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import {
Eye,
Pencil,
Trash2,
X,
} from "lucide-react";
import { useState } from "react";

function ComplaintCard({
complaint,
deleteComplaint,
}) {

const navigate = useNavigate();

const [showPreview, setShowPreview] =
    useState(false);

const getStatusColor = (status) => {

    switch (status) {

        case "Pending":
            return `
                bg-yellow-50
                text-yellow-700
                border-yellow-200
            `;

        case "In Progress":
            return `
                bg-blue-50
                text-blue-700
                border-blue-200
            `;

        case "Resolved":
            return `
                bg-green-50
                text-green-700
                border-green-200
            `;

        case "Rejected":
            return `
                bg-red-50
                text-red-700
                border-red-200
            `;

        default:
            return `
                bg-slate-50
                text-slate-700
                border-slate-200
            `;
    }

};


return (

    <>

        <article
            className="
                group
                bg-white/80
                backdrop-blur-xl
                rounded-3xl
                overflow-hidden
                border
                border-white/60
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-1
                transition-all
                duration-300
                flex
                flex-col
            "
        >

            {complaint.image && (

                <div
                    className="
                        relative
                        overflow-hidden
                        cursor-pointer
                    "
                    onClick={() =>
                        setShowPreview(true)
                    }
                >

                    <img
                        src={complaint.image}
                        alt={complaint.title}
                        className="
                            w-full
                            h-52
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-105
                        "
                    />

                    <div
                        className="
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/40
                            via-transparent
                            to-transparent
                            opacity-0
                            group-hover:opacity-100
                            transition-opacity
                            duration-300
                        "
                    />

                    <div
                        className="
                            absolute
                            bottom-3
                            right-3
                            bg-black/60
                            backdrop-blur-md
                            text-white
                            px-3
                            py-1.5
                            rounded-xl
                            text-xs
                            font-medium
                            opacity-0
                            group-hover:opacity-100
                            transition-all
                            duration-300
                        "
                    >
                        Click to preview
                    </div>

                </div>

            )}

            <div
                className="
                    p-5
                    sm:p-6
                    flex
                    flex-col
                    flex-1
                "
            >

                <div
                    className="
                        flex
                        items-start
                        justify-between
                        gap-3
                    "
                >

                    <h2
                        className="
                            text-lg
                            sm:text-xl
                            font-bold
                            text-slate-800
                            line-clamp-2
                        "
                    >
                        {complaint.title}
                    </h2>


                    <span
                        className={`
                            shrink-0
                            px-3
                            py-1.5
                            rounded-full
                            border
                            text-xs
                            font-semibold
                            whitespace-nowrap
                            ${getStatusColor(
                                complaint.status
                            )}
                        `}
                    >
                        {complaint.status}
                    </span>

                </div>

                <p
                    className="
                        text-slate-500
                        text-sm
                        leading-6
                        mt-4
                        line-clamp-3
                    "
                >
                    {complaint.description}
                </p>

                <div
                    className="
                        mt-5
                        pt-4
                        border-t
                        border-slate-100
                        space-y-3
                        text-sm
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-3
                            text-slate-500
                        "
                    >

                        <div
                            className="
                                w-9
                                h-9
                                rounded-xl
                                bg-indigo-50
                                flex
                                items-center
                                justify-center
                                text-indigo-600
                                shrink-0
                            "
                        >
                            <MdCategory
                                size={19}
                            />
                        </div>

                        <div>

                            <p
                                className="
                                    text-xs
                                    text-slate-400
                                "
                            >
                                Category
                            </p>

                            <p
                                className="
                                    font-medium
                                    text-slate-700
                                "
                            >
                                {complaint.category}
                            </p>

                        </div>

                    </div>

                    <div
                        className="
                            flex
                            items-center
                            gap-3
                            text-slate-500
                        "
                    >

                        <div
                            className="
                                w-9
                                h-9
                                rounded-xl
                                bg-blue-50
                                flex
                                items-center
                                justify-center
                                text-blue-600
                                shrink-0
                            "
                        >
                            <FaRegCalendarAlt
                                size={17}
                            />
                        </div>

                        <div>

                            <p
                                className="
                                    text-xs
                                    text-slate-400
                                "
                            >
                                Submitted On
                            </p>

                            <p
                                className="
                                    font-medium
                                    text-slate-700
                                "
                            >
                                {new Date(
                                    complaint.createdAt
                                ).toLocaleDateString(
                                    "en-IN",
                                    {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    }
                                )}
                            </p>

                        </div>

                    </div>

                </div>

                <div
                    className="
                        grid
                        grid-cols-3
                        gap-2
                        mt-6
                    "
                >

                    <button
                        onClick={() =>
                            navigate(
                                `/complaint/${complaint._id}`
                            )
                        }
                        className="
                            flex
                            items-center
                            justify-center
                            gap-1.5
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            rounded-xl
                            py-2.5
                            text-sm
                            font-semibold
                            shadow-sm
                            hover:shadow-md
                            transition-all
                            duration-300
                            active:scale-95
                        "
                    >

                        <Eye size={17} />

                        <span>
                            View
                        </span>

                    </button>

                    <button
                        onClick={() =>
                            navigate(
                                `/edit-complaint/${complaint._id}`
                            )
                        }
                        className="
                            flex
                            items-center
                            justify-center
                            gap-1.5
                            bg-amber-500
                            hover:bg-amber-600
                            text-white
                            rounded-xl
                            py-2.5
                            text-sm
                            font-semibold
                            shadow-sm
                            hover:shadow-md
                            transition-all
                            duration-300
                            active:scale-95
                        "
                    >

                        <Pencil size={17} />

                        <span>
                            Edit
                        </span>

                    </button>

                    <button
                        onClick={() =>
                            deleteComplaint(
                                complaint._id
                            )
                        }
                        className="
                            flex
                            items-center
                            justify-center
                            gap-1.5
                            bg-red-500
                            hover:bg-red-600
                            text-white
                            rounded-xl
                            py-2.5
                            text-sm
                            font-semibold
                            shadow-sm
                            hover:shadow-md
                            transition-all
                            duration-300
                            active:scale-95
                        "
                    >

                        <Trash2 size={17} />

                        <span>
                            Delete
                        </span>

                    </button>

                </div>

            </div>

        </article>

        {showPreview && (

            <div
                onClick={() =>
                    setShowPreview(false)
                }
                className="
                    fixed
                    inset-0
                    z-[100]
                    bg-black/80
                    backdrop-blur-sm
                    flex
                    items-center
                    justify-center
                    p-5
                "
            >

                <button
                    onClick={() =>
                        setShowPreview(false)
                    }
                    className="
                        absolute
                        top-5
                        right-5
                        w-11
                        h-11
                        rounded-full
                        bg-white/10
                        hover:bg-white/20
                        text-white
                        flex
                        items-center
                        justify-center
                        transition
                    "
                >

                    <X size={26} />

                </button>

                <img
                    src={complaint.image}
                    alt={complaint.title}
                    className="
                        max-w-[90vw]
                        max-h-[85vh]
                        object-contain
                        rounded-2xl
                        shadow-2xl
                    "
                    onClick={(e) =>
                        e.stopPropagation()
                    }
                />

            </div>

        )}

    </>

);


}

export default ComplaintCard;
