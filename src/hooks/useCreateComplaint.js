import { useState } from "react";
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

    const handleImage = (e) => {

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

        setImage(file);
        setPreview(URL.createObjectURL(file));
        setShowPreview(false);

    };

    const removeImage = () => {

        setImage(null);
        setPreview("");
        setShowPreview(false);

    };

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

            await api.post(

                "/complaints",

                formData,

                {
                    headers: {
                        Authorization: token,
                    },
                }

            );

            toast.success("Complaint Submitted Successfully");

            navigate("/dashboard");

        }

        catch (error) {

            console.log(error);

            toast.error(

                error.response?.data?.message ||

                "Submission Failed"

            );

        }

        finally {

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