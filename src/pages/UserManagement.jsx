import { useEffect, useState } from "react";
import api from "../services/api";

function UserManagement() {

    const [users, setUsers] = useState([]);

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

        fetchUsers();

    } catch (error) {
        console.log(error);
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

        fetchUsers();

    } catch (error) {
        console.log(error);
    }
};

const deleteUser = async (id) => {
    try {

        if (!window.confirm("Delete this user?")) return;

        const token = localStorage.getItem("token");

        await api.delete(`/users/${id}`, {
            headers: {
                Authorization: token,
            },
        });

        fetchUsers();

    } catch (error) {
        console.log(error);
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

            <div className="bg-white rounded-lg shadow">

                <table className="w-full">

                <thead className="bg-gray-200">

                <tr>

                <th className="p-3">Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>

                </tr>

                </thead>

                <tbody>

                {users.map((user)=>(

                <tr
                key={user._id}
                className="border-b"
                >

                <td className="p-3">
                {user.fullName}
                </td>

                <td>
                {user.email}
                </td>

                <td>
                {user.role}
                </td>

                <td>
                {user.isBlocked ? "Blocked":"Active"}
                </td>

                <td className="space-x-2">

    {user.isBlocked ? (

        <button
            onClick={() => unblockUser(user._id)}
            className="bg-green-500 text-white px-3 py-1 rounded"
        >
            Unblock
        </button>

    ) : (

        <button
            onClick={() => blockUser(user._id)}
            className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
            Block
        </button>

    )}

    <button
        onClick={() => deleteUser(user._id)}
        className="bg-red-500 text-white px-3 py-1 rounded"
    >
        Delete
    </button>

</td>

                </tr>

                ))}

                </tbody>

                </table>

            </div>

        </div>
    );
}

export default UserManagement;