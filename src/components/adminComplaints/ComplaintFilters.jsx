import { Search, Filter } from "lucide-react";

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
                bg-white
                rounded-3xl
                shadow-md
                p-6
                mb-8
                flex
                flex-col
                lg:flex-row
                gap-5
                items-center
                justify-between
            "
        >

            {/* Search */}

            <div className="relative w-full lg:flex-1">

                <Search
                    size={20}
                    className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                    "
                />

                <input

                    type="text"

                    placeholder="Search complaint..."

                    value={search}

                    onChange={(e) =>
                        setSearch(e.target.value)
                    }

                    className="
                        w-full
                        pl-12
                        pr-5
                        py-3
                        rounded-2xl
                        border
                        border-slate-300
                        outline-none
                        focus:ring-4
                        focus:ring-indigo-100
                        focus:border-indigo-500
                        transition
                    "

                />

            </div>

            {/* Filters */}

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

                <div className="relative">

                    <Filter
                        size={18}
                        className="
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
                            setStatusFilter(e.target.value)
                        }

                        className="
                            pl-11
                            pr-8
                            py-3
                            rounded-2xl
                            border
                            border-slate-300
                            outline-none
                            focus:ring-4
                            focus:ring-indigo-100
                            focus:border-indigo-500
                            appearance-none
                        "

                    >

                        <option value="All">All Status</option>

                        <option value="Pending">Pending</option>

                        <option value="In Progress">
                            In Progress
                        </option>

                        <option value="Resolved">
                            Resolved
                        </option>

                    </select>

                </div>

                <select

                    value={priorityFilter}

                    onChange={(e) =>
                        setPriorityFilter(e.target.value)
                    }

                    className="
                        px-5
                        py-3
                        rounded-2xl
                        border
                        border-slate-300
                        outline-none
                        focus:ring-4
                        focus:ring-indigo-100
                        focus:border-indigo-500
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

    );

}

export default ComplaintFilters;