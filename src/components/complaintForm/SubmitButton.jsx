function SubmitButton({
    loading,
    buttonText = "Submit Complaint",
}) {

    return (

        <button
            type="submit"
            disabled={loading}
            className={`
                w-full
                flex
                items-center
                justify-center
                py-3.5
                sm:py-4
                rounded-2xl
                font-semibold
                text-sm
                sm:text-base
                text-white
                shadow-lg
                transition-all
                duration-300
                active:scale-[0.98]

                ${
                    loading
                        ? `
                            bg-slate-400
                            cursor-not-allowed
                        `
                        : `
                            bg-gradient-to-r
                            from-blue-600
                            to-indigo-600
                            hover:from-blue-700
                            hover:to-indigo-700
                            hover:shadow-xl
                            hover:-translate-y-0.5
                        `
                }
            `}
        >

            {loading
                ? "Updating Complaint..."
                : buttonText
            }

        </button>

    );

}

export default SubmitButton;