function SubmitButton({ loading }) {

    return (

        <button
            type="submit"
            disabled={loading}
            className={`
                w-full
                py-4
                rounded-2xl
                font-semibold
                text-white
                transition-all
                duration-300
                shadow-lg

                ${
                    loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl"
                }
            `}
        >

            {loading ? "Submitting..." : "Submit Complaint"}

        </button>

    );

}

export default SubmitButton;