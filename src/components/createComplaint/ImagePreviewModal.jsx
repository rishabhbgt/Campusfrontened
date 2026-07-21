import { X, Maximize2 } from "lucide-react";

function ImagePreviewModal({
    preview,
    showPreview,
    setShowPreview,
}) {

    if (!showPreview || !preview) {
        return null;
    }

    return (

        <div
            className="
                fixed
                inset-0
                z-[100]
                bg-black/80
                backdrop-blur-sm
                flex
                items-center
                justify-center
                p-4
                sm:p-6
            "
            onClick={() => setShowPreview(false)}
        >

            {/* ================= MODAL ================= */}

            <div
                className="
                    relative
                    max-w-5xl
                    w-full
                    flex
                    items-center
                    justify-center
                "
                onClick={(e) => e.stopPropagation()}
            >

                {/* ================= CLOSE BUTTON ================= */}

                <button
                    type="button"
                    onClick={() => setShowPreview(false)}
                    className="
                        absolute
                        -top-3
                        -right-3
                        sm:top-3
                        sm:right-3
                        z-10
                        w-11
                        h-11
                        rounded-full
                        bg-black/70
                        hover:bg-red-500
                        text-white
                        flex
                        items-center
                        justify-center
                        shadow-xl
                        transition-all
                        duration-300
                        hover:scale-110
                    "
                >

                    <X size={24} />

                </button>


                {/* ================= IMAGE ================= */}

                <div
                    className="
                        relative
                        bg-black/40
                        rounded-2xl
                        overflow-hidden
                        shadow-2xl
                        border
                        border-white/10
                    "
                >

                    <img
                        src={preview}
                        alt="Complaint Preview"
                        className="
                            max-w-[90vw]
                            max-h-[85vh]
                            w-auto
                            h-auto
                            object-contain
                            rounded-2xl
                        "
                    />


                    {/* IMAGE LABEL */}

                    <div
                        className="
                            absolute
                            bottom-0
                            left-0
                            right-0
                            bg-gradient-to-t
                            from-black/70
                            to-transparent
                            px-5
                            py-5
                            text-white
                            flex
                            items-center
                            gap-2
                        "
                    >

                        <Maximize2 size={16} />

                        <span className="text-sm font-medium">
                            Image Preview
                        </span>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ImagePreviewModal;