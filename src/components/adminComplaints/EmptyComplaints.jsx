import {
    ClipboardX,
    Plus,
    RefreshCw,
} from "lucide-react";

function EmptyComplaints() {
    return (
        <div
            className="
                flex
                min-h-[360px]
                flex-col
                items-center
                justify-center
                rounded-3xl
                border
                border-white/70
                bg-white/90
                px-6
                py-12
                text-center
                shadow-xl
                backdrop-blur-xl
                sm:px-10
            "
        >
            <div
                className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-3xl
                    bg-gradient-to-br
                    from-indigo-100
                    to-blue-100
                    text-indigo-600
                    shadow-inner
                "
            >
                <ClipboardX size={38} />
            </div>

            <p
                className="
                    mt-6
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-indigo-600
                "
            >
                Nothing here yet
            </p>

            <h2
                className="
                    mt-2
                    text-2xl
                    font-extrabold
                    tracking-tight
                    text-slate-800
                "
            >
                No Complaints Found
            </h2>

            <p
                className="
                    mt-3
                    max-w-lg
                    text-sm
                    leading-6
                    text-slate-500
                    sm:text-base
                "
            >
                There are no complaints matching your current
                search or filter. Try changing the filter or
                submit a new complaint.
            </p>

            <div
                className="
                    mt-7
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                "
            >
                <button
                    type="button"
                    onClick={() =>
                        window.location.reload()
                    }
                    className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        px-5
                        py-3
                        font-semibold
                        text-slate-700
                        shadow-md
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:border-indigo-200
                        hover:text-indigo-700
                        hover:shadow-lg
                        active:scale-95
                    "
                >
                    <RefreshCw size={18} />
                    Refresh
                </button>

                <button
                    type="button"
                    onClick={() =>
                        (window.location.href =
                            "/create-complaint")
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
                        px-5
                        py-3
                        font-semibold
                        text-white
                        shadow-lg
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:shadow-xl
                        active:scale-95
                    "
                >
                    <Plus size={18} />
                    New Complaint
                </button>
            </div>
        </div>
    );
}

export default EmptyComplaints;