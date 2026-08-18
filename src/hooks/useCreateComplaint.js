import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

function useCreateComplaint() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");
    const [showPreview, setShowPreview] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleImage = (file) => {
        if (!file) return;

        setImage(file);

        const previewUrl = URL.createObjectURL(file);
        setPreview(previewUrl);

        setShowPreview(false);
    };

    const removeImage = () => {
        if (preview) {
            URL.revokeObjectURL(preview);
        }

        setImage(null);
        setPreview("");
        setShowPreview(false);
    };

    useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
            toast.error("Complaint title is required");
            return;
        }

        if (!description.trim()) {
            toast.error("Complaint description is required");
            return;
        }

        if (!category) {
            toast.error("Please select a category");
            return;
        }

        try {
            setLoading(true);

            const token = localStorage.getItem("token");

            if (!token) {
                toast.error("Please login again");
                navigate("/");
                return;
            }

            const formData = new FormData();

            formData.append("title", title.trim());
            formData.append("description", description.trim());
            formData.append("category", category);

            if (image) {
                formData.append("image", image);
            }

            await api.post("/complaints", formData);

            toast.success(
                "Complaint Submitted Successfully"
            );

            navigate("/dashboard");
        } catch (error) {
            console.error(
                "Create Complaint Error:",
                error
            );

            toast.error(
                error.response?.data?.message ||
                "Submission Failed"
            );
        } finally {
            setLoading(false);
        }
    };

    return {
        title,
        setTitle,

        description,
        setDescription,

        category,
        setCategory,

        image,
        preview,

        showPreview,
        setShowPreview,

        loading,

        handleImage,
        removeImage,
        handleSubmit,
    };
}

export default useCreateComplaint;