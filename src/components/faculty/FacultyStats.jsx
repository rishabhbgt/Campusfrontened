import {
    ClipboardList,
    Clock3,
    LoaderCircle,
    CheckCircle2,
    AlertTriangle,
    TrendingUp,
} from "lucide-react";

function FacultyStats({ complaints = [] }) {


    const total = complaints.length;

    const pending = complaints.filter(
        (complaint) =>
            complaint.status === "Pending"
    ).length;

    const inProgress = complaints.filter(
        (complaint) =>
            complaint.status === "In Progress"
    ).length;

    const resolved = complaints.filter(
        (complaint) =>
            complaint.status === "Resolved"
    ).length;

    const overdue = complaints.filter(
        (complaint) =>
            complaint.dueDate &&
            new Date(complaint.dueDate) < new Date() &&
            complaint.status !== "Resolved"
    ).length;

    const resolutionRate =
        total > 0
            ? Math.round(
                (resolved / total) * 100
            )
            : 0;


    const stats = [

        {
            title: "Assigned Complaints",
            value: total,
            description:
                "Total complaints assigned to you",
            icon: ClipboardList,
            gradient:
                "from-indigo-500 to-blue-600",
            iconBg:
                "bg-indigo-50",
            iconColor:
                "text-indigo-600",
        },

        {
            title: "Pending",
            value: pending,
            description:
                "Waiting for your attention",
            icon: Clock3,
            gradient:
                "from-amber-400 to-orange-500",
            iconBg:
                "bg-amber-50",
            iconColor:
                "text-amber-600",
        },

        {
            title: "In Progress",
            value: inProgress,
            description:
                "Currently being handled",
            icon: LoaderCircle,
            gradient:
                "from-blue-500 to-cyan-500",
            iconBg:
                "bg-blue-50",
            iconColor:
                "text-blue-600",
        },

        {
            title: "Resolved",
            value: resolved,
            description:
                "Successfully completed",
            icon: CheckCircle2,
            gradient:
                "from-emerald-500 to-green-600",
            iconBg:
                "bg-emerald-50",
            iconColor:
                "text-emerald-600",
        },

        {
            title: "Overdue",
            value: overdue,
            description:
                overdue > 0
                    ? "Requires immediate attention"
                    : "Everything is on schedule",
            icon: AlertTriangle,
            gradient:
                "from-red-500 to-rose-600",
            iconBg:
                "bg-red-50",
            iconColor:
                "text-red-600",
        },

        {
            title: "Resolution Rate",
            value: `${resolutionRate}%`,
            description:
                "Overall completion performance",
            icon: TrendingUp,
            gradient:
                "from-violet-500 to-purple-600",
            iconBg:
                "bg-violet-50",
            iconColor:
                "text-violet-600",
        },

    ];


    return (

        <section
            className="
                grid
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-3
                gap-5
            "
        >

            {stats.map(
                (stat) => {

                    const Icon =
                        stat.icon;

                    return (

                        <article
                            key={stat.title}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                border-white/60
                                bg-white/80
                                backdrop-blur-xl
                                p-6
                                shadow-lg
                                shadow-slate-200/40
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-xl
                            "
                        >

                            {/* Top Gradient Line */}

                            <div
                                className={`
                                    absolute
                                    inset-x-0
                                    top-0
                                    h-1
                                    bg-gradient-to-r
                                    ${stat.gradient}
                                `}
                            />


                            {/* Decorative Background */}

                            <div
                                className={`
                                    pointer-events-none
                                    absolute
                                    -right-10
                                    -top-10
                                    h-28
                                    w-28
                                    rounded-full
                                    bg-gradient-to-br
                                    ${stat.gradient}
                                    opacity-5
                                    blur-2xl
                                `}
                            />


                            <div
                                className="
                                    relative
                                    flex
                                    items-start
                                    justify-between
                                    gap-4
                                "
                            >

                                {/* Content */}

                                <div>

                                    <p
                                        className="
                                            text-sm
                                            font-medium
                                            text-slate-500
                                        "
                                    >
                                        {stat.title}
                                    </p>


                                    <h2
                                        className="
                                            mt-2
                                            text-3xl
                                            sm:text-4xl
                                            font-bold
                                            tracking-tight
                                            text-slate-900
                                        "
                                    >
                                        {stat.value}
                                    </h2>


                                    <p
                                        className="
                                            mt-2
                                            text-xs
                                            leading-relaxed
                                            text-slate-400
                                        "
                                    >
                                        {stat.description}
                                    </p>

                                </div>


                                {/* Icon */}

                                <div
                                    className={`
                                        flex
                                        h-12
                                        w-12
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        ${stat.iconBg}
                                        transition-transform
                                        duration-300
                                        group-hover:scale-110
                                    `}
                                >

                                    <Icon
                                        size={24}
                                        className={
                                            stat.iconColor
                                        }
                                    />

                                </div>

                            </div>


                            {/* Progress Indicator */}

                            {stat.title === "Resolution Rate" && (

                                <div
                                    className="
                                        relative
                                        mt-5
                                        h-2
                                        overflow-hidden
                                        rounded-full
                                        bg-slate-100
                                    "
                                >

                                    <div
                                        className="
                                            h-full
                                            rounded-full
                                            bg-gradient-to-r
                                            from-violet-500
                                            to-purple-600
                                            transition-all
                                            duration-700
                                        "
                                        style={{
                                            width:
                                                `${resolutionRate}%`,
                                        }}
                                    />

                                </div>

                            )}

                        </article>

                    );

                }
            )}

        </section>

    );

}

export default FacultyStats;