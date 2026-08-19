import {
    Plus,
    RefreshCw,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function DashboardActions({ onRefresh }) {
    const navigate = useNavigate();

    return (
        <div
            className="
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-end
                sm:justify-between
            "
        >
            <div>
                <p
                    className="
                        mb-1
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-indigo-600
                    "
                >
                    Complaint Management
                </p>

                <h2
                    className="
                        text-2xl
                        font-extrabold
                        tracking-tight
                        text-slate-800
                        sm:text-3xl
                    "
                >
                    My Complaints
                </h2>

                <p
                    className="
                        mt-1
                        text-sm
                        leading-6
                        text-slate-500
                        sm:text-base
                    "
                >
                    Track and manage your submitted complaints.
                </p>
            </div>

            <div
                className="
                    grid
                    w-full
                    grid-cols-2
                    gap-3
                    sm:flex
                    sm:w-auto
                "
            >
                <button
                    type="button"
                    onClick={onRefresh}
                    className="
                        group
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-2xl
                        border
                        border-white/70
                        bg-white/90
                        px-4
                        py-3
                        font-semibold
                        text-slate-700
                        shadow-lg
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-indigo-200
                        hover:text-indigo-700
                        hover:shadow-xl
                        active:scale-95
                        sm:px-5
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

                    <span>
                        Refresh
                    </span>
                </button>

                <button
                    type="button"
                    onClick={() =>
                        navigate(
                            "/create-complaint"
                        )
                    }
                    className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-2xl
                        bg-gradient-to-r
                        from-indigo-600
                        via-purple-600
                        to-blue-600
                        px-4
                        py-3
                        font-semibold
                        text-white
                        shadow-lg
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:shadow-xl
                        active:scale-95
                        sm:px-5
                    "
                >
                    <Plus size={19} />

                    <span>
                        New Complaint
                    </span>
                </button>
            </div>
        </div>
    );
}

export default DashboardActions;