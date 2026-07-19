import { FileSearch, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function EmptyComplaint() {

    const navigate = useNavigate();

    return (

        <div
            className="
                bg-white
                rounded-3xl
                shadow-lg
                border
                border-slate-200
                py-20
                px-8
                text-center
            "
        >

            <div
                className="
                    w-24
                    h-24
                    mx-auto
                    rounded-full
                    bg-blue-100
                    flex
                    items-center
                    justify-center
                    mb-6
                "
            >

                <FileSearch
                    size={42}
                    className="text-blue-600"
                />

            </div>

            <h2 className="text-3xl font-bold text-slate-800">

                No Complaints Found

            </h2>

            <p className="mt-3 text-slate-500 max-w-md mx-auto">

                You haven't submitted any complaints yet.
                Create your first complaint and track its status in real time.

            </p>

            <button
                onClick={() => navigate("/create-complaint")}
                className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    px-6
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
                    transition-all
                    duration-300
                "
            >

                <Plus size={20} />

                Raise Complaint

            </button>

        </div>

    );

}

export default EmptyComplaint;