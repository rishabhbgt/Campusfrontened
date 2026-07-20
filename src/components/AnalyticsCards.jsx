import {
    ClipboardList,
    Clock3,
    LoaderCircle,
    CheckCircle2,
    AlertTriangle,
    AlarmClock,
} from "lucide-react";

function AnalyticsCards({
    total,
    pending,
    inProgress,
    resolved,
    highPriority,
    overdue,
}) {

    const cards = [
        {
            title: "Total Complaints",
            value: total,
            icon: ClipboardList,
            bg: "from-indigo-500 to-blue-600",
        },
        {
            title: "Pending",
            value: pending,
            icon: Clock3,
            bg: "from-yellow-400 to-orange-500",
        },
        {
            title: "In Progress",
            value: inProgress,
            icon: LoaderCircle,
            bg: "from-sky-500 to-cyan-500",
        },
        {
            title: "Resolved",
            value: resolved,
            icon: CheckCircle2,
            bg: "from-green-500 to-emerald-600",
        },
        {
            title: "High Priority",
            value: highPriority,
            icon: AlertTriangle,
            bg: "from-red-500 to-rose-600",
        },
        {
            title: "Overdue",
            value: overdue,
            icon: AlarmClock,
            bg: "from-orange-500 to-red-500",
        },
    ];

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-6 mb-8">

            {cards.map((card, index) => {

                const Icon = card.icon;

                return (

                    <div
                        key={index}
                        className="
                            relative
                            overflow-hidden
                            rounded-3xl
                            bg-white
                            border
                            border-slate-200
                            shadow-lg
                            hover:shadow-2xl
                            hover:-translate-y-2
                            transition-all
                            duration-300
                            group
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

                        <div className="p-6 flex items-center justify-between">

                            <div>

                                <p className="text-sm text-slate-500 font-medium">

                                    {card.title}

                                </p>

                                <h2 className="text-4xl font-bold text-slate-800 mt-2">

                                    {card.value}

                                </h2>

                            </div>

                            <div
                                className={`
                                    w-16
                                    h-16
                                    rounded-2xl
                                    bg-gradient-to-r
                                    ${card.bg}
                                    flex
                                    items-center
                                    justify-center
                                    shadow-lg
                                    group-hover:scale-110
                                    transition
                                `}
                            >

                                <Icon
                                    size={30}
                                    className="text-white"
                                />

                            </div>

                        </div>

                    </div>

                );

            })}

        </div>

    );

}

export default AnalyticsCards;