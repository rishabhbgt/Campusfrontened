import { useParams } from "react-router-dom";

import useEditComplaint from "../hooks/useEditComplaint";

import EditComplaintForm from "../components/editComplaint/EditComplaintForm";
import CategorySelect from "../components/editComplaint/CategorySelect";
import ImageUpload from "../components/editComplaint/ImageUpload";
import SubmitButton from "../components/editComplaint/SubmitButton";

function EditComplaint() {

    const { id } = useParams();

    const {

        title,
        setTitle,

        description,
        setDescription,

        category,
        setCategory,

        image,
        setImage,

        currentImage,

        loading,

        updateComplaint,

    } = useEditComplaint(id);

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center">

            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">

                <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">

                    Edit Complaint

                </h1>

                <form onSubmit={updateComplaint}>

                    <EditComplaintForm
                        title={title}
                        setTitle={setTitle}
                        description={description}
                        setDescription={setDescription}
                    />

                    <CategorySelect
                        category={category}
                        setCategory={setCategory}
                    />

                    <ImageUpload
                        image={image}
                        setImage={setImage}
                        currentImage={currentImage}
                    />

                    <SubmitButton
                        loading={loading}
                    />

                </form>

            </div>

        </div>

    );

}

export default EditComplaint;