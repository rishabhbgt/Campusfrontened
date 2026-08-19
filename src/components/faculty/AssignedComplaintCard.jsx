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
    onStatusUpdate,
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

    const priorityConfig = {
        High: {
            label: "High Priority",
            className:
                "border-red-200 bg-red-50 text-red-700",
            iconClass: "text-red-600",
            accent:
                "from-red-500 to-rose-600",
        },
        Medium: {
            label: "Medium Priority",
            className:
                "border-amber-200 bg-amber-50 text-amber-700",
            iconClass: "text-amber-600",
            accent:
                "from-amber-400 to-orange-500",
        },
        Low: {
            label: "Low Priority",
            className:
                "border-emerald-200 bg-emerald-50 text-emerald-700",
            iconClass: "text-emerald-600",
            accent:
                "from-emerald-500 to-green-600",
        },
    };

    const currentPriority =
        priorityConfig[priority] ||
        priorityConfig.Medium;

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

    const isOverdue =
        dueDate &&
        new Date(dueDate) < new Date() &&
        status !== "Resolved";

    return (
        <article
            className="
                group
                relative
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-white/70
                bg-white/90
                p-5
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
                sm:p-6
            "
        >
            <div
                className={`
                    absolute
                    inset-x-0
                    top-0
                    h-1
                    bg-gradient-to-r
                    ${currentPriority.accent}
                `}
            />

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
                            mb-3
                            flex
                            flex-wrap
                            items-center
                            gap-2
                        "
                    >
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
                                py-1.5
                                text-xs
                                font-semibold
                                text-indigo-700
                            "
                        >
                            <Tag size={13} />
                            {category || "Other"}
                        </span>

                        <span
                            className={`
                                inline-flex
                                items-center
                                gap-1.5
                                rounded-full
                                border
                                px-3
                                py-1.5
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

                    <h3
                        className="
                            line-clamp-2
                            text-lg
                            font-extrabold
                            leading-6
                            text-slate-900
                            sm:text-xl
                        "
                    >
                        {title}
                    </h3>
                </div>

                <div
                    className="
                        flex
                        shrink-0
                        flex-row
                        items-center
                        gap-2
                        sm:flex-col
                        sm:items-end
                    "
                >
                    <ComplaintStatusBadge
                        status={status}
                    />

                    <select
                        value={status}
                        onChange={(e) =>
                            onStatusUpdate?.(
                                complaint._id,
                                e.target.value
                            )
                        }
                        aria-label="Update complaint status"
                        className="
                            rounded-xl
                            border
                            border-slate-200
                            bg-white
                            px-3
                            py-2
                            text-xs
                            font-semibold
                            text-slate-700
                            shadow-sm
                            outline-none
                            transition-all
                            duration-200
                            hover:border-indigo-300
                            focus:border-indigo-500
                            focus:ring-2
                            focus:ring-indigo-200
                        "
                    >
                        <option value="Pending">
                            Pending
                        </option>

                        <option value="In Progress">
                            In Progress
                        </option>

                        <option value="Resolved">
                            Resolved
                        </option>
                    </select>
                </div>
            </div>

            <p
                className="
                    mt-4
                    line-clamp-3
                    text-sm
                    leading-6
                    text-slate-500
                "
            >
                {description}
            </p>

            <div
                className="
                    mt-6
                    grid
                    grid-cols-1
                    gap-3
                    sm:grid-cols-2
                "
            >
                <div
                    className="
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-slate-100
                        bg-slate-50/80
                        px-4
                        py-3
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
                                font-semibold
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
                                : "border-slate-100 bg-slate-50/80"
                        }
                    `}
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
                                font-semibold
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

            <div
                className="
                    mt-auto
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
                    Submitted {formatDate(createdAt)}
                </div>

                <button
                    type="button"
                    onClick={() =>
                        onView?.(complaint)
                    }
                    className="
                        inline-flex
                        w-full
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
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:shadow-xl
                        active:scale-95
                        focus:outline-none
                        focus:ring-2
                        focus:ring-indigo-500
                        focus:ring-offset-2
                        sm:w-auto
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