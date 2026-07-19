import { UploadCloud } from "lucide-react";
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

        <div className="mb-6">

            <label className="block mb-3 font-medium text-slate-700">
                Upload Image (Optional)
            </label>

            <label
                htmlFor="imageUpload"
                className="
                    border-2
                    border-dashed
                    border-blue-300
                    rounded-2xl
                    p-8
                    flex
                    flex-col
                    items-center
                    justify-center
                    cursor-pointer
                    hover:bg-blue-50
                    transition-all
                "
            >

                <UploadCloud
                    size={50}
                    className="text-blue-500"
                />

                <p className="mt-3 font-medium">
                    Click to Upload
                </p>

                <p className="text-sm text-gray-500">
                    JPG • PNG • JPEG • WEBP
                </p>

            </label>

            <input

                id="imageUpload"

                type="file"

                accept="image/*"

                className="hidden"

                onChange={(e) => {

                    const file = e.target.files[0];

                    if (!file) return;

                    if (file.size > 5 * 1024 * 1024) {

                        toast.error("Image size should be less than 5 MB");

                        return;

                    }

                    const allowed = [
                        "image/jpeg",
                        "image/png",
                        "image/jpg",
                        "image/webp",
                    ];

                    if (!allowed.includes(file.type)) {

                        toast.error("Only JPG, PNG & WEBP allowed");

                        return;

                    }

                    handleImage(file);

                }}

            />

            {(preview || currentImage) && (

                <div className="mt-5">

                    <img

                        src={preview || currentImage}

                        alt="Preview"

                        onClick={() => setShowPreview(true)}

                        className="
                            w-full
                            h-72
                            object-cover
                            rounded-2xl
                            shadow
                            cursor-pointer
                            hover:scale-[1.02]
                            transition
                        "

                    />

                    {image && (

                        <p className="mt-3 text-center text-sm text-gray-500">

                            {image.name}

                        </p>

                    )}

                    <button

                        type="button"

                        onClick={removeImage}

                        className="
                            mt-3
                            w-full
                            py-2
                            rounded-xl
                            bg-red-50
                            text-red-600
                            hover:bg-red-100
                            transition
                        "

                    >

                        Remove Image

                    </button>

                </div>

            )}

        </div>

    );

}

export default ImageUpload;