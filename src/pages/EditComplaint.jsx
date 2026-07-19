import { useParams } from "react-router-dom";

import EditHeader from "../components/editComplaint/EditHeader";
import ComplaintForm from "../components/complaintForm/ComplaintForm";
import TitleInput from "../components/complaintForm/TitleInput";
import DescriptionInput from "../components/complaintForm/DescriptionInput";
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
        preview,

        setPreview,
        setShowPreview,

        currentImage,

        loading,

        handleImage,
        removeImage,

        updateComplaint,

    } = useEditComplaint(id);

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 py-10">

            <div className="max-w-3xl mx-auto">

                <div className="bg-white rounded-3xl shadow-xl p-8">

                    <EditHeader />

                    <ComplaintForm handleSubmit={updateComplaint}>

                        <TitleInput
                            title={title}
                            setTitle={setTitle}
                        />

                        <DescriptionInput
                            description={description}
                            setDescription={setDescription}
                        />

                        <CategorySelect
                            category={category}
                            setCategory={setCategory}
                        />

                        <ImageUpload
                            image={image}
                            preview={preview}
                            currentImage={currentImage}
                            setPreview={setPreview}
                            setShowPreview={setShowPreview}
                            handleImage={handleImage}
                            removeImage={removeImage}
                        />

                        <SubmitButton loading={loading} />

                    </ComplaintForm>

                </div>

            </div>

        </div>

    );

}

export default EditComplaint;