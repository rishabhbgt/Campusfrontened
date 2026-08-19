import {
    Search,
    Filter,
} from "lucide-react";

function Toolbar({
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
}) {
    return (
        <div
            className="
                w-full
                overflow-hidden
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
                    <h2
                        className="
                            text-base
                            font-bold
                            text-slate-800
                        "
                    >
                        Your Complaints
                    </h2>

                    <p
                        className="
                            text-xs
                            text-slate-400
                        "
                    >
                        Search and filter your complaints
                    </p>
                </div>
            </div>

            <div
                className="
                    flex
                    flex-col
                    gap-4
                    md:flex-row
                    md:items-center
                "
            >
                {/* Search */}
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

                {/* Status Filter */}
                <div className="relative w-full md:w-60">
                    <Filter
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
                            cursor-pointer
                            appearance-none
                            rounded-2xl
                            border
                            border-slate-200
                            bg-slate-50
                            py-3
                            pl-11
                            pr-4
                            font-medium
                            text-slate-700
                            outline-none
                            transition-all
                            duration-300
                            focus:border-indigo-500
                            focus:bg-white
                            focus:ring-4
                            focus:ring-indigo-100
                        "
                    >
                        <option value="All">
                            All Complaints
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

                        <option value="Rejected">
                            Rejected
                        </option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Toolbar;