import {
    Search,
    SlidersHorizontal,
    RotateCcw,
    X,
} from "lucide-react";

function ComplaintFilters({
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    priorityFilter,
    setPriorityFilter,
    categoryFilter,
    setCategoryFilter,
}) {

    const hasActiveFilters =
        search.trim() !== "" ||
        statusFilter !== "All" ||
        priorityFilter !== "All" ||
        categoryFilter !== "All";


    const clearFilters = () => {

        setSearch("");
        setStatusFilter("All");
        setPriorityFilter("All");
        setCategoryFilter("All");

    };


    return (

        <section
            className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/60
                bg-white/80
                backdrop-blur-xl
                p-5
                sm:p-6
                shadow-xl
                shadow-slate-200/40
            "
        >

            {/* Decorative Background */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-indigo-200/20
                    blur-3xl
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-20
                    -left-20
                    h-48
                    w-48
                    rounded-full
                    bg-blue-200/20
                    blur-3xl
                "
            />


            {/* Header */}

            <div
                className="
                    relative
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    mb-5
                "
            >

                <div className="flex items-center gap-3">

                    <div
                        className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            bg-gradient-to-br
                            from-indigo-600
                            to-blue-600
                            text-white
                            shadow-lg
                            shadow-indigo-500/20
                        "
                    >

                        <SlidersHorizontal
                            size={21}
                        />

                    </div>


                    <div>

                        <h2
                            className="
                                text-lg
                                sm:text-xl
                                font-bold
                                text-slate-900
                            "
                        >
                            Find Complaints
                        </h2>

                        <p
                            className="
                                mt-0.5
                                text-xs
                                sm:text-sm
                                text-slate-500
                            "
                        >
                            Search and filter your assigned complaints
                        </p>

                    </div>

                </div>


                {/* Clear Filters */}

                {hasActiveFilters && (

                    <button
                        type="button"
                        onClick={clearFilters}
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-slate-200
                            bg-white
                            px-4
                            py-2.5
                            text-sm
                            font-semibold
                            text-slate-600
                            shadow-sm
                            transition-all
                            duration-200
                            hover:border-red-200
                            hover:bg-red-50
                            hover:text-red-600
                            focus:outline-none
                            focus:ring-2
                            focus:ring-red-500
                            focus:ring-offset-2
                        "
                    >

                        <RotateCcw
                            size={16}
                        />

                        Clear Filters

                    </button>

                )}

            </div>


            {/* Filter Controls */}

            <div
                className="
                    relative
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4
                    gap-3
                "
            >

                {/* Search */}

                <div
                    className="
                        relative
                        sm:col-span-2
                        lg:col-span-1
                    "
                >

                    <Search
                        size={19}
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
                        type="search"
                        value={search}
                        onChange={(event) =>
                            setSearch(
                                event.target.value
                            )
                        }
                        placeholder="Search complaints..."
                        aria-label="Search complaints"
                        className="
                            w-full
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            py-3
                            pl-11
                            pr-10
                            text-sm
                            text-slate-800
                            placeholder:text-slate-400
                            outline-none
                            transition-all
                            duration-200
                            focus:border-indigo-400
                            focus:ring-4
                            focus:ring-indigo-500/10
                        "
                    />


                    {search && (

                        <button
                            type="button"
                            onClick={() =>
                                setSearch("")
                            }
                            aria-label="Clear search"
                            className="
                                absolute
                                right-3
                                top-1/2
                                -translate-y-1/2
                                flex
                                h-7
                                w-7
                                items-center
                                justify-center
                                rounded-lg
                                text-slate-400
                                hover:bg-slate-100
                                hover:text-slate-600
                            "
                        >

                            <X size={16} />

                        </button>

                    )}

                </div>


                {/* Status Filter */}

                <select
                    value={statusFilter}
                    onChange={(event) =>
                        setStatusFilter(
                            event.target.value
                        )
                    }
                    aria-label="Filter by status"
                    className="
                        w-full
                        cursor-pointer
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-3
                        text-sm
                        font-medium
                        text-slate-700
                        outline-none
                        transition-all
                        duration-200
                        focus:border-indigo-400
                        focus:ring-4
                        focus:ring-indigo-500/10
                    "
                >

                    <option value="All">
                        All Statuses
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

                </select>


                {/* Priority Filter */}

                <select
                    value={priorityFilter}
                    onChange={(event) =>
                        setPriorityFilter(
                            event.target.value
                        )
                    }
                    aria-label="Filter by priority"
                    className="
                        w-full
                        cursor-pointer
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-3
                        text-sm
                        font-medium
                        text-slate-700
                        outline-none
                        transition-all
                        duration-200
                        focus:border-indigo-400
                        focus:ring-4
                        focus:ring-indigo-500/10
                    "
                >

                    <option value="All">
                        All Priorities
                    </option>

                    <option value="High">
                        High Priority
                    </option>

                    <option value="Medium">
                        Medium Priority
                    </option>

                    <option value="Low">
                        Low Priority
                    </option>

                </select>


                {/* Category Filter */}

                <select
                    value={categoryFilter}
                    onChange={(event) =>
                        setCategoryFilter(
                            event.target.value
                        )
                    }
                    aria-label="Filter by category"
                    className="
                        w-full
                        cursor-pointer
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-3
                        text-sm
                        font-medium
                        text-slate-700
                        outline-none
                        transition-all
                        duration-200
                        focus:border-indigo-400
                        focus:ring-4
                        focus:ring-indigo-500/10
                    "
                >

                    <option value="All">
                        All Categories
                    </option>

                    <option value="Hostel">
                        Hostel
                    </option>

                    <option value="Library">
                        Library
                    </option>

                    <option value="Mess">
                        Mess
                    </option>

                    <option value="Canteen">
                        Canteen
                    </option>

                    <option value="Classroom">
                        Classroom
                    </option>

                    <option value="Other">
                        Other
                    </option>

                </select>

            </div>

        </section>

    );

}

export default ComplaintFilters;