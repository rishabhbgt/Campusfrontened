import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

import AdminHeader from "../components/adminUsers/AdminHeader";
import AdminStats from "../components/adminUsers/AdminStats";
import UserSearch from "../components/adminUsers/UserSearch";
import UserTable from "../components/adminUsers/UserTable";
import EmptyUsers from "../components/adminUsers/EmptyUsers";
import LoadingUsers from "../components/adminUsers/LoadingUsers";
import CreateUserModal from "../components/adminUsers/CreateUserModal";

function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [showCreateUser, setShowCreateUser] = useState(false);
    const [creatingUser, setCreatingUser] = useState(false);

    const currentUser = JSON.parse(
        localStorage.getItem("user")
    );

    const fetchUsers = async () => {
        try {
            setLoading(true);

            const response = await api.get("/users");

            setUsers(response.data.users);
        } catch (error) {
            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Failed to load users"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const createUser = async (formData) => {
        try {
            setCreatingUser(true);

            await api.post("/users/create", formData);

            toast.success("User created successfully");

            setShowCreateUser(false);

            fetchUsers();
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Failed to create user"
            );
        } finally {
            setCreatingUser(false);
        }
    };

    const blockUser = async (id) => {
        try {
            await api.put(`/users/block/${id}`);

            toast.success("User Blocked");

            fetchUsers();
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Failed"
            );
        }
    };

    const unblockUser = async (id) => {
        try {
            await api.put(`/users/unblock/${id}`);

            toast.success("User Unblocked");

            fetchUsers();
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Failed"
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
            toast.error(
                error.response?.data?.message ||
                "Failed"
            );
        }
    };

    const changeRole = async (id, role) => {
        try {
            await api.put(
                `/users/role/${id}`,
                { role }
            );

            toast.success("Role Updated");

            fetchUsers();
        } catch (error) {
            toast.error(
                error.response?.data?.message ||
                "Failed"
            );
        }
    };

    const filteredUsers = users.filter((user) =>
        user.fullName
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 p-8">
            <div className="max-w-7xl mx-auto">
                <AdminHeader
                    onCreateUser={() =>
                        setShowCreateUser(true)
                    }
                />

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

            {showCreateUser && (
                <CreateUserModal
                    onClose={() =>
                        setShowCreateUser(false)
                    }
                    onCreate={createUser}
                    loading={creatingUser}
                />
            )}
        </div>
    );
}

export default AdminUsers;