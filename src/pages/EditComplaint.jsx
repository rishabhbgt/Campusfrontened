import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";

function EditComplaint() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);

    
    useEffect(() => {
    const fetchComplaint = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await api.get(`/complaints/${id}`, {
                headers: {
                    Authorization: token,
                },
            });

            const complaint = response.data.complaint;

            setTitle(complaint.title);
            setDescription(complaint.description);
            setCategory(complaint.category);
        } catch (error) {
            console.log(error);
        }
    };

    fetchComplaint();
}, [id]);

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const token = localStorage.getItem("token");

        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("category", category);

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
    } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || "Update Failed");
    }
};

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">

                <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    Edit Complaint
                </h1>

                <form onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label className="block mb-2">Title</label>

                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2">Description</label>

                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2">Category</label>

                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full border rounded-lg px-4 py-2"
                        >
                            <option value="">Select Category</option>
                            <option value="Hostel">Hostel</option>
                            <option value="Mess">Mess</option>
                            <option value="Library">Library</option>
                            <option value="Classroom">Classroom</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2">Upload New Image</label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="w-full border rounded-lg px-4 py-2"
                        />
                    </div>

                    <button
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                        Update Complaint
                    </button>

                </form>

            </div>
        </div>
    );
}

export default EditComplaint;