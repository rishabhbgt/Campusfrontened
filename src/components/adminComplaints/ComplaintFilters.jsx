import {
    Search,
    Filter,
} from "lucide-react";

function ComplaintFilters({
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    priorityFilter,
    setPriorityFilter,
}) {
    return (
        <div
            className="
                mb-8
                w-full
                rounded-3xl
                border
                border-white/70
                bg-white/90
                p-4
                shadow-xl
                backdrop-blur-xl
                sm:p-5
            "
        >
            <div
                className="
                    mb-4
                    flex
                    flex-col
                    gap-1
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                "
            >
                <div>
                    <p
                        className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-indigo-600
                        "
                    >
                        Complaint Filters
                    </p>

                    <p
                        className="
                            mt-1
                            text-sm
                            text-slate-500
                        "
                    >
                        Search and filter complaints by status or priority.
                    </p>
                </div>
            </div>

            <div
                className="
                    flex
                    flex-col
                    gap-4
                    lg:flex-row
                    lg:items-center
                "
            >
                <div className="relative flex-1">
                    <Search
                        size={20}
                        className="
                            pointer-events-none
                            absolute
                            left-4
                            top-1/2
                            -translate-y-1/2
                            text-slate-400
                        "
                    />

                    <input
                        type="text"
                        placeholder="Search complaints..."
                        value={search}
                        onChange={(e) =>
                            setSearch(
                                e.target.value
                            )
                        }
                        aria-label="Search complaints"
                        className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-200
                            bg-slate-50
                            py-3
                            pl-12
                            pr-4
                            text-slate-700
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-slate-400
                            focus:border-indigo-500
                            focus:bg-white
                            focus:ring-4
                            focus:ring-indigo-100
                        "
                    />
                </div>

                <div
                    className="
                        grid
                        w-full
                        grid-cols-1
                        gap-3
                        sm:grid-cols-2
                        lg:w-auto
                        lg:grid-cols-2
                    "
                >
                    <div className="relative">
                        <Filter
                            size={18}
                            className="
                                pointer-events-none
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                            "
                        />

                        <select
                            value={statusFilter}
                            onChange={(e) =>
                                setStatusFilter(
                                    e.target.value
                                )
                            }
                            aria-label="Filter complaints by status"
                            className="
                                w-full
                                appearance-none
                                rounded-2xl
                                border
                                border-slate-200
                                bg-slate-50
                                py-3
                                pl-11
                                pr-8
                                font-medium
                                text-slate-700
                                outline-none
                                transition-all
                                duration-300
                                focus:border-indigo-500
                                focus:bg-white
                                focus:ring-4
                                focus:ring-indigo-100
                                lg:min-w-44
                            "
                        >
                            <option value="All">
                                All Status
                            </option>

                            <option value="Pending">
                                Pending
                            </option>

                            <option value="In Progress">
                                In Progress
                            </option>

                            <option value="Resolved">
                                Resolved
                            </option>

                            <option value="Overdue">
                                Overdue
                            </option>
                        </select>
                    </div>

                    <select
                        value={priorityFilter}
                        onChange={(e) =>
                            setPriorityFilter(
                                e.target.value
                            )
                        }
                        aria-label="Filter complaints by priority"
                        className="
                            w-full
                            appearance-none
                            rounded-2xl
                            border
                            border-slate-200
                            bg-slate-50
                            px-4
                            py-3
                            font-medium
                            text-slate-700
                            outline-none
                            transition-all
                            duration-300
                            focus:border-indigo-500
                            focus:bg-white
                            focus:ring-4
                            focus:ring-indigo-100
                            lg:min-w-44
                        "
                    >
                        <option value="All">
                            All Priority
                        </option>

                        <option value="Low">
                            Low
                        </option>

                        <option value="Medium">
                            Medium
                        </option>

                        <option value="High">
                            High
                        </option>

                        <option value="Critical">
                            Critical
                        </option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default ComplaintFilters;