import { AlertTriangle, CalendarClock } from "lucide-react";

function OverdueAlert({ complaint }) {

    if (
        !complaint.dueDate ||
        new Date(complaint.dueDate) >= new Date() ||
        complaint.status === "Resolved"
    ) {
        return null;
    }

    return (

        <div
            className="
                mt-8
                rounded-3xl
                border
                border-red-200
                bg-gradient-to-r
                from-red-50
                to-rose-50
                shadow-lg
                p-5
                sm:p-6
                flex
                flex-col
                sm:flex-row
                items-start
                gap-4
            "
        >

            {/* ICON */}

            <div
                className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-red-100
                    text-red-600
                    flex
                    items-center
                    justify-center
                    shrink-0
                "
            >

                <AlertTriangle size={25} />

            </div>


            {/* CONTENT */}

            <div className="flex-1">

                <div
                    className="
                        flex
                        flex-wrap
                        items-center
                        gap-3
                    "
                >

                    <h3
                        className="
                            text-lg
                            sm:text-xl
                            font-bold
                            text-red-700
                        "
                    >
                        Overdue Complaint
                    </h3>

                    <span
                        className="
                            px-3
                            py-1
                            rounded-full
                            bg-red-100
                            text-red-700
                            text-xs
                            font-bold
                        "
                    >
                        Action Required
                    </span>

                </div>


                <p
                    className="
                        mt-2
                        text-sm
                        sm:text-base
                        leading-6
                        text-red-600
                    "
                >
                    This complaint has crossed its due date
                    and is still unresolved. Please contact
                    the administration if the issue requires
                    urgent attention.
                </p>


                {/* DUE DATE */}

                <div
                    className="
                        mt-4
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-white/70
                        border
                        border-red-200
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-red-700
                    "
                >

                    <CalendarClock size={17} />

                    Due Date:

                    <span className="font-bold">

                        {new Date(
                            complaint.dueDate
                        ).toLocaleDateString()}

                    </span>

                </div>

            </div>

        </div>

    );

}

export default OverdueAlert;
