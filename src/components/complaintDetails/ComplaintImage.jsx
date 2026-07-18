import { useState } from "react";

function ComplaintImage({ image }) {

    const [showPreview, setShowPreview] = useState(false);

    if (!image) return null;

    return (
        <>
            <img
                src={image}
                alt="Complaint"
                onClick={() => setShowPreview(true)}
                className="
                    w-full
                    h-[420px]
                    object-cover
                    rounded-2xl
                    shadow-lg
                    cursor-pointer
                    hover:scale-[1.01]
                    transition
                "
            />

            {showPreview && (
                <div
                    onClick={() => setShowPreview(false)}
                    className="
                        fixed
                        inset-0
                        bg-black/80
                        flex
                        items-center
                        justify-center
                        z-50
                        p-5
                    "
                >
                    <button
                        onClick={() => setShowPreview(false)}
                        className="
                            absolute
                            top-5
                            right-5
                            text-white
                            text-4xl
                            font-bold
                        "
                    >
                        ×
                    </button>

                    <img
                        src={image}
                        alt="Preview"
                        className="
                            max-w-[90vw]
                            max-h-[90vh]
                            rounded-xl
                        "
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}

export default ComplaintImage;