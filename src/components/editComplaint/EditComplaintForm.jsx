function EditComplaintForm({
    title,
    setTitle,
    description,
    setDescription,
    children,
    handleSubmit,
}) {

    return (

        <form onSubmit={handleSubmit}>

            <div className="mb-5">

                <label className="block mb-2 font-medium text-gray-700">
                    Complaint Title
                </label>

                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter complaint title"
                    className="
                        w-full
                        border
                        rounded-xl
                        px-4
                        py-3
                        outline-none
                        focus:ring-2
                        focus:ring-blue-500
                    "
                    required
                />

            </div>

            <div className="mb-6">

                <label className="block mb-2 font-medium text-gray-700">
                    Description
                </label>

                <textarea
                    rows="5"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your issue..."
                    className="
                        w-full
                        border
                        rounded-xl
                        px-4
                        py-3
                        outline-none
                        resize-none
                        focus:ring-2
                        focus:ring-blue-500
                    "
                    required
                />

            </div>

            {children}

        </form>

    );

}

export default EditComplaintForm;