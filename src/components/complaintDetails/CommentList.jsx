function CommentList({ comments }) {

    return (

        <div className="mt-8 space-y-5">

            {/* ================= EMPTY STATE ================= */}

            {comments.length === 0 && (

                <div
                    className="
                        bg-white
                        border
                        border-slate-200
                        rounded-3xl
                        shadow-sm
                        py-12
                        px-6
                        text-center
                    "
                >

                    <p
                        className="
                            text-lg
                            font-semibold
                            text-slate-700
                        "
                    >
                        No comments yet
                    </p>

                    <p
                        className="
                            mt-1
                            text-sm
                            text-slate-500
                        "
                    >
                        Be the first to add a comment to this complaint.
                    </p>

                </div>

            )}


            {/* ================= COMMENT LIST ================= */}

            {comments.map((comment) => (

                <div
                    key={comment._id}
                    className="
                        bg-white
                        border
                        border-slate-200
                        rounded-3xl
                        p-5
                        sm:p-6
                        shadow-sm
                        hover:shadow-md
                        transition-all
                        duration-300
                    "
                >

                    {/* User Information */}

                    <div
                        className="
                            flex
                            flex-col
                            sm:flex-row
                            sm:items-start
                            sm:justify-between
                            gap-3
                        "
                    >

                        <div className="flex items-center gap-3">

                            {/* Avatar */}

                            <div
                                className="
                                    w-11
                                    h-11
                                    rounded-full
                                    bg-gradient-to-br
                                    from-blue-600
                                    to-indigo-600
                                    text-white
                                    flex
                                    items-center
                                    justify-center
                                    font-bold
                                    shadow-sm
                                    shrink-0
                                "
                            >
                                {comment.user?.fullName
                                    ?.charAt(0)
                                    ?.toUpperCase() || "U"}
                            </div>


                            {/* Name + Role */}

                            <div>

                                <h3
                                    className="
                                        font-semibold
                                        text-slate-800
                                    "
                                >
                                    {comment.user?.fullName || "Unknown User"}
                                </h3>

                                <p
                                    className="
                                        text-xs
                                        sm:text-sm
                                        text-blue-600
                                        font-medium
                                        mt-0.5
                                    "
                                >
                                    {comment.user?.role}
                                </p>

                            </div>

                        </div>


                        {/* Date */}

                        <span
                            className="
                                text-xs
                                text-slate-400
                                sm:text-right
                            "
                        >
                            {new Date(
                                comment.createdAt
                            ).toLocaleString()}
                        </span>

                    </div>


                    {/* Comment Message */}

                    <div
                        className="
                            mt-5
                            pt-4
                            border-t
                            border-slate-100
                        "
                    >

                        <p
                            className="
                                text-sm
                                sm:text-base
                                text-slate-600
                                leading-7
                                whitespace-pre-wrap
                            "
                        >
                            {comment.message}
                        </p>

                    </div>

                </div>

            ))}

        </div>

    );

}

export default CommentList;
