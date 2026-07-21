import { UploadCloud, Image as ImageIcon, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

function ImageUpload({

    image,
    preview,
    currentImage = "",

    handleImage,
    removeImage,

    setShowPreview,

}) {

    return (

        <div className="space-y-3">

            {/* ================= LABEL ================= */}

            <div className="flex items-center justify-between">

                <label
                    className="
                        text-sm
                        sm:text-base
                        font-semibold
                        text-slate-700
                    "
                >
                    Upload Image
                </label>

                <span className="text-xs sm:text-sm text-slate-400">
                    Optional
                </span>

            </div>


            {/* ================= UPLOAD AREA ================= */}

            <label
                htmlFor="imageUpload"
                className="
                    group
                    min-h-[200px]
                    border-2
                    border-dashed
                    border-blue-200
                    bg-blue-50/40
                    rounded-2xl
                    p-6
                    sm:p-8
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:border-blue-400
                    hover:bg-blue-50
                "
            >

                <div
                    className="
                        w-16
                        h-16
                        rounded-2xl
                        bg-gradient-to-br
                        from-blue-600
                        to-indigo-600
                        text-white
                        flex
                        items-center
                        justify-center
                        shadow-lg
                        group-hover:scale-105
                        transition-transform
                        duration-300
                    "
                >

                    <UploadCloud size={30} />

                </div>


                <p
                    className="
                        mt-4
                        font-semibold
                        text-slate-700
                    "
                >
                    Click to upload an image
                </p>


                <p
                    className="
                        mt-1
                        text-sm
                        text-slate-500
                    "
                >
                    JPG, PNG, JPEG or WEBP
                </p>


                <p
                    className="
                        mt-1
                        text-xs
                        text-slate-400
                    "
                >
                    Maximum file size: 5 MB
                </p>

            </label>


            {/* ================= FILE INPUT ================= */}

            <input
                id="imageUpload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {

                    const file = e.target.files[0];

                    if (!file) return;


                    // File Size Validation

                    if (
                        file.size >
                        5 * 1024 * 1024
                    ) {

                        toast.error(
                            "Image size should be less than 5 MB"
                        );

                        e.target.value = "";

                        return;

                    }


                    // File Type Validation

                    const allowed = [
                        "image/jpeg",
                        "image/png",
                        "image/jpg",
                        "image/webp",
                    ];


                    if (!allowed.includes(file.type)) {

                        toast.error(
                            "Only JPG, PNG & WEBP allowed"
                        );

                        e.target.value = "";

                        return;

                    }


                    handleImage(file);

                }}
            />


            {/* ================= IMAGE PREVIEW ================= */}

            {(preview || currentImage) && (

                <div
                    className="
                        mt-5
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-4
                        shadow-sm
                    "
                >

                    <div className="flex items-center gap-2 mb-3">

                        <ImageIcon
                            size={18}
                            className="text-blue-600"
                        />

                        <p
                            className="
                                text-sm
                                font-semibold
                                text-slate-700
                            "
                        >
                            Image Preview
                        </p>

                    </div>


                    {/* Preview Image */}

                    <img
                        src={
                            preview ||
                            currentImage
                        }
                        alt="Complaint Preview"
                        onClick={() =>
                            setShowPreview(true)
                        }
                        className="
                            w-full
                            h-56
                            sm:h-72
                            object-cover
                            rounded-xl
                            shadow-sm
                            cursor-pointer
                            hover:scale-[1.01]
                            transition-transform
                            duration-300
                        "
                    />


                    {/* Selected File Name */}

                    {image && (

                        <p
                            className="
                                mt-3
                                text-center
                                text-sm
                                text-slate-500
                                truncate
                            "
                        >
                            {image.name}
                        </p>

                    )}


                    {/* Remove Button */}

                    <button
                        type="button"
                        onClick={removeImage}
                        className="
                            mt-4
                            w-full
                            flex
                            items-center
                            justify-center
                            gap-2
                            py-3
                            rounded-xl
                            bg-red-50
                            text-red-600
                            font-medium
                            hover:bg-red-100
                            transition-all
                            duration-300
                        "
                    >

                        <Trash2 size={18} />

                        Remove Image

                    </button>

                </div>

            )}

        </div>

    );

}

export default ImageUpload;