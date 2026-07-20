import UserRow from "./UserRow";

function UserTable({

    users,
    currentUser,
    blockUser,
    unblockUser,
    deleteUser,
    changeRole,

}) {

    return (

        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">

            <table className="min-w-full">

                <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">

                    <tr>

                        <th className="px-6 py-4 text-left">
                            Name
                        </th>

                        <th className="px-6 py-4 text-left">
                            Email
                        </th>

                        <th className="px-6 py-4 text-center">
                            Role
                        </th>

                        <th className="px-6 py-4 text-center">
                            Change Role
                        </th>

                        <th className="px-6 py-4 text-center">
                            Status
                        </th>

                        <th className="px-6 py-4 text-center">
                            Actions
                        </th>

                    </tr>

                </thead>

                <tbody>

                    {users.map((user) => (

                        <UserRow

                            key={user._id}

                            user={user}

                            currentUser={currentUser}

                            blockUser={blockUser}

                            unblockUser={unblockUser}

                            deleteUser={deleteUser}

                            changeRole={changeRole}

                        />

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default UserTable;