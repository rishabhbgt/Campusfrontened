function SubmitButton({ loading }) {

    return (

        <button
            type="submit"
            disabled={loading}
            className={`
                w-full
                py-3
                rounded-xl
                font-semibold
                text-white
                transition-all
                duration-300
                ${
                    loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"
                }
            `}
        >

            {loading ? "Updating..." : "Update Complaint"}

        </button>

    );

}

export default SubmitButton;