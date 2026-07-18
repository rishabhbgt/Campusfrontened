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
            title: "Total",
            value: total,
            icon: <FileText size={28} />,
            bg: "from-indigo-500 to-blue-600",
        },
        {
            title: "Pending",
            value: pending,
            icon: <Clock3 size={28} />,
            bg: "from-yellow-400 to-orange-500",
        },
        {
            title: "In Progress",
            value: progress,
            icon: <LoaderCircle size={28} />,
            bg: "from-sky-500 to-cyan-500",
        },
        {
            title: "Resolved",
            value: resolved,
            icon: <CheckCircle2 size={28} />,
            bg: "from-green-500 to-emerald-600",
        },
    ];

    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

            {stats.map((item) => (

                <div
                    key={item.title}
                    className="
                    bg-white
                    rounded-3xl
                    shadow-lg
                    hover:shadow-2xl
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    p-6
                    "
                >

                    <div className="flex items-center justify-between">

                        <div>

                            <p className="text-slate-500 text-sm">
                                {item.title}
                            </p>

                            <h2 className="text-4xl font-bold mt-2 text-slate-800">
                                {item.value}
                            </h2>

                        </div>

                        <div
                            className={`
                            w-14
                            h-14
                            rounded-2xl
                            flex
                            items-center
                            justify-center
                            text-white
                            bg-gradient-to-r
                            ${item.bg}
                            `}
                        >
                            {item.icon}
                        </div>

                    </div>

                </div>

            ))}

        </div>

    );
}

export default DashboardStats;