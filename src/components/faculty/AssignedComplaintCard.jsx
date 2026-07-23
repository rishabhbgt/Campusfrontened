import {
    CalendarDays,
    User,
    Tag,
    AlertTriangle,
    ArrowRight,
    Clock3,
} from "lucide-react";

import ComplaintStatusBadge from "./ComplaintStatusBadge";

function AssignedComplaintCard({
    complaint,
    onView,
}) {

    const {

        title,
        description,
        category,
        priority,
        dueDate,
        status,
        createdAt,
        createdBy,

    } = complaint;


    // ==========================
    // PRIORITY CONFIG
    // ==========================

    const priorityConfig = {

        High: {
            label: "High Priority",
            className:
                "border-red-200 bg-red-50 text-red-700",
            iconClass:
                "text-red-600",
        },

        Medium: {
            label: "Medium Priority",
            className:
                "border-amber-200 bg-amber-50 text-amber-700",
            iconClass:
                "text-amber-600",
        },

        Low: {
            label: "Low Priority",
            className:
                "border-emerald-200 bg-emerald-50 text-emerald-700",
            iconClass:
                "text-emerald-600",
        },

    };


    const currentPriority =
        priorityConfig[priority] ||
        priorityConfig.Medium;


    // ==========================
    // DATE FORMATTER
    // ==========================

    const formatDate = (date) => {

        if (!date) {
            return "Not specified";
        }

        return new Date(date).toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }
        );

    };


    // ==========================
    // OVERDUE CHECK
    // ==========================

    const isOverdue =
        dueDate &&
        new Date(dueDate) < new Date() &&
        status !== "Resolved";


    return (

        <article
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/60
                bg-white/80
                backdrop-blur-xl
                p-5
                sm:p-6
                shadow-lg
                shadow-slate-200/40
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-slate-300/40
            "
        >

            {/* Top Priority Indicator */}

            <div
                className={`
                    absolute
                    inset-x-0
                    top-0
                    h-1
                    ${
                        priority === "High"
                            ? "bg-gradient-to-r from-red-500 to-rose-600"
                            : priority === "Low"
                            ? "bg-gradient-to-r from-emerald-500 to-green-600"
                            : "bg-gradient-to-r from-amber-400 to-orange-500"
                    }
                `}
            />


            {/* Header */}

            <div
                className="
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:items-start
                    sm:justify-between
                "
            >

                <div className="min-w-0">

                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            gap-2
                            mb-2
                        "
                    >

                        {/* Category */}

                        <span
                            className="
                                inline-flex
                                items-center
                                gap-1.5
                                rounded-full
                                border
                                border-indigo-200
                                bg-indigo-50
                                px-3
                                py-1
                                text-xs
                                font-semibold
                                text-indigo-700
                            "
                        >

                            <Tag size={13} />

                            {category || "Other"}

                        </span>


                        {/* Priority */}

                        <span
                            className={`
                                inline-flex
                                items-center
                                gap-1.5
                                rounded-full
                                border
                                px-3
                                py-1
                                text-xs
                                font-semibold
                                ${currentPriority.className}
                            `}
                        >

                            <AlertTriangle
                                size={13}
                                className={
                                    currentPriority.iconClass
                                }
                            />

                            {currentPriority.label}

                        </span>

                    </div>


                    {/* Title */}

                    <h3
                        className="
                            text-lg
                            sm:text-xl
                            font-bold
                            leading-snug
                            text-slate-900
                            line-clamp-2
                        "
                    >
                        {title}
                    </h3>

                </div>


                {/* Status */}

                <div className="shrink-0">

                    <ComplaintStatusBadge
                        status={status}
                    />

                </div>

            </div>


            {/* Description */}

            <p
                className="
                    mt-4
                    text-sm
                    leading-6
                    text-slate-500
                    line-clamp-3
                "
            >
                {description}
            </p>


            {/* Metadata */}

            <div
                className="
                    mt-5
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-3
                "
            >

                {/* Created By */}

                <div
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-slate-100
                        bg-slate-50/70
                        px-4
                        py-3
                    "
                >

                    <div
                        className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-xl
                            bg-white
                            text-slate-500
                            shadow-sm
                        "
                    >

                        <User size={17} />

                    </div>


                    <div className="min-w-0">

                        <p
                            className="
                                text-[11px]
                                font-medium
                                uppercase
                                tracking-wide
                                text-slate-400
                            "
                        >
                            Submitted By
                        </p>

                        <p
                            className="
                                truncate
                                text-sm
                                font-semibold
                                text-slate-700
                            "
                        >
                            {createdBy?.fullName ||
                                "Student"}
                        </p>

                    </div>

                </div>


                {/* Due Date */}

                <div
                    className={`
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        px-4
                        py-3
                        ${
                            isOverdue
                                ? "border-red-200 bg-red-50"
                                : "border-slate-100 bg-slate-50/70"
                        }
                    `}
                >

                    <div
                        className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-xl
                            bg-white
                            shadow-sm
                        "
                    >

                        {isOverdue ? (

                            <AlertTriangle
                                size={17}
                                className="text-red-600"
                            />

                        ) : (

                            <CalendarDays
                                size={17}
                                className="text-slate-500"
                            />

                        )}

                    </div>


                    <div>

                        <p
                            className="
                                text-[11px]
                                font-medium
                                uppercase
                                tracking-wide
                                text-slate-400
                            "
                        >
                            Due Date
                        </p>

                        <p
                            className={`
                                text-sm
                                font-semibold
                                ${
                                    isOverdue
                                        ? "text-red-700"
                                        : "text-slate-700"
                                }
                            `}
                        >
                            {isOverdue
                                ? "Overdue"
                                : formatDate(dueDate)}
                        </p>

                    </div>

                </div>

            </div>


            {/* Footer */}

            <div
                className="
                    mt-5
                    flex
                    flex-col
                    gap-4
                    border-t
                    border-slate-100
                    pt-5
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                "
            >

                {/* Created Date */}

                <div
                    className="
                        flex
                        items-center
                        gap-2
                        text-xs
                        text-slate-400
                    "
                >

                    <Clock3 size={14} />

                    Submitted{" "}
                    {formatDate(createdAt)}

                </div>


                {/* View Button */}

                <button
                    type="button"
                    onClick={() =>
                        onView?.(complaint)
                    }
                    className="
                        inline-flex
                        w-full
                        sm:w-auto
                        items-center
                        justify-center
                        gap-2
                        rounded-2xl
                        bg-gradient-to-r
                        from-indigo-600
                        to-blue-600
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        shadow-lg
                        shadow-indigo-500/20
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:shadow-xl
                        hover:shadow-indigo-500/30
                        active:scale-95
                        focus:outline-none
                        focus:ring-2
                        focus:ring-indigo-500
                        focus:ring-offset-2
                    "
                >

                    View Complaint

                    <ArrowRight
                        size={17}
                        className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                        "
                    />

                </button>

            </div>

        </article>

    );

}

export default AssignedComplaintCard;