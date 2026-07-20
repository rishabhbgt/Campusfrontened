import RoleBadge from "./RoleBadge";
import StatusBadge from "./StatusBadge";
import UserActions from "./UserActions";

function UserRow({
    user,
    currentUser,
    blockUser,
    unblockUser,
    deleteUser,
    changeRole,
}) {

    const isCurrentUser = currentUser?.id === user._id;

    return (

        <tr className="border-b hover:bg-slate-50 transition">

            <td className="px-6 py-4 font-medium">
                {user.fullName}
            </td>

            <td className="px-6 py-4 text-slate-600">
                {user.email}
            </td>

            <td className="px-6 py-4 text-center">
                <RoleBadge role={user.role} />
            </td>

            <td className="px-6 py-4 text-center">

                {isCurrentUser ? (

                    <span className="text-slate-500 font-semibold">
                        Current User
                    </span>

                ) : (

                    <select
                        value={user.role}
                        onChange={(e) =>
                            changeRole(user._id, e.target.value)
                        }
                        className="border rounded-lg px-3 py-2"
                    >
                        <option value="student">Student</option>
                        <option value="faculty">Faculty</option>
                        <option value="admin">Admin</option>
                    </select>

                )}

            </td>

            <td className="px-6 py-4 text-center">
                <StatusBadge blocked={user.isBlocked} />
            </td>

            <td className="px-6 py-4 text-center">

                <UserActions
                    user={user}
                    currentUser={currentUser}
                    blockUser={blockUser}
                    unblockUser={unblockUser}
                    deleteUser={deleteUser}
                />

            </td>

        </tr>

    );

}

export default UserRow;