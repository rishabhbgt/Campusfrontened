function CommentForm({
    message,
    setMessage,
    handleComment,
}) {

    return (

        <div
            className="
                mt-10
                rounded-3xl
                bg-white
                border
                border-slate-200
                shadow-lg
                p-6
                sm:p-8
            "
        >

            {/* ================= HEADER ================= */}

            <div className="mb-5">

                <h2
                    className="
                        text-2xl
                        sm:text-3xl
                        font-bold
                        text-slate-800
                    "
                >
                    Comments
                </h2>

                <p
                    className="
                        mt-1
                        text-sm
                        sm:text-base
                        text-slate-500
                    "
                >
                    Share additional information or discuss this complaint.
                </p>

            </div>


            {/* ================= TEXTAREA ================= */}

            <textarea
                value={message}
                onChange={(e) =>
                    setMessage(e.target.value)
                }
                placeholder="Write a comment..."
                rows={4}
                className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-slate-50
                    px-5
                    py-4
                    resize-none
                    outline-none
                    text-sm
                    sm:text-base
                    text-slate-700
                    placeholder:text-slate-400
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-slate-300
                    focus:bg-white
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-100
                "
            />


            {/* ================= BUTTON ================= */}

            <div className="flex justify-end mt-4">

                <button
                    type="button"
                    onClick={handleComment}
                    disabled={!message.trim()}
                    className="
                        px-6
                        py-3
                        rounded-2xl
                        bg-gradient-to-r
                        from-blue-600
                        to-indigo-600
                        hover:from-blue-700
                        hover:to-indigo-700
                        disabled:from-slate-300
                        disabled:to-slate-400
                        disabled:cursor-not-allowed
                        text-white
                        font-semibold
                        shadow-lg
                        hover:shadow-xl
                        transition-all
                        duration-300
                        active:scale-95
                    "
                >
                    Add Comment
                </button>

            </div>

        </div>

    );

}

export default CommentForm;