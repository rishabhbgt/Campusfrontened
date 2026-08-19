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
                    bg-amber-50
                    text-amber-700
                    border-amber-200
                `;

            case "In Progress":
                return `
                    bg-blue-50
                    text-blue-700
                    border-blue-200
                `;

            case "Resolved":
                return `
                    bg-emerald-50
                    text-emerald-700
                    border-emerald-200
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

    const handleDelete = () => {
        const confirmed = window.confirm(
            "Delete this complaint?"
        );

        if (confirmed) {
            deleteComplaint(complaint._id);
        }
    };

    return (
        <>
            <article
                className="
                    group
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/70
                    bg-white/90
                    shadow-xl
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-2xl
                "
            >
                {/* Image */}
                {complaint.image ? (
                    <div
                        className="
                            group/image
                            relative
                            h-52
                            cursor-pointer
                            overflow-hidden
                            bg-slate-100
                        "
                        onClick={() =>
                            setShowPreview(true)
                        }
                    >
                        <img
                            src={complaint.image}
                            alt={complaint.title}
                            className="
                                h-full
                                w-full
                                object-cover
                                transition-transform
                                duration-500
                                group-hover/image:scale-105
                            "
                        />

                        <div
                            className="
                                absolute
                                inset-0
                                bg-gradient-to-t
                                from-black/50
                                via-transparent
                                to-transparent
                            "
                        />

                        <div
                            className="
                                absolute
                                bottom-3
                                right-3
                                rounded-xl
                                bg-black/60
                                px-3
                                py-1.5
                                text-xs
                                font-medium
                                text-white
                                opacity-0
                                backdrop-blur-md
                                transition-all
                                duration-300
                                group-hover/image:opacity-100
                            "
                        >
                            Click to preview
                        </div>
                    </div>
                ) : (
                    <div
                        className="
                            flex
                            h-28
                            items-center
                            justify-center
                            bg-gradient-to-br
                            from-slate-50
                            to-indigo-50
                        "
                    >
                        <div
                            className="
                                rounded-2xl
                                bg-white
                                px-4
                                py-2
                                text-xs
                                font-medium
                                text-slate-400
                                shadow-sm
                            "
                        >
                            No image attached
                        </div>
                    </div>
                )}

                {/* Content */}
                <div
                    className="
                        flex
                        flex-1
                        flex-col
                        p-5
                        sm:p-6
                    "
                >
                    {/* Title + Status */}
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
                                line-clamp-2
                                text-lg
                                font-bold
                                leading-6
                                text-slate-800
                                sm:text-xl
                            "
                        >
                            {complaint.title}
                        </h2>

                        <span
                            className={`
                                shrink-0
                                rounded-full
                                border
                                px-3
                                py-1.5
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

                    {/* Description */}
                    <p
                        className="
                            mt-4
                            line-clamp-3
                            text-sm
                            leading-6
                            text-slate-500
                        "
                    >
                        {complaint.description}
                    </p>

                    {/* Details */}
                    <div
                        className="
                            mt-5
                            space-y-3
                            border-t
                            border-slate-100
                            pt-4
                        "
                    >
                        {/* Category */}
                        <div
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-indigo-50
                                    text-indigo-600
                                "
                            >
                                <MdCategory size={19} />
                            </div>

                            <div className="min-w-0">
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
                                        truncate
                                        text-sm
                                        font-semibold
                                        text-slate-700
                                    "
                                >
                                    {complaint.category}
                                </p>
                            </div>
                        </div>

                        {/* Date */}
                        <div
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-9
                                    w-9
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-blue-50
                                    text-blue-600
                                "
                            >
                                <FaRegCalendarAlt size={17} />
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
                                        text-sm
                                        font-semibold
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

                    {/* Actions */}
                    <div
                        className="
                            mt-auto
                            grid
                            grid-cols-3
                            gap-2
                            pt-6
                        "
                    >
                        <button
                            type="button"
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
                                rounded-xl
                                bg-gradient-to-r
                                from-blue-600
                                to-indigo-600
                                py-2.5
                                text-sm
                                font-semibold
                                text-white
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:shadow-md
                                active:scale-95
                            "
                        >
                            <Eye size={17} />
                            <span>View</span>
                        </button>

                        <button
                            type="button"
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
                                rounded-xl
                                bg-gradient-to-r
                                from-amber-500
                                to-orange-500
                                py-2.5
                                text-sm
                                font-semibold
                                text-white
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:shadow-md
                                active:scale-95
                            "
                        >
                            <Pencil size={17} />
                            <span>Edit</span>
                        </button>

                        <button
                            type="button"
                            onClick={handleDelete}
                            className="
                                flex
                                items-center
                                justify-center
                                gap-1.5
                                rounded-xl
                                bg-gradient-to-r
                                from-red-500
                                to-rose-600
                                py-2.5
                                text-sm
                                font-semibold
                                text-white
                                shadow-sm
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:shadow-md
                                active:scale-95
                            "
                        >
                            <Trash2 size={17} />
                            <span>Delete</span>
                        </button>
                    </div>
                </div>
            </article>

            {/* Image Preview */}
            {showPreview && (
                <div
                    onClick={() =>
                        setShowPreview(false)
                    }
                    className="
                        fixed
                        inset-0
                        z-[100]
                        flex
                        items-center
                        justify-center
                        bg-black/80
                        p-5
                        backdrop-blur-sm
                    "
                >
                    <button
                        type="button"
                        onClick={() =>
                            setShowPreview(false)
                        }
                        className="
                            absolute
                            right-5
                            top-5
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-white/10
                            text-white
                            transition
                            hover:bg-white/20
                        "
                        aria-label="Close image preview"
                    >
                        <X size={26} />
                    </button>

                    <img
                        src={complaint.image}
                        alt={complaint.title}
                        className="
                            max-h-[85vh]
                            max-w-[90vw]
                            rounded-2xl
                            object-contain
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