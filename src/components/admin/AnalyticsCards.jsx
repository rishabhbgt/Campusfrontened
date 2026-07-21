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

        <div
            className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                2xl:grid-cols-6
                gap-5
            "
        >

            {cards.map((card) => {

                const Icon = card.icon;

                return (

                    <div
                        key={card.title}
                        className="
                            relative
                            overflow-hidden

                            rounded-3xl

                            bg-white/90
                            backdrop-blur-xl

                            border
                            border-white/60

                            shadow-lg

                            hover:shadow-2xl
                            hover:-translate-y-1

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


                        <div
                            className="
                                p-5
                                sm:p-6

                                flex
                                items-center
                                justify-between

                                gap-4
                            "
                        >

                            <div>

                                <p
                                    className="
                                        text-sm
                                        text-slate-500
                                        font-medium
                                        whitespace-nowrap
                                    "
                                >
                                    {card.title}
                                </p>

                                <h2
                                    className="
                                        text-3xl
                                        sm:text-4xl
                                        font-bold
                                        text-slate-800
                                        mt-2
                                    "
                                >
                                    {card.value}
                                </h2>

                            </div>


                            {/* Icon */}

                            <div
                                className={`
                                    w-14
                                    h-14
                                    sm:w-16
                                    sm:h-16

                                    rounded-2xl

                                    bg-gradient-to-r
                                    ${card.bg}

                                    flex
                                    items-center
                                    justify-center

                                    shadow-lg

                                    shrink-0

                                    group-hover:scale-110

                                    transition-transform
                                    duration-300
                                `}
                            >

                                <Icon
                                    size={28}
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