import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

import AdminHeader from "../components/adminUsers/AdminHeader";
import AdminStats from "../components/adminUsers/AdminStats";
import UserSearch from "../components/adminUsers/UserSearch";
import UserTable from "../components/adminUsers/UserTable";
import EmptyUsers from "../components/adminUsers/EmptyUsers";
import LoadingUsers from "../components/adminUsers/LoadingUsers";

function AdminUsers() {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const currentUser = JSON.parse(localStorage.getItem("user"));

    const fetchUsers = async () => {

        try {

            setLoading(true);

            const token = localStorage.getItem("token");

            const response = await api.get("/users", {
                headers: {
                    Authorization: token,
                },
            });

            setUsers(response.data.users);

        } catch (error) {

            console.log(error);
            toast.error("Failed to load users");

        } finally {

            setLoading(false);

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

            if (!window.confirm("Delete this user?")) return;

            const token = localStorage.getItem("token");

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

        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-8">

            <div className="max-w-7xl mx-auto">

                <AdminHeader />

                <AdminStats users={users} />

                <UserSearch
                    search={search}
                    setSearch={setSearch}
                />

                {loading ? (

                    <LoadingUsers />

                ) : filteredUsers.length === 0 ? (

                    <EmptyUsers />

                ) : (

                    <UserTable
                        users={filteredUsers}
                        currentUser={currentUser}
                        blockUser={blockUser}
                        unblockUser={unblockUser}
                        deleteUser={deleteUser}
                        changeRole={changeRole}
                    />

                )}

            </div>

        </div>

    );

}

export default AdminUsers;