import { useState } from "react";
import { Maximize2, X } from "lucide-react";

function ComplaintImage({ image }) {

    const [showPreview, setShowPreview] = useState(false);

    if (!image) return null;

    return (

        <>

            {/* ================= IMAGE CONTAINER ================= */}

            <div
                className="
                    relative
                    group
                    overflow-hidden
                    rounded-3xl
                    border
                    border-slate-200
                    bg-slate-100
                    shadow-lg
                "
            >

                <img
                    src={image}
                    alt="Complaint"
                    onClick={() =>
                        setShowPreview(true)
                    }
                    className="
                        w-full
                        h-64
                        sm:h-80
                        lg:h-[420px]
                        object-cover
                        cursor-pointer
                        transition-transform
                        duration-500
                        group-hover:scale-105
                    "
                />


                {/* Hover Overlay */}

                <div
                    className="
                        absolute
                        inset-0
                        bg-black/0
                        group-hover:bg-black/20
                        transition-all
                        duration-300
                        pointer-events-none
                    "
                />


                {/* View Full Image */}

                <div
                    className="
                        absolute
                        bottom-4
                        right-4
                        flex
                        items-center
                        gap-2
                        px-4
                        py-2
                        rounded-xl
                        bg-black/60
                        text-white
                        text-sm
                        font-medium
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                        pointer-events-none
                    "
                >

                    <Maximize2 size={16} />

                    View Image

                </div>

            </div>


            {/* ================= FULL SCREEN PREVIEW ================= */}

            {showPreview && (

                <div
                    onClick={() =>
                        setShowPreview(false)
                    }
                    className="
                        fixed
                        inset-0
                        z-[100]
                        bg-black/90
                        backdrop-blur-sm
                        flex
                        items-center
                        justify-center
                        p-4
                        sm:p-8
                    "
                >

                    {/* Close Button */}

                    <button
                        type="button"
                        onClick={() =>
                            setShowPreview(false)
                        }
                        className="
                            absolute
                            top-5
                            right-5
                            sm:top-7
                            sm:right-7
                            w-11
                            h-11
                            rounded-full
                            bg-white/10
                            hover:bg-white/20
                            text-white
                            flex
                            items-center
                            justify-center
                            transition
                        "
                    >

                        <X size={26} />

                    </button>


                    {/* Preview Image */}

                    <img
                        src={image}
                        alt="Complaint Preview"
                        className="
                            max-w-full
                            max-h-[90vh]
                            object-contain
                            rounded-2xl
                            shadow-2xl
                        "
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                    />

                </div>

            )}

        </>

    );

}

export default ComplaintImage;