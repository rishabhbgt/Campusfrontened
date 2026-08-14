import {
    CheckCircle2,
    UserRound,
    Clock3,
    UserPlus,
    RefreshCw,
    AlertCircle,
    CalendarClock,
} from "lucide-react";


function ComplaintTimeline({
    history = [],
}) {

    const getIcon = (action) => {

        switch (action) {

            case "SUBMITTED":
                return (
                    <CheckCircle2
                        size={18}
                        className="text-emerald-600"
                    />
                );


            case "ASSIGNED":
                return (
                    <UserPlus
                        size={18}
                        className="text-blue-600"
                    />
                );


            case "REASSIGNED":
                return (
                    <RefreshCw
                        size={18}
                        className="text-indigo-600"
                    />
                );


            case "STATUS_UPDATED":
                return (
                    <Clock3
                        size={18}
                        className="text-amber-600"
                    />
                );


            case "PRIORITY_UPDATED":
                return (
                    <AlertCircle
                        size={18}
                        className="text-orange-600"
                    />
                );


            case "DUE_DATE_UPDATED":
                return (
                    <CalendarClock
                        size={18}
                        className="text-purple-600"
                    />
                );


            case "UNASSIGNED":
                return (
                    <UserRound
                        size={18}
                        className="text-red-600"
                    />
                );


            default:
                return (
                    <Clock3
                        size={18}
                        className="text-slate-500"
                    />
                );

        }

    };

    const formatDate = (date) => {

        if (!date) {
            return "";
        }


        const value =
            new Date(date);


        return value.toLocaleString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            }
        );

    };

    if (!history.length) {

        return (

            <section
                className="
                    mt-8
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    shadow-xl
                    sm:p-8
                "
            >

                <h2
                    className="
                        text-2xl
                        font-bold
                        text-slate-800
                    "
                >
                    Complaint Timeline
                </h2>


                <p
                    className="
                        mt-2
                        text-sm
                        text-slate-500
                    "
                >
                    No activity history is available
                    for this complaint yet.
                </p>

            </section>

        );

    }


    return (

        <section
            className="
                mt-8
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-xl
                sm:p-8
            "
        >

            <div className="mb-8">

                <h2
                    className="
                        text-2xl
                        font-bold
                        text-slate-800
                    "
                >
                    Complaint Timeline
                </h2>


                <p
                    className="
                        mt-1
                        text-sm
                        text-slate-500
                    "
                >
                    Track every important action and
                    status change for this complaint.
                </p>

            </div>

            <div className="relative">
                <div
                    className="
                        absolute
                        left-[18px]
                        top-5
                        bottom-5
                        w-px
                        bg-slate-200
                    "
                />


                <div
                    className="
                        space-y-7
                    "
                >

                    {history.map(
                        (item, index) => (

                            <div
                                key={
                                    item._id ||
                                    `${item.action}-${index}`
                                }
                                className="
                                    relative
                                    flex
                                    gap-4
                                "
                            >

                                <div
                                    className="
                                        relative
                                        z-10
                                        flex
                                        h-9
                                        w-9
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-slate-200
                                        bg-white
                                        shadow-sm
                                    "
                                >

                                    {getIcon(
                                        item.action
                                    )}

                                </div>

                                <div
                                    className="
                                        min-w-0
                                        flex-1
                                        rounded-2xl
                                        border
                                        border-slate-100
                                        bg-slate-50
                                        p-4
                                    "
                                >

                                    <p
                                        className="
                                            text-sm
                                            font-semibold
                                            leading-relaxed
                                            text-slate-800
                                        "
                                    >
                                        {item.message}
                                    </p>

                                    <div
                                        className="
                                            mt-3
                                            flex
                                            flex-wrap
                                            items-center
                                            gap-2
                                            text-xs
                                            text-slate-500
                                        "
                                    >

                                        {item.changedBy && (

                                            <>
                                                <span
                                                    className="
                                                        inline-flex
                                                        items-center
                                                        gap-1
                                                        font-medium
                                                        text-slate-600
                                                    "
                                                >

                                                    <UserRound
                                                        size={13}
                                                    />

                                                    {item
                                                        .changedBy
                                                        .fullName ||
                                                        "Unknown user"}

                                                </span>


                                                {item.changedByRole && (

                                                    <span
                                                        className="
                                                            rounded-full
                                                            bg-indigo-50
                                                            px-2.5
                                                            py-1
                                                            font-semibold
                                                            capitalize
                                                            text-indigo-700
                                                        "
                                                    >
                                                        {
                                                            item.changedByRole
                                                        }
                                                    </span>

                                                )}

                                            </>

                                        )}


                                        {item.createdAt && (

                                            <span
                                                className="
                                                    text-slate-400
                                                "
                                            >
                                                {formatDate(
                                                    item.createdAt
                                                )}
                                            </span>

                                        )}

                                    </div>

                                    {item.status && (

                                        <span
                                            className="
                                                mt-3
                                                inline-flex
                                                rounded-full
                                                bg-white
                                                px-3
                                                py-1
                                                text-xs
                                                font-semibold
                                                text-slate-600
                                                shadow-sm
                                            "
                                        >
                                            Status: {item.status}
                                        </span>

                                    )}

                                </div>

                            </div>

                        )
                    )}

                </div>

            </div>

        </section>

    );

}

export default ComplaintTimeline;