import {
    ClipboardList,
    Clock3,
    LoaderCircle,
    CheckCircle2,
} from "lucide-react";

function ComplaintStats({ complaints }) {

    const total = complaints.length;

    const pending =
        complaints.filter(
            (item) => item.status === "Pending"
        ).length;

    const progress =
        complaints.filter(
            (item) => item.status === "In Progress"
        ).length;

    const resolved =
        complaints.filter(
            (item) => item.status === "Resolved"
        ).length;

    const cards = [

        {
            title: "Total Complaints",
            value: total,
            icon: ClipboardList,
            bg: "from-indigo-500 to-violet-600",
        },

        {
            title: "Pending",
            value: pending,
            icon: Clock3,
            bg: "from-amber-400 to-orange-500",
        },

        {
            title: "In Progress",
            value: progress,
            icon: LoaderCircle,
            bg: "from-sky-500 to-cyan-600",
        },

        {
            title: "Resolved",
            value: resolved,
            icon: CheckCircle2,
            bg: "from-emerald-500 to-green-600",
        },

    ];

    return (

        <div
            className="
                grid
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-4
                gap-6
                mb-10
            "
        >

            {

                cards.map((card, index) => {

                    const Icon = card.icon;

                    return (

                        <div

                            key={index}

                            className="
                                bg-white
                                rounded-3xl
                                shadow-md
                                hover:shadow-xl
                                transition-all
                                duration-300
                                p-6
                                border
                                border-slate-100
                                group
                            "

                        >

                            <div className="flex justify-between items-center">

                                <div>

                                    <p className="text-slate-500 text-sm">

                                        {card.title}

                                    </p>

                                    <h2
                                        className="
                                            text-4xl
                                            font-bold
                                            mt-3
                                            text-slate-800
                                        "
                                    >

                                        {card.value}

                                    </h2>

                                </div>

                                <div

                                    className={`
                                        w-16
                                        h-16
                                        rounded-2xl
                                        bg-gradient-to-br
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

                })

            }

        </div>

    );

}

export default ComplaintStats;