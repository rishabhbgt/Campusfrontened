import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

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
        <div
            className="
                min-h-screen
                bg-gradient-to-br
                from-slate-100
                via-blue-50
                to-indigo-100
                px-4
                py-6
                sm:px-6
                sm:py-10
            "
        >
            <main className="mx-auto w-full max-w-3xl">
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="
                        mb-5
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        px-2
                        py-2
                        text-sm
                        font-semibold
                        text-slate-600
                        transition-all
                        duration-200
                        hover:-translate-x-0.5
                        hover:text-indigo-600
                    "
                >
                    <ArrowLeft size={18} />
                    Back
                </button>

                <div
                    className="
                        overflow-hidden
                        rounded-3xl
                        border
                        border-white/70
                        bg-white/90
                        shadow-2xl
                        backdrop-blur-xl
                    "
                >
                    <div
                        className="
                            h-1.5
                            bg-gradient-to-r
                            from-indigo-600
                            via-purple-600
                            to-blue-600
                        "
                    />

                    <div className="p-5 sm:p-8 lg:p-10">
                        <CreateHeader />

                        <div className="mt-8">
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
                                    setShowPreview={
                                        setShowPreview
                                    }
                                />

                                <SubmitButton
                                    loading={loading}
                                />
                            </ComplaintForm>
                        </div>
                    </div>
                </div>

                <div
                    className="
                        mt-5
                        rounded-2xl
                        border
                        border-indigo-100
                        bg-indigo-50/70
                        px-4
                        py-3
                        text-center
                    "
                >
                    <p
                        className="
                            text-xs
                            leading-5
                            text-slate-500
                            sm:text-sm
                        "
                    >
                        Please provide accurate details so the
                        administration can resolve your complaint faster.
                    </p>
                </div>
            </main>

            <ImagePreviewModal
                preview={preview}
                showPreview={showPreview}
                setShowPreview={setShowPreview}
            />
        </div>
    );
}

export default CreateComplaint;