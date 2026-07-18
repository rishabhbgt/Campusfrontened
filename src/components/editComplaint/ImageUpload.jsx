import { useState, useEffect } from "react";

function ImageUpload({
    image,
    setImage,
    currentImage,
}) {

    const [preview, setPreview] = useState("");

    useEffect(() => {

        if (image) {

            const objectUrl = URL.createObjectURL(image);

            setPreview(objectUrl);

            return () => URL.revokeObjectURL(objectUrl);

        }

    }, [image]);

    return (

        <div className="mb-6">

            <label className="block mb-2 font-medium text-gray-700">
                Upload Image
            </label>

            {(preview || currentImage) && (

                <img
                    src={preview || currentImage}
                    alt="Preview"
                    className="
                        w-full
                        h-64
                        object-cover
                        rounded-xl
                        shadow
                        mb-4
                    "
                />

            )}

            <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-3
                    file:bg-blue-600
                    file:text-white
                    file:border-0
                    file:px-4
                    file:py-2
                    file:rounded-lg
                    file:cursor-pointer
                "
            />

        </div>

    );

}

export default ImageUpload;