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
            bg-white/80
            backdrop-blur-xl
            border
            border-white/60
            rounded-3xl
            shadow-lg
            p-4
            sm:p-5
        "
    >

        <div
            className="
                flex
                flex-col
                md:flex-row
                gap-4
                md:items-center
            "
        >

            {/* ================= SEARCH ================= */}

            <div className="relative flex-1">

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
                    placeholder="Search complaints..."
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    className="
                        w-full
                        bg-slate-50
                        border
                        border-slate-200
                        rounded-2xl
                        pl-12
                        pr-4
                        py-3
                        text-slate-700
                        placeholder:text-slate-400
                        outline-none
                        transition-all
                        duration-300
                        focus:bg-white
                        focus:border-indigo-400
                        focus:ring-4
                        focus:ring-indigo-100
                    "
                />

            </div>


            {/* ================= STATUS FILTER ================= */}

            <div className="relative w-full md:w-56">

                <Filter
                    size={19}
                    className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                        pointer-events-none
                    "
                />

                <select
                    value={statusFilter}
                    onChange={(e) =>
                        setStatusFilter(e.target.value)
                    }
                    className="
                        w-full
                        appearance-none
                        bg-slate-50
                        border
                        border-slate-200
                        rounded-2xl
                        pl-11
                        pr-4
                        py-3
                        text-slate-700
                        font-medium
                        outline-none
                        cursor-pointer
                        transition-all
                        duration-300
                        focus:bg-white
                        focus:border-indigo-400
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