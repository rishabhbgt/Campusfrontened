import {
    Search,
    SlidersHorizontal,
    X,
    ChevronDown,
} from "lucide-react";

function FacultyFilters({
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
        search ||
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
                p-5
                sm:p-6
                shadow-lg
                shadow-slate-200/40
                backdrop-blur-xl
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


            {/* Header */}

            <div
                className="
                    relative
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >

                    <div
                        className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-2xl
                            bg-indigo-50
                            text-indigo-600
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
                                font-bold
                                text-slate-900
                            "
                        >
                            Find Complaints
                        </h2>

                        <p
                            className="
                                text-sm
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
                            self-start
                            rounded-xl
                            border
                            border-slate-200
                            bg-white
                            px-4
                            py-2
                            text-sm
                            font-semibold
                            text-slate-600
                            shadow-sm
                            transition-all
                            hover:border-red-200
                            hover:bg-red-50
                            hover:text-red-600
                            sm:self-auto
                        "
                    >

                        <X size={16} />

                        Clear Filters

                    </button>

                )}

            </div>


            {/* Filter Controls */}

            <div
                className="
                    relative
                    mt-6
                    grid
                    grid-cols-1
                    gap-4
                    md:grid-cols-2
                    xl:grid-cols-4
                "
            >

                {/* Search */}

                <div
                    className="
                        relative
                        md:col-span-2
                        xl:col-span-1
                    "
                >

                    <Search
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

                    <input
                        type="search"
                        value={search}
                        onChange={(e) =>
                            setSearch(
                                e.target.value
                            )
                        }
                        placeholder="Search complaints..."
                        aria-label="Search complaints"
                        className="
                            h-12
                            w-full
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            pl-11
                            pr-4
                            text-sm
                            text-slate-700
                            outline-none
                            transition-all
                            placeholder:text-slate-400
                            focus:border-indigo-400
                            focus:ring-4
                            focus:ring-indigo-500/10
                        "
                    />

                </div>


                {/* Status */}

                <div className="relative">

                    <select
                        value={statusFilter}
                        onChange={(e) =>
                            setStatusFilter(
                                e.target.value
                            )
                        }
                        aria-label="Filter by status"
                        className="
                            h-12
                            w-full
                            appearance-none
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            px-4
                            pr-10
                            text-sm
                            font-medium
                            text-slate-700
                            outline-none
                            transition-all
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


                    <ChevronDown
                        size={17}
                        className="
                            pointer-events-none
                            absolute
                            right-4
                            top-1/2
                            -translate-y-1/2
                            text-slate-400
                        "
                    />

                </div>


                {/* Priority */}

                <div className="relative">

                    <select
                        value={priorityFilter}
                        onChange={(e) =>
                            setPriorityFilter(
                                e.target.value
                            )
                        }
                        aria-label="Filter by priority"
                        className="
                            h-12
                            w-full
                            appearance-none
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            px-4
                            pr-10
                            text-sm
                            font-medium
                            text-slate-700
                            outline-none
                            transition-all
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


                    <ChevronDown
                        size={17}
                        className="
                            pointer-events-none
                            absolute
                            right-4
                            top-1/2
                            -translate-y-1/2
                            text-slate-400
                        "
                    />

                </div>


                {/* Category */}

                <div className="relative">

                    <select
                        value={categoryFilter}
                        onChange={(e) =>
                            setCategoryFilter(
                                e.target.value
                            )
                        }
                        aria-label="Filter by category"
                        className="
                            h-12
                            w-full
                            appearance-none
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            px-4
                            pr-10
                            text-sm
                            font-medium
                            text-slate-700
                            outline-none
                            transition-all
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


                    <ChevronDown
                        size={17}
                        className="
                            pointer-events-none
                            absolute
                            right-4
                            top-1/2
                            -translate-y-1/2
                            text-slate-400
                        "
                    />

                </div>

            </div>

        </section>

    );

}

export default FacultyFilters;