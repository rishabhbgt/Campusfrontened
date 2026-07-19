function ImagePreviewModal({

    preview,
    showPreview,
    setShowPreview,

}) {

    if (!showPreview) return null;

    return (

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
                p-6
            "

        >

            <button

                onClick={() => setShowPreview(false)}

                className="
                    absolute
                    top-6
                    right-6
                    text-white
                    text-5xl
                "

            >

                ×

            </button>

            <img

                src={preview}

                alt="Preview"

                className="
                    max-w-[90vw]
                    max-h-[90vh]
                    rounded-3xl
                    shadow-2xl
                "

                onClick={(e) =>
                    e.stopPropagation()
                }

            />

        </div>

    );

}

export default ImagePreviewModal;