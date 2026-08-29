import {
    LogOut,
    UserCircle2,
} from "lucide-react";

import NotificationBell from "../notifications/NotificationBell";

function DashboardHeader({
    user,
    notifications,
    markAsRead,
    markAllAsRead,
    handleLogout,
}) {
    return (
        <header
            className="
                relative
                z-50
                overflow-visible
                rounded-3xl
                border
                border-white/70
                bg-white/90
                shadow-2xl
                backdrop-blur-xl
                px-4
                py-5
                sm:px-8
                sm:py-6
            "
        >
            <div
                className="
                    absolute
                    inset-x-0
                    top-0
                    h-1
                    rounded-t-3xl
                    bg-gradient-to-r
                    from-indigo-600
                    via-purple-600
                    to-blue-600
                "
            />

            <div
                className="
                    flex
                    flex-col
                    gap-5
                    md:flex-row
                    md:items-center
                    md:justify-between
                    md:gap-6
                "
            >
                <div
                    className="
                        flex
                        min-w-0
                        items-center
                        gap-3
                        sm:gap-5
                    "
                >
                    <div
                        className="
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            bg-gradient-to-br
                            from-indigo-600
                            via-purple-600
                            to-blue-600
                            text-white
                            shadow-lg
                            shadow-indigo-200
                            sm:h-16
                            sm:w-16
                        "
                    >
                        <UserCircle2
                            size={30}
                            className="sm:h-9 sm:w-9"
                        />
                    </div>

                    <div className="min-w-0 flex-1">
                        <p
                            className="
                                mb-1
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.16em]
                                text-indigo-600
                                sm:text-xs
                            "
                        >
                            CampusOne
                        </p>

                        <h1
                            className="
                                break-words
                                text-lg
                                font-extrabold
                                leading-tight
                                tracking-tight
                                text-slate-800
                                sm:text-3xl
                            "
                        >
                            Welcome,
                            <span className="text-indigo-600">
                                {" "}
                                {user?.fullName}
                            </span>{" "}
                            👋
                        </h1>

                        <p
                            className="
                                mt-1
                                text-xs
                                leading-5
                                text-slate-500
                                sm:text-base
                                sm:leading-6
                            "
                        >
                            Manage your campus complaints
                            from one place.
                        </p>
                    </div>
                </div>

                <div
                    className="
                        flex
                        w-full
                        items-center
                        justify-end
                        gap-2
                        border-t
                        border-slate-100
                        pt-4
                        md:w-auto
                        md:border-t-0
                        md:pt-0
                    "
                >
                    <NotificationBell
                        notifications={notifications}
                        markAsRead={markAsRead}
                        markAllAsRead={markAllAsRead}
                    />

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="
                            flex
                            h-11
                            items-center
                            justify-center
                            gap-2
                            rounded-2xl
                            bg-gradient-to-r
                            from-red-500
                            to-red-600
                            px-4
                            font-semibold
                            text-white
                            shadow-lg
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:from-red-600
                            hover:to-red-700
                            hover:shadow-xl
                            active:scale-95
                            sm:px-5
                        "
                    >
                        <LogOut size={18} />

                        <span className="text-sm">
                            Logout
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default DashboardHeader;
