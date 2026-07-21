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
            icon: FileText,
            bg: "from-indigo-500 to-blue-600",
            lightBg: "bg-indigo-50",
            iconColor: "text-indigo-600",
        },
        {
            title: "Pending",
            value: pending,
            icon: Clock3,
            bg: "from-yellow-400 to-orange-500",
            lightBg: "bg-yellow-50",
            iconColor: "text-orange-500",
        },
        {
            title: "In Progress",
            value: progress,
            icon: LoaderCircle,
            bg: "from-sky-500 to-cyan-500",
            lightBg: "bg-sky-50",
            iconColor: "text-sky-600",
        },
        {
            title: "Resolved",
            value: resolved,
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
                    sm:grid-cols-2
                    xl:grid-cols-4
                    gap-5
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
                                bg-white/80
                                backdrop-blur-xl
                                border
                                border-white/60
                                rounded-3xl
                                shadow-lg
                                p-6
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:shadow-2xl
                            "
                        >

                            {/* Background Glow */}

                            <div
                                className={`
                                    absolute
                                    -right-10
                                    -top-10
                                    w-28
                                    h-28
                                    rounded-full
                                    bg-gradient-to-br
                                    ${item.bg}
                                    opacity-10
                                    group-hover:scale-150
                                    transition-transform
                                    duration-500
                                `}
                            />


                            <div
                                className="
                                    relative
                                    flex
                                    items-center
                                    justify-between
                                "
                            >

                                {/* Text */}

                                <div>

                                    <p
                                        className="
                                            text-sm
                                            font-medium
                                            text-slate-500
                                        "
                                    >
                                        {item.title}
                                    </p>

                                    <h2
                                        className="
                                            mt-2
                                            text-4xl
                                            font-extrabold
                                            text-slate-800
                                        "
                                    >
                                        {item.value}
                                    </h2>

                                    <p
                                        className="
                                            mt-1
                                            text-xs
                                            text-slate-400
                                        "
                                    >
                                        {item.title === "Total Complaints"
                                            ? "All submitted complaints"
                                            : item.title === "Pending"
                                            ? "Waiting for action"
                                            : item.title === "In Progress"
                                            ? "Currently being handled"
                                            : "Successfully completed"
                                        }
                                    </p>

                                </div>


                                {/* Icon */}

                                <div
                                    className={`
                                        w-14
                                        h-14
                                        rounded-2xl
                                        ${item.lightBg}
                                        flex
                                        items-center
                                        justify-center
                                        transition-all
                                        duration-300
                                        group-hover:scale-110
                                    `}
                                >

                                    <Icon
                                        size={28}
                                        className={item.iconColor}
                                    />

                                </div>

                            </div>


                            {/* Bottom Gradient Line */}

                            <div
                                className={`
                                    absolute
                                    bottom-0
                                    left-0
                                    w-full
                                    h-1
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