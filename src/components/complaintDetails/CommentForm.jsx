function CommentForm({
    message,
    setMessage,
    handleComment,
}) {
    return (
        <div className="mt-10">

            <h2 className="text-2xl font-bold mb-5">
                Comments
            </h2>

            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a comment..."
                className="
                    w-full
                    border
                    border-gray-300
                    rounded-xl
                    p-4
                    resize-none
                    focus:ring-2
                    focus:ring-blue-500
                    outline-none
                "
                rows={4}
            />

            <button
                onClick={handleComment}
                className="
                    mt-4
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    transition
                "
            >
                Add Comment
            </button>

        </div>
    );
}

export default CommentForm;