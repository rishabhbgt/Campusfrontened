import {
    CheckCircle,
    Clock3,
    Loader2,
} from "lucide-react";

function ComplaintTimeline({ status }) {

    const steps = [
        {
            title: "Complaint Created",
            completed: true,
            icon: CheckCircle,
        },
        {
            title: "Pending",
            completed:
                status === "Pending" ||
                status === "In Progress" ||
                status === "Resolved",
            icon: Clock3,
        },
        {
            title: "In Progress",
            completed:
                status === "In Progress" ||
                status === "Resolved",
            icon: Loader2,
        },
        {
            title: "Resolved",
            completed:
                status === "Resolved",
            icon: CheckCircle,
        },
    ];

    return (

        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-7 mt-8">

            <h2 className="text-2xl font-bold mb-8">
                Complaint Progress
            </h2>

            <div className="space-y-6">

                {steps.map((step, index) => {

                    const Icon = step.icon;

                    return (

                        <div
                            key={step.title}
                            className="flex items-start gap-4 relative"
                        >

                            <div
                                className={`
                                    w-12
                                    h-12
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    ${
                                        step.completed
                                            ? "bg-green-500 text-white"
                                            : "bg-gray-200 text-gray-500"
                                    }
                                `}
                            >

                                <Icon size={20} />

                            </div>

                            <div>

                                <h3
                                    className={`
                                        font-semibold
                                        ${
                                            step.completed
                                                ? "text-gray-900"
                                                : "text-gray-400"
                                        }
                                    `}
                                >
                                    {step.title}
                                </h3>

                            </div>

                            {index !== steps.length - 1 && (

                                <div
                                    className="
                                        absolute
                                        left-6
                                        top-12
                                        w-[2px]
                                        h-8
                                        bg-gray-300
                                    "
                                />

                            )}

                        </div>

                    );

                })}

            </div>

        </div>

    );
}

export default ComplaintTimeline;