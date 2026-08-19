import {
    FileText,
    Clock3,
    LoaderCircle,
    CheckCircle2,
} from "lucide-react";

function DashboardStats({ complaints }) {
    const total = complaints.length;

    const pending = complaints.filter(
        (c) => c.status === "Pending"
    ).length;

    const progress = complaints.filter(
        (c) => c.status === "In Progress"
    ).length;

    const resolved = complaints.filter(
        (c) => c.status === "Resolved"
    ).length;

    const stats = [
        {
            title: "Total Complaints",
            value: total,
            description: "All submitted complaints",
            icon: FileText,
            bg: "from-indigo-500 to-blue-600",
            lightBg: "bg-indigo-50",
            iconColor: "text-indigo-600",
        },
        {
            title: "Pending",
            value: pending,
            description: "Waiting for action",
            icon: Clock3,
            bg: "from-yellow-400 to-orange-500",
            lightBg: "bg-yellow-50",
            iconColor: "text-orange-500",
        },
        {
            title: "In Progress",
            value: progress,
            description: "Currently being handled",
            icon: LoaderCircle,
            bg: "from-sky-500 to-cyan-500",
            lightBg: "bg-sky-50",
            iconColor: "text-sky-600",
        },
        {
            title: "Resolved",
            value: resolved,
            description: "Successfully completed",
            icon: CheckCircle2,
            bg: "from-green-500 to-emerald-600",
            lightBg: "bg-green-50",
            iconColor: "text-green-600",
        },
    ];

    return (
        <section className="mt-8">
            <div
                className="
                    grid
                    grid-cols-1
                    gap-5
                    sm:grid-cols-2
                    xl:grid-cols-4
                "
            >
                {stats.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.title}
                            className="
                                group
                                relative
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
                            {/* Decorative glow */}
                            <div
                                className={`
                                    absolute
                                    -right-10
                                    -top-10
                                    h-28
                                    w-28
                                    rounded-full
                                    bg-gradient-to-br
                                    ${item.bg}
                                    opacity-10
                                    transition-transform
                                    duration-500
                                    group-hover:scale-150
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
                                <div className="min-w-0">
                                    <p
                                        className="
                                            text-sm
                                            font-semibold
                                            text-slate-500
                                        "
                                    >
                                        {item.title}
                                    </p>

                                    <h2
                                        className="
                                            mt-2
                                            text-3xl
                                            font-extrabold
                                            tracking-tight
                                            text-slate-800
                                            sm:text-4xl
                                        "
                                    >
                                        {item.value}
                                    </h2>

                                    <p
                                        className="
                                            mt-2
                                            text-xs
                                            leading-5
                                            text-slate-400
                                        "
                                    >
                                        {item.description}
                                    </p>
                                </div>

                                {/* Icon */}
                                <div
                                    className={`
                                        flex
                                        h-13
                                        w-13
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        ${item.lightBg}
                                        transition-all
                                        duration-300
                                        group-hover:scale-110
                                    `}
                                >
                                    <Icon
                                        size={26}
                                        className={item.iconColor}
                                    />
                                </div>
                            </div>

                            {/* Bottom accent */}
                            <div
                                className={`
                                    absolute
                                    bottom-0
                                    left-0
                                    h-1
                                    w-full
                                    bg-gradient-to-r
                                    ${item.bg}
                                `}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default DashboardStats;