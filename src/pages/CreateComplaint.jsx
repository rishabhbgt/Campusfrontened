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
                py-6
                sm:py-10
                px-4
                sm:px-6
            "
        >

            <main className="max-w-3xl mx-auto">


                {/* ================= BACK BUTTON ================= */}

                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="
                        inline-flex
                        items-center
                        gap-2
                        text-slate-600
                        hover:text-blue-600
                        font-medium
                        transition
                        mb-5
                    "
                >

                    <ArrowLeft size={19} />

                    Back

                </button>


                {/* ================= FORM CARD ================= */}

                <div
                    className="
                        bg-white
                        rounded-3xl
                        shadow-2xl
                        border
                        border-white/60
                        overflow-hidden
                    "
                >

                    {/* TOP ACCENT */}

                    <div
                        className="
                            h-2
                            bg-gradient-to-r
                            from-blue-600
                            via-indigo-600
                            to-purple-600
                        "
                    />


                    <div
                        className="
                            p-5
                            sm:p-8
                            lg:p-10
                        "
                    >

                        {/* ================= HEADER ================= */}

                        <CreateHeader />


                        {/* ================= FORM ================= */}

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


                {/* ================= HELPER TEXT ================= */}

                <p
                    className="
                        text-center
                        text-xs
                        sm:text-sm
                        text-slate-500
                        mt-5
                    "
                >
                    Please provide accurate details so the
                    administration can resolve your complaint faster.
                </p>

            </main>


            {/* ================= IMAGE PREVIEW ================= */}

            <ImagePreviewModal
                preview={preview}
                showPreview={showPreview}
                setShowPreview={setShowPreview}
            />

        </div>

    );

}

export default CreateComplaint;