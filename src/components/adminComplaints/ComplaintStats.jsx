import {
    ClipboardList,
    Clock3,
    LoaderCircle,
    CheckCircle2,
} from "lucide-react";

function ComplaintStats({ complaints }) {
    const total = complaints.length;

    const pending = complaints.filter(
        (item) => item.status === "Pending"
    ).length;

    const progress = complaints.filter(
        (item) => item.status === "In Progress"
    ).length;

    const resolved = complaints.filter(
        (item) => item.status === "Resolved"
    ).length;

    const cards = [
        {
            title: "Total Complaints",
            value: total,
            icon: ClipboardList,
            bg: "from-indigo-500 to-violet-600",
            lightBg: "bg-indigo-50",
            iconColor: "text-indigo-600",
        },
        {
            title: "Pending",
            value: pending,
            icon: Clock3,
            bg: "from-amber-400 to-orange-500",
            lightBg: "bg-amber-50",
            iconColor: "text-orange-500",
        },
        {
            title: "In Progress",
            value: progress,
            icon: LoaderCircle,
            bg: "from-sky-500 to-cyan-600",
            lightBg: "bg-sky-50",
            iconColor: "text-sky-600",
        },
        {
            title: "Resolved",
            value: resolved,
            icon: CheckCircle2,
            bg: "from-emerald-500 to-green-600",
            lightBg: "bg-emerald-50",
            iconColor: "text-emerald-600",
        },
    ];

    return (
        <div
            className="
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
                xl:grid-cols-4
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

export default ComplaintStats;