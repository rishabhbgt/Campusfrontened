import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UploadCloud } from "lucide-react";
import api from "../services/api";
import toast from "react-hot-toast";

console.log("CREATE COMPLAINT COMPONENT LOADED");
function CreateComplaint() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPreview, setShowPreview] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const token = localStorage.getItem("token");

            const formData = new FormData();

            formData.append("title", title);
            formData.append("description", description);
            formData.append("category", category);

            if (image) {
                formData.append("image", image);
            }

            await api.post("/complaints", formData, {
                headers: {
                    Authorization: token,
                },
            });

            toast.success("Complaint Submitted Successfully");

            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Submission Failed");
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center p-6">

            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8">

                <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
                    Raise Complaint
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Title */}

                    <div>
                        <label className="block mb-2 font-medium">
                            Complaint Title
                        </label>

                        <input
                            type="text"
                            placeholder="Enter complaint title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Description */}

                    <div>
                        <label className="block mb-2 font-medium">
                            Description
                        </label>

                        <textarea
                            rows={5}
                            placeholder="Describe your complaint..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            className="w-full border rounded-xl px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Category */}

                    <div>
                        <label className="block mb-2 font-medium">
                            Category
                        </label>

                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                            className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            <option value="">Select Category</option>
                            <option value="Hostel">Hostel</option>
                            <option value="Mess">Mess</option>
                            <option value="Classroom">Classroom</option>
                            <option value="Library">Library</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

            {/* Upload */}
        <div className="mb-6">

            <label className="block mb-3 font-medium">
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
                transition
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
                    JPG • PNG • JPEG
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
            const allowedTypes = [
                "image/jpeg",
                "image/png",
                "image/jpg",
                "image/webp",
            ];

            if (!allowedTypes.includes(file.type)) {
                toast.error("Only JPG, PNG and WEBP images are allowed");
                return;
            }

            const imageUrl = URL.createObjectURL(file);

            setImage(file);
            setPreview(imageUrl);

        }}
    />

            {preview !== "" && (

                <div className="mt-5">

                    <img
                        src={preview}
                        alt="Preview"
                        onClick={() => setShowPreview(true)}
                        className="
                            w-full
                            h-72
                            object-cover
                            rounded-2xl
                            border
                            shadow
                            cursor-pointer
                            hover:scale-[1.02]
                            transition
                        "
                    />

                    <p className="mt-3 text-center text-sm text-gray-600">
                        {image?.name}
                    </p>

                    <button
                        type="button"
                        onClick={() => {
                            setImage(null);
                            setPreview("");
                            setShowPreview(false);
                        }}
                        className="
                            mt-3
                            w-full
                            py-2
                            rounded-lg
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

                    {/* Button */}

                    <button
                        type="submit"
                        disabled={loading}
                        className="
                        w-full
                        bg-gradient-to-r
                        from-blue-600
                        to-indigo-600
                        hover:from-blue-700
                        hover:to-indigo-700
                        text-white
                        py-3
                        rounded-xl
                        font-semibold
                        transition
                        disabled:opacity-70
                        disabled:cursor-not-allowed
                        "
                    >
                        {loading ? "Submitting..." : "Submit Complaint"}
                    </button>

                </form>

                {showPreview && (
    <div
        onClick={() => setShowPreview(false)}
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-5"
    >

        <button
            onClick={() => setShowPreview(false)}
            className="absolute top-5 right-5 text-white text-4xl font-bold"
        >
            ×
        </button>

        <img
            src={preview}
            alt="Full Preview"
            className="max-w-[90vw] max-h-[90vh] rounded-xl"

            onClick={(e) => e.stopPropagation()}
        />
    </div>
)}

        </div>

    </div>
    );
}

export default CreateComplaint;

