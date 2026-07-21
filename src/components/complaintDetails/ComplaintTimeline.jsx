import {
    CheckCircle,
    Clock3,
    Loader2,
} from "lucide-react";

function ComplaintTimeline({ status }) {

    const steps = [
        {
            title: "Complaint Created",
            description: "Your complaint has been successfully submitted.",
            completed: true,
            icon: CheckCircle,
        },
        {
            title: "Pending",
            description: "Your complaint is waiting for administration review.",
            completed:
                status === "Pending" ||
                status === "In Progress" ||
                status === "Resolved",
            icon: Clock3,
        },
        {
            title: "In Progress",
            description: "Administration is currently working on your complaint.",
            completed:
                status === "In Progress" ||
                status === "Resolved",
            icon: Loader2,
        },
        {
            title: "Resolved",
            description: "Your complaint has been successfully resolved.",
            completed:
                status === "Resolved",
            icon: CheckCircle,
        },
    ];

    return (

        <div
            className="
                bg-white
                rounded-3xl
                shadow-xl
                border
                border-slate-200
                p-6
                sm:p-8
                mt-8
            "
        >

            {/* HEADER */}

            <div className="mb-8">

                <h2
                    className="
                        text-2xl
                        sm:text-3xl
                        font-extrabold
                        text-slate-800
                    "
                >
                    Complaint Progress
                </h2>

                <p className="mt-2 text-slate-500">
                    Track the current progress of your complaint.
                </p>

            </div>


            {/* TIMELINE */}

            <div className="relative">

                {steps.map((step, index) => {

                    const Icon = step.icon;

                    const isLast =
                        index === steps.length - 1;

                    const isCurrent =
                        (status === "Pending" && index === 1) ||
                        (status === "In Progress" && index === 2) ||
                        (status === "Resolved" && index === 3);

                    return (

                        <div
                            key={step.title}
                            className="
                                relative
                                flex
                                items-start
                                gap-4
                                sm:gap-5
                            "
                        >

                            {/* CONNECTING LINE */}

                            {!isLast && (

                                <div
                                    className={`
                                        absolute
                                        left-[23px]
                                        top-12
                                        w-[3px]
                                        h-[calc(100%-20px)]
                                        rounded-full
                                        ${
                                            steps[index + 1].completed
                                                ? "bg-green-400"
                                                : "bg-slate-200"
                                        }
                                    `}
                                />

                            )}


                            {/* ICON */}

                            <div
                                className={`
                                    relative
                                    z-10
                                    w-12
                                    h-12
                                    sm:w-14
                                    sm:h-14
                                    rounded-2xl
                                    flex
                                    items-center
                                    justify-center
                                    shrink-0
                                    transition-all
                                    duration-300
                                    ${
                                        step.completed
                                            ? "bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg"
                                            : "bg-slate-100 text-slate-400 border border-slate-200"
                                    }
                                    ${
                                        isCurrent
                                            ? "ring-4 ring-blue-100 scale-105"
                                            : ""
                                    }
                                `}
                            >

                                <Icon
                                    size={23}
                                    className={
                                        isCurrent &&
                                        status === "In Progress"
                                            ? "animate-spin"
                                            : ""
                                    }
                                />

                            </div>


                            {/* CONTENT */}

                            <div
                                className={`
                                    flex-1
                                    pb-8
                                    ${
                                        isLast
                                            ? "pb-0"
                                            : ""
                                    }
                                `}
                            >

                                <div className="flex flex-wrap items-center gap-3">

                                    <h3
                                        className={`
                                            text-lg
                                            sm:text-xl
                                            font-bold
                                            ${
                                                step.completed
                                                    ? "text-slate-800"
                                                    : "text-slate-400"
                                            }
                                        `}
                                    >
                                        {step.title}
                                    </h3>


                                    {/* CURRENT STATUS */}

                                    {isCurrent && (

                                        <span
                                            className="
                                                px-3
                                                py-1
                                                rounded-full
                                                bg-blue-100
                                                text-blue-700
                                                text-xs
                                                font-bold
                                            "
                                        >
                                            Current Status
                                        </span>

                                    )}

                                </div>


                                <p
                                    className={`
                                        mt-2
                                        text-sm
                                        sm:text-base
                                        leading-6
                                        ${
                                            step.completed
                                                ? "text-slate-500"
                                                : "text-slate-400"
                                        }
                                    `}
                                >
                                    {step.description}
                                </p>

                            </div>

                        </div>

                    );

                })}

            </div>

        </div>

    );

}

export default ComplaintTimeline;

