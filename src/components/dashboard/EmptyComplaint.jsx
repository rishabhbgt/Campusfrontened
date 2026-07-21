import { FileSearch, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function EmptyComplaint() {

    const navigate = useNavigate();

    return (

        <div
            className="
                bg-white/80
                backdrop-blur-lg
                rounded-3xl
                shadow-xl
                border
                border-white/60
                py-16
                sm:py-20
                px-6
                sm:px-8
                text-center
                transition-all
                duration-300
                hover:shadow-2xl
            "
        >

            {/* Icon */}

            <div
                className="
                    w-20
                    h-20
                    sm:w-24
                    sm:h-24
                    mx-auto
                    rounded-3xl
                    bg-gradient-to-br
                    from-blue-100
                    to-indigo-100
                    flex
                    items-center
                    justify-center
                    mb-6
                    shadow-inner
                "
            >

                <FileSearch
                    size={42}
                    className="text-indigo-600"
                />

            </div>


            {/* Heading */}

            <h2
                className="
                    text-2xl
                    sm:text-3xl
                    font-extrabold
                    text-slate-800
                "
            >
                No Complaints Found
            </h2>


            {/* Description */}

            <p
                className="
                    mt-3
                    text-sm
                    sm:text-base
                    text-slate-500
                    max-w-lg
                    mx-auto
                    leading-relaxed
                "
            >
                You haven't submitted any complaints yet.
                Raise your first complaint and track its status
                easily from your dashboard.
            </p>


            {/* Button */}

            <button
                onClick={() =>
                    navigate("/create-complaint")
                }
                className="
                    mt-8
                    inline-flex
                    items-center
                    justify-center
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
                    hover:shadow-xl
                    hover:-translate-y-0.5
                    active:scale-95
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
