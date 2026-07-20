function AdminStats({ users }) {

    const total = users.length;

    const active = users.filter(user => !user.isBlocked).length;

    const blocked = users.filter(user => user.isBlocked).length;

    const admins = users.filter(user => user.role === "admin").length;

    return (

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">

            <div className="bg-white rounded-2xl shadow p-6">

                <p className="text-slate-500">Total Users</p>

                <h2 className="text-3xl font-bold text-blue-600">

                    {total}

                </h2>

            </div>

            <div className="bg-white rounded-2xl shadow p-6">

                <p className="text-slate-500">Active</p>

                <h2 className="text-3xl font-bold text-green-600">

                    {active}

                </h2>

            </div>

            <div className="bg-white rounded-2xl shadow p-6">

                <p className="text-slate-500">Blocked</p>

                <h2 className="text-3xl font-bold text-red-600">

                    {blocked}

                </h2>

            </div>

            <div className="bg-white rounded-2xl shadow p-6">

                <p className="text-slate-500">Admins</p>

                <h2 className="text-3xl font-bold text-purple-600">

                    {admins}

                </h2>

            </div>

        </div>

    );

}

export default AdminStats;