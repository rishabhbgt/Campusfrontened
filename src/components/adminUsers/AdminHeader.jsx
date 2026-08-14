import { UserPlus } from "lucide-react";

function AdminHeader({
    onCreateUser,
}) {

    return (

        <div
            className="
                mb-8
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
                sm:justify-between
            "
        >

            <div>

                <h1
                    className="
                        text-4xl
                        font-bold
                        text-slate-800
                    "
                >
                    👥 User Management
                </h1>


                <p
                    className="
                        mt-2
                        text-lg
                        text-slate-500
                    "
                >
                    Manage students, faculty and
                    administrators from one place.
                </p>

            </div>

            <button
                type="button"
                onClick={onCreateUser}
                className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2

                    rounded-2xl

                    bg-gradient-to-r
                    from-indigo-600
                    to-blue-600

                    px-5
                    py-3

                    font-semibold
                    text-white

                    shadow-lg
                    shadow-indigo-500/20

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:shadow-xl
                    hover:shadow-indigo-500/30

                    active:scale-95

                    focus:outline-none
                    focus:ring-2
                    focus:ring-indigo-500
                    focus:ring-offset-2
                "
            >

                <UserPlus size={18} />

                Create User

            </button>

        </div>

    );

}

export default AdminHeader;