import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    const currentUser = JSON.parse(localStorage.getItem("user"));

    const fetchUsers = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await api.get("/users", {
                headers: {
                    Authorization: token,
                },
            });

            setUsers(response.data.users);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const blockUser = async (id) => {
        try {
            const token = localStorage.getItem("token");

            await api.put(
                `/users/block/${id}`,
                {},
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            toast.success("User Blocked");
            fetchUsers();
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed");
        }
    };

    const unblockUser = async (id) => {
        try {
            const token = localStorage.getItem("token");

            await api.put(
                `/users/unblock/${id}`,
                {},
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            toast.success("User Unblocked");
            fetchUsers();
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed");
        }
    };

    const deleteUser = async (id) => {
        try {
            const token = localStorage.getItem("token");

            if (!window.confirm("Delete this user?")) return;

            await api.delete(`/users/${id}`, {
                headers: {
                    Authorization: token,
                },
            });

            toast.success("User Deleted");
            fetchUsers();
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed");
        }
    };

    const changeRole = async (id, role) => {
    try {
        const token = localStorage.getItem("token");

        await api.put(
            `/users/role/${id}`,
            { role },
            {
                headers: {
                    Authorization: token,
                },
            }
        );

        toast.success("Role Updated");
        fetchUsers();

    } catch (error) {
        toast.error(error.response?.data?.message || "Failed");
    }
};

    const filteredUsers = users.filter((user) =>
        user.fullName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">
                User Management
            </h1>

            <input
                type="text"
                placeholder="Search user..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border rounded-lg p-3 mb-6"
            />

            <div className="overflow-x-auto bg-white rounded-xl shadow">
                <table className="w-full">
                    <thead className="bg-purple-600 text-white">
                        <tr>
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Role</th>
                            <th className="p-3">Change Role</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr
                                key={user._id}
                                className="border-b text-center"
                            >
                                <td className="p-3">{user.fullName}</td>

                                <td className="p-3">{user.email}</td>

                                <td className="p-3">{user.role}</td>

                                <td className="p-3">

                                    {user.email === JSON.parse(localStorage.getItem("user"))?.email ? (

                                        <span className="text-gray-500 font-semibold">
                                            Current User
                                        </span>

                                    ) : (

                                        <select
                                            value={user.role}
                                            onChange={(e) =>
                                                changeRole(user._id, e.target.value)
                                            }
                                            className="border rounded px-2 py-1"
                                        >
                                            <option value="student">Student</option>
                                            <option value="faculty">Faculty</option>
                                            <option value="admin">Admin</option>
                                        </select>

                                    )}

                                </td>

                                <td className="p-3">
                                    {user.isBlocked ? (
                                        <span className="text-red-600 font-semibold">
                                            Blocked
                                        </span>
                                    ) : (
                                        <span className="text-green-600 font-semibold">
                                            Active
                                        </span>
                                    )}
                                </td>

                                <td className="p-3 space-x-2">
                                    {currentUser?.id === user._id ? (
                                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                                            Current User
                                        </span>
                                    ) : (
                                        <>
                                            {user.isBlocked ? (
                                                <button
                                                    onClick={() =>
                                                        unblockUser(user._id)
                                                    }
                                                    className="bg-green-600 text-white px-3 py-1 rounded"
                                                >
                                                    Unblock
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        blockUser(user._id)
                                                    }
                                                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                                                >
                                                    Block
                                                </button>
                                            )}

                                            <button
                                                onClick={() =>
                                                    deleteUser(user._id)
                                                }
                                                className="bg-red-600 text-white px-3 py-1 rounded"
                                            >
                                                Delete
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminUsers;