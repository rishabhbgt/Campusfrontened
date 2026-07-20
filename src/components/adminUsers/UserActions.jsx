function UserActions({

    user,
    currentUser,

    blockUser,
    unblockUser,
    deleteUser,

}) {

    const isCurrentUser = currentUser?.id === user._id;

    if (isCurrentUser) {

        return (

            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">

                Current User

            </span>

        );

    }

    return (

        <div className="flex justify-center gap-2">

            {user.isBlocked ? (

                <button
                    onClick={() => unblockUser(user._id)}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg transition"
                >
                    Unblock
                </button>

            ) : (

                <button
                    onClick={() => blockUser(user._id)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg transition"
                >
                    Block
                </button>

            )}

            <button
                onClick={() => deleteUser(user._id)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg transition"
            >
                Delete
            </button>

        </div>

    );

}

export default UserActions;