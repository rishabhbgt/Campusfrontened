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
                flex
                flex-col
                items-center
                justify-between
                gap-5
                rounded-3xl
                bg-white
                p-6
                shadow-md

                lg:flex-row
            "
        >

            <div
                className="
                    relative
                    w-full
                    lg:flex-1
                "
            >

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
                        setSearch(
                            e.target.value
                        )
                    }

                    className="
                        w-full
                        rounded-2xl
                        border
                        border-slate-300
                        py-3
                        pl-12
                        pr-5
                        outline-none
                        transition
                        focus:border-indigo-500
                        focus:ring-4
                        focus:ring-indigo-100
                    "

                />

            </div>

            <div
                className="
                    flex
                    w-full
                    flex-col
                    gap-4

                    sm:flex-row

                    lg:w-auto
                "
            >

                <div
                    className="
                        relative
                        w-full
                        sm:w-auto
                    "
                >

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
                            setStatusFilter(
                                e.target.value
                            )
                        }

                        className="
                            w-full
                            appearance-none
                            rounded-2xl
                            border
                            border-slate-300
                            py-3
                            pl-11
                            pr-8
                            outline-none
                            transition
                            focus:border-indigo-500
                            focus:ring-4
                            focus:ring-indigo-100

                            sm:w-auto
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

                    className="
                        w-full
                        rounded-2xl
                        border
                        border-slate-300
                        px-5
                        py-3
                        outline-none
                        transition
                        focus:border-indigo-500
                        focus:ring-4
                        focus:ring-indigo-100

                        sm:w-auto
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