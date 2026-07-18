import { Plus, RefreshCw } from "lucide-react";
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
                items-center
                justify-between
                gap-4
                mb-8
            "
        >

            <div>

                <h1 className="text-3xl font-bold text-gray-800">
                    My Complaints
                </h1>

                <p className="text-gray-500 mt-1">
                    Manage and track all your complaints.
                </p>

            </div>

            <div className="flex gap-3">

                <button
                    onClick={onRefresh}
                    className="
                        flex
                        items-center
                        gap-2
                        px-5
                        py-2.5
                        rounded-xl
                        bg-white
                        border
                        border-gray-300
                        hover:bg-gray-100
                        transition
                    "
                >
                    <RefreshCw size={18} />
                    Refresh
                </button>

                <button
                    onClick={() => navigate("/create-complaint")}
                    className="
                        flex
                        items-center
                        gap-2
                        px-5
                        py-2.5
                        rounded-xl
                        bg-blue-600
                        hover:bg-blue-700
                        text-white
                        shadow-md
                        transition
                    "
                >
                    <Plus size={18} />
                    New Complaint
                </button>

            </div>

        </div>

    );

}

export default DashboardActions;