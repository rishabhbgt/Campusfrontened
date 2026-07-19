import { useParams } from "react-router-dom";

import EditHeader from "../components/editComplaint/EditHeader";
import EditComplaintForm from "../components/editComplaint/EditComplaintForm";
import CategorySelect from "../components/complaintForm/CategorySelect";
import ImageUpload from "../components/complaintForm/ImageUpload";
import SubmitButton from "../components/complaintForm/SubmitButton";

import useEditComplaint from "../hooks/useEditComplaint";

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

        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-10">

            <div className="max-w-3xl mx-auto">

                <div className="bg-white rounded-3xl shadow-xl p-8">

                    <EditHeader />

                    <EditComplaintForm
                        title={title}
                        setTitle={setTitle}
                        description={description}
                        setDescription={setDescription}
                        handleSubmit={updateComplaint}
                    >

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

                    </EditComplaintForm>

                </div>

            </div>

        </div>

    );

}

export default EditComplaint;