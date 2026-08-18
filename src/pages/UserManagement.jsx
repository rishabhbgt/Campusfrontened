import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

function UserManagement() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = async () => {
        try {
            setLoading(true);

            const response = await api.get("/users");

            setUsers(response.data.users || []);
        } catch (error) {
            console.error("Fetch Users Error:", error);

            toast.error(
                error.response?.data?.message ||
                "Failed to load users"
            );
        } finally {
            setLoading(false);
        }
    };

    const blockUser = async (id) => {
        try {
            await api.put(`/users/block/${id}`);

            toast.success("User Blocked");

            fetchUsers();
        } catch (error) {
            console.error("Block User Error:", error);

            toast.error(
                error.response?.data?.message ||
                "Failed to block user"
            );
        }
    };

    const unblockUser = async (id) => {
        try {
            await api.put(`/users/unblock/${id}`);

            toast.success("User Unblocked");

            fetchUsers();
        } catch (error) {
            console.error("Unblock User Error:", error);

            toast.error(
                error.response?.data?.message ||
                "Failed to unblock user"
            );
        }
    };

    const deleteUser = async (id) => {
        try {
            if (!window.confirm("Delete this user?")) {
                return;
            }

            await api.delete(`/users/${id}`);

            toast.success("User Deleted");

            fetchUsers();
        } catch (error) {
            console.error("Delete User Error:", error);

            toast.error(
                error.response?.data?.message ||
                "Failed to delete user"
            );
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6">
                User Management
            </h1>

            <div className="bg-white rounded-lg shadow overflow-x-auto">
                {loading ? (
                    <div className="p-6 text-center text-gray-500">
                        Loading users...
                    </div>
                ) : users.length === 0 ? (
                    <div className="p-6 text-center text-gray-500">
                        No users found.
                    </div>
                ) : (
                    <table className="w-full">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="p-3 text-left">
                                    Name
                                </th>

                                <th className="p-3 text-left">
                                    Email
                                </th>

                                <th className="p-3 text-left">
                                    Role
                                </th>

                                <th className="p-3 text-left">
                                    Status
                                </th>

                                <th className="p-3 text-left">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.map((user) => (
                                <tr
                                    key={user._id}
                                    className="border-b"
                                >
                                    <td className="p-3">
                                        {user.fullName}
                                    </td>

                                    <td className="p-3">
                                        {user.email}
                                    </td>

                                    <td className="p-3">
                                        {user.role}
                                    </td>

                                    <td className="p-3">
                                        {user.isBlocked ? (
                                            <span className="font-semibold text-red-600">
                                                Blocked
                                            </span>
                                        ) : (
                                            <span className="font-semibold text-green-600">
                                                Active
                                            </span>
                                        )}
                                    </td>

                                    <td className="p-3 space-x-2">
                                        {user.isBlocked ? (
                                            <button
                                                onClick={() =>
                                                    unblockUser(
                                                        user._id
                                                    )
                                                }
                                                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                            >
                                                Unblock
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    blockUser(
                                                        user._id
                                                    )
                                                }
                                                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                                            >
                                                Block
                                            </button>
                                        )}

                                        <button
                                            onClick={() =>
                                                deleteUser(
                                                    user._id
                                                )
                                            }
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default UserManagement;