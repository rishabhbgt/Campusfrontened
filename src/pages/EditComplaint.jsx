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

        <div
            className="
                min-h-screen
                bg-gradient-to-br
                from-slate-100
                via-blue-50
                to-indigo-100
                px-4
                sm:px-6
                lg:px-8
                py-8
                sm:py-10
                lg:py-12
            "
        >

            <main
                className="
                    max-w-3xl
                    mx-auto
                "
            >

                {/* ================= EDIT COMPLAINT CARD ================= */}

                <div
                    className="
                        bg-white/80
                        backdrop-blur-xl
                        rounded-3xl
                        shadow-2xl
                        border
                        border-white/60
                        overflow-hidden
                    "
                >

                    {/* ================= HEADER ================= */}

                    <div className="px-5 sm:px-8 pt-6 sm:pt-8">

                        <EditHeader />

                    </div>


                    {/* ================= FORM ================= */}

                    <div className="px-5 sm:px-8 pb-8">

                        <ComplaintForm
                            handleSubmit={updateComplaint}
                        >

                            {/* Title */}

                            <TitleInput
                                title={title}
                                setTitle={setTitle}
                            />


                            {/* Description */}

                            <DescriptionInput
                                description={description}
                                setDescription={setDescription}
                            />


                            {/* Category */}

                            <CategorySelect
                                category={category}
                                setCategory={setCategory}
                            />


                            {/* Image */}

                            <ImageUpload
                                image={image}
                                preview={preview}
                                currentImage={currentImage}
                                setPreview={setPreview}
                                setShowPreview={setShowPreview}
                                handleImage={handleImage}
                                removeImage={removeImage}
                            />


                            {/* Submit */}

                            <SubmitButton
                                loading={loading}
                                buttonText="Submit Complaint"
                            />

                        </ComplaintForm>

                    </div>

                </div>

            </main>

        </div>

    );

}

export default EditComplaint;

