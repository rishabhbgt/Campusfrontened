import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

function useEditComplaint(id) {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");

    const [showPreview, setShowPreview] = useState(false);
    const [loading, setLoading] = useState(false);

    const [removeCurrentImage, setRemoveCurrentImage] =
        useState(false);

    const fetchComplaint = async () => {
        try {
            const response = await api.get(
                `/complaints/${id}`
            );

            const complaint =
                response.data.complaint;

            setTitle(complaint.title || "");
            setDescription(
                complaint.description || ""
            );
            setCategory(complaint.category || "");

            setPreview(complaint.image || "");
            setImage(null);
            setRemoveCurrentImage(false);
        } catch (error) {
            console.error(
                "Fetch Complaint Error:",
                error
            );

            toast.error(
                error.response?.data?.message ||
                "Failed to load complaint."
            );
        }
    };

    useEffect(() => {
        fetchComplaint();
    }, [id]);

    const handleImage = (file) => {
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            toast.error(
                "Image size should be less than 5 MB"
            );
            return;
        }

        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/jpg",
            "image/webp",
        ];

        if (!allowedTypes.includes(file.type)) {
            toast.error(
                "Only JPG, PNG and WEBP images are allowed"
            );
            return;
        }

        if (preview?.startsWith("blob:")) {
            URL.revokeObjectURL(preview);
        }

        const previewUrl =
            URL.createObjectURL(file);

        setImage(file);
        setPreview(previewUrl);
        setRemoveCurrentImage(false);
        setShowPreview(false);
    };

    const removeImage = () => {
        if (preview?.startsWith("blob:")) {
            URL.revokeObjectURL(preview);
        }

        setImage(null);
        setPreview("");
        setRemoveCurrentImage(true);
        setShowPreview(false);
    };

    useEffect(() => {
        return () => {
            if (preview?.startsWith("blob:")) {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    const updateComplaint = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
            toast.error(
                "Complaint title is required"
            );
            return;
        }

        if (!description.trim()) {
            toast.error(
                "Complaint description is required"
            );
            return;
        }

        if (!category) {
            toast.error(
                "Please select a category"
            );
            return;
        }

        try {
            setLoading(true);

            const formData = new FormData();

            formData.append(
                "title",
                title.trim()
            );

            formData.append(
                "description",
                description.trim()
            );

            formData.append(
                "category",
                category
            );

            formData.append(
                "removeImage",
                removeCurrentImage
                    ? "true"
                    : "false"
            );

            if (image) {
                formData.append(
                    "image",
                    image
                );
            }

            await api.put(
                `/complaints/edit/${id}`,
                formData
            );

            toast.success(
                "Complaint Updated Successfully"
            );

            navigate("/dashboard");
        } catch (error) {
            console.error(
                "Update Complaint Error:",
                error
            );

            toast.error(
                error.response?.data?.message ||
                "Update Failed"
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

        removeCurrentImage,
        setRemoveCurrentImage,

        updateComplaint,
    };
}

export default useEditComplaint;