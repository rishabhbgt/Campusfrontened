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

            const token = localStorage.getItem("token");

            const response = await api.get(
                `/complaints/${id}`,
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            const complaint = response.data.complaint;

            setTitle(complaint.title);

            setDescription(complaint.description);

            setCategory(complaint.category);

            setPreview(complaint.image);

        }

        catch (error) {

            console.log(error);

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

        setRemoveCurrentImage(false);
        
        setShowPreview(false);


    };

    const removeImage = () => {

        setImage(null);

        setPreview("");

        setRemoveCurrentImage(true);

        setShowPreview(false);


        }

    const updateComplaint = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            const token = localStorage.getItem("token");

            const formData = new FormData();

            formData.append("title", title);

            formData.append("description", description);

            formData.append("category", category);

            formData.append(
                "removeImage",
                removeCurrentImage ? "true" : "false"
            );

            if (image) {

                formData.append("image", image);

            }

            await api.put(

                `/complaints/edit/${id}`,

                formData,

                {

                    headers: {

                        Authorization: token,

                    },

                }

            );

            toast.success("Complaint Updated Successfully");

            navigate("/dashboard");

        }

        catch (error) {

            console.log(error);

            toast.error(

                error.response?.data?.message ||

                "Update Failed"

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
        removeCurrentImage,
        setRemoveCurrentImage,

        updateComplaint,

    };

}

export default useEditComplaint;