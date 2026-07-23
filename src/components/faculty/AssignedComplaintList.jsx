import AssignedComplaintCard from "./AssignedComplaintCard";

function AssignedComplaintList({
    complaints = [],
    onView,
}) {


    if (complaints.length === 0) {

        return (

            <div
                className="
                    flex
                    min-h-[320px]
                    items-center
                    justify-center
                    rounded-3xl
                    border
                    border-dashed
                    border-slate-300
                    bg-white/70
                    px-6
                    py-12
                    text-center
                    shadow-sm
                    backdrop-blur-xl
                "
            >

                <div className="max-w-md">

                    <div
                        className="
                            mx-auto
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            bg-indigo-50
                            text-indigo-600
                        "
                    >

                        <svg
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >

                            <path
                                d="M9 11l3 3L22 4"
                            />

                            <path
                                d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                            />

                        </svg>

                    </div>


                    <h3
                        className="
                            mt-5
                            text-xl
                            font-bold
                            text-slate-900
                        "
                    >
                        No complaints assigned
                    </h3>


                    <p
                        className="
                            mt-2
                            text-sm
                            leading-6
                            text-slate-500
                        "
                    >
                        You're all caught up. New complaints
                        assigned to you will appear here.
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

            {complaints.map(
                (complaint) => (

                    <AssignedComplaintCard
                        key={complaint._id}
                        complaint={complaint}
                        onView={onView}
                    />

                )
            )}

        </section>

    );

}

export default AssignedComplaintList;