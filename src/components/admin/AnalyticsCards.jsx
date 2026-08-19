import {
    ClipboardList,
    Clock3,
    LoaderCircle,
    CheckCircle2,
    AlertTriangle,
    AlarmClock,
} from "lucide-react";

function AnalyticsCards({
    total = 0,
    pending = 0,
    inProgress = 0,
    resolved = 0,
    highPriority = 0,
    overdue = 0,
}) {
    const cards = [
        {
            title: "Total Complaints",
            value: total,
            icon: ClipboardList,
            bg: "from-indigo-500 to-blue-600",
            lightBg: "bg-indigo-50",
            iconColor: "text-indigo-600",
        },
        {
            title: "Pending",
            value: pending,
            icon: Clock3,
            bg: "from-yellow-400 to-orange-500",
            lightBg: "bg-amber-50",
            iconColor: "text-orange-500",
        },
        {
            title: "In Progress",
            value: inProgress,
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
            lightBg: "bg-emerald-50",
            iconColor: "text-emerald-600",
        },
        {
            title: "High Priority",
            value: highPriority,
            icon: AlertTriangle,
            bg: "from-red-500 to-rose-600",
            lightBg: "bg-red-50",
            iconColor: "text-red-600",
        },
        {
            title: "Overdue",
            value: overdue,
            icon: AlarmClock,
            bg: "from-orange-500 to-red-500",
            lightBg: "bg-orange-50",
            iconColor: "text-orange-600",
        },
    ];

    return (
        <div
            className="
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
                lg:grid-cols-3
                2xl:grid-cols-6
            "
        >
            {cards.map((card) => {
                const Icon = card.icon;

                return (
                    <div
                        key={card.title}
                        className="
                            group
                            relative
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
                        <div
                            className={`
                                absolute
                                inset-x-0
                                top-0
                                h-1
                                bg-gradient-to-r
                                ${card.bg}
                            `}
                        />

                        <div
                            className="
                                relative
                                flex
                                items-center
                                justify-between
                                gap-4
                                p-5
                                sm:p-6
                            "
                        >
                            <div className="min-w-0">
                                <p
                                    className="
                                        text-sm
                                        font-semibold
                                        text-slate-500
                                    "
                                >
                                    {card.title}
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
                                    {card.value}
                                </h2>
                            </div>

                            <div
                                className={`
                                    flex
                                    h-14
                                    w-14
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    ${card.lightBg}
                                    transition-transform
                                    duration-300
                                    group-hover:scale-110
                                    sm:h-16
                                    sm:w-16
                                `}
                            >
                                <Icon
                                    size={28}
                                    className={card.iconColor}
                                />
                            </div>
                        </div>

                        <div
                            className={`
                                absolute
                                -right-8
                                -top-8
                                h-24
                                w-24
                                rounded-full
                                bg-gradient-to-br
                                ${card.bg}
                                opacity-10
                                transition-transform
                                duration-500
                                group-hover:scale-150
                            `}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default AnalyticsCards;