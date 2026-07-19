import CreateHeader from "../components/createComplaint/CreateHeader";
import ComplaintForm from "../components/complaintForm/ComplaintForm";
import TitleInput from "../components/complaintForm/TitleInput";
import DescriptionInput from "../components/complaintForm/DescriptionInput";
import CategorySelect from "../components/complaintForm/CategorySelect";
import ImageUpload from "../components/complaintForm/ImageUpload";
import SubmitButton from "../components/complaintForm/SubmitButton";
import ImagePreviewModal from "../components/createComplaint/ImagePreviewModal";

import useCreateComplaint from "../hooks/useCreateComplaint";

function CreateComplaint() {

    const {

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

    } = useCreateComplaint();

    return (

        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 flex items-center justify-center p-6">

            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-10">

                <CreateHeader />

                <ComplaintForm
                    handleSubmit={handleSubmit}
                >

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
                        handleImage={handleImage}
                        removeImage={removeImage}
                        setShowPreview={setShowPreview}
                    />

                    <SubmitButton
                        loading={loading}
                    />

                </ComplaintForm>

            </div>

            <ImagePreviewModal
                preview={preview}
                showPreview={showPreview}
                setShowPreview={setShowPreview}
            />

        </div>

    );

}

export default CreateComplaint;