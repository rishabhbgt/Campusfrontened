function CommentList({ comments }) {

    return (

        <div className="mt-8 space-y-5">

            {comments.length === 0 && (

                <div className="text-center text-gray-500 py-10">
                    No comments yet.
                </div>

            )}

            {comments.map((comment) => (

                <div
                    key={comment._id}
                    className="
                        bg-gray-50
                        border
                        rounded-2xl
                        p-5
                    "
                >

                    <div className="flex justify-between items-center">

                        <div>

                            <h3 className="font-semibold text-gray-800">

                                {comment.user?.fullName}

                            </h3>

                            <p className="text-sm text-blue-600">

                                {comment.user?.role}

                            </p>

                        </div>

                        <span className="text-xs text-gray-500">

                            {new Date(comment.createdAt).toLocaleString()}

                        </span>

                    </div>

                    <p className="mt-4 text-gray-700 leading-7">

                        {comment.message}

                    </p>

                </div>

            ))}

        </div>

    );

}

export default CommentList;