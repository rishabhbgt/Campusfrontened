import {
Plus,
RefreshCw,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function DashboardActions({
onRefresh,
}) {

const navigate = useNavigate();

return (

    <div
        className="
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-5
            mb-6
        "
    >

        {/* ================= LEFT: SECTION TITLE ================= */}

        <div>

            <h2
                className="
                    text-2xl
                    sm:text-3xl
                    font-extrabold
                    text-slate-800
                    tracking-tight
                "
            >
                My Complaints
            </h2>

            <p
                className="
                    mt-1
                    text-sm
                    sm:text-base
                    text-slate-500
                "
            >
                Track and manage your submitted complaints.
            </p>

        </div>


        {/* ================= RIGHT: ACTION BUTTONS ================= */}

        <div
            className="
                flex
                flex-col
                sm:flex-row
                gap-3
                w-full
                sm:w-auto
            "
        >

            {/* REFRESH */}

            <button
                onClick={onRefresh}
                className="
                    group
                    flex
                    items-center
                    justify-center
                    gap-2
                    px-5
                    py-3
                    rounded-2xl
                    bg-white/80
                    backdrop-blur-xl
                    border
                    border-slate-200
                    text-slate-700
                    font-medium
                    shadow-md
                    hover:bg-slate-50
                    hover:border-indigo-300
                    hover:shadow-lg
                    transition-all
                    duration-300
                    active:scale-95
                "
            >

                <RefreshCw
                    size={18}
                    className="
                        transition-transform
                        duration-500
                        group-hover:rotate-180
                    "
                />

                Refresh

            </button>


            {/* NEW COMPLAINT */}

            <button
                onClick={() =>
                    navigate("/create-complaint")
                }
                className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    px-5
                    py-3
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    hover:from-blue-700
                    hover:to-indigo-700
                    text-white
                    font-semibold
                    shadow-lg
                    hover:shadow-xl
                    transition-all
                    duration-300
                    active:scale-95
                "
            >

                <Plus size={19} />

                New Complaint

            </button>

        </div>

    </div>

);


}

export default DashboardActions;