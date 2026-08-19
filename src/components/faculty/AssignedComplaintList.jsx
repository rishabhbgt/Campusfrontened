import {
    ClipboardCheck,
} from "lucide-react";

import AssignedComplaintCard from "./AssignedComplaintCard";

function AssignedComplaintList({
    complaints = [],
    onView,
    onStatusUpdate,
}) {
    if (complaints.length === 0) {
        return (
            <div
                className="
                    flex
                    min-h-[340px]
                    items-center
                    justify-center
                    rounded-3xl
                    border
                    border-white/70
                    bg-white/90
                    px-6
                    py-12
                    text-center
                    shadow-xl
                    backdrop-blur-xl
                "
            >
                <div className="max-w-md">
                    <div
                        className="
                            mx-auto
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-3xl
                            bg-gradient-to-br
                            from-indigo-100
                            to-blue-100
                            text-indigo-600
                            shadow-inner
                        "
                    >
                        <ClipboardCheck size={38} />
                    </div>

                    <p
                        className="
                            mt-6
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-indigo-600
                        "
                    >
                        All caught up
                    </p>

                    <h3
                        className="
                            mt-2
                            text-2xl
                            font-extrabold
                            tracking-tight
                            text-slate-900
                        "
                    >
                        No Complaints Assigned
                    </h3>

                    <p
                        className="
                            mt-3
                            text-sm
                            leading-6
                            text-slate-500
                            sm:text-base
                        "
                    >
                        New complaints assigned to you
                        will appear here.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <section
            aria-label="Assigned complaints"
            className="
                grid
                grid-cols-1
                gap-5
                lg:grid-cols-2
                2xl:grid-cols-3
            "
        >
            {complaints.map((complaint) => (
                <AssignedComplaintCard
                    key={complaint._id}
                    complaint={complaint}
                    onView={onView}
                    onStatusUpdate={
                        onStatusUpdate
                    }
                />
            ))}
        </section>
    );
}

export default AssignedComplaintList;