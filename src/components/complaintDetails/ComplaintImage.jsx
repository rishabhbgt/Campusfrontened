function ComplaintImage({ image }) {

    if (!image) return null;

    return (
        <div className="mb-8">

            <img
                src={image}
                alt="Complaint"
                className="
                    w-full
                    h-[420px]
                    object-cover
                    rounded-2xl
                    shadow-lg
                "
            />

        </div>
    );
}

export default ComplaintImage;