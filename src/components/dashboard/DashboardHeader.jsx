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
                px-5
                py-5
                sm:px-8
                sm:py-6
            "
        >
            {/* Top gradient line */}
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

            {/* Header Content */}
            <div
                className="
                    flex
                    items-center
                    justify-between
                    gap-5
                "
            >
                {/* User Info */}
                <div className="flex items-center gap-4 sm:gap-5">
                    <div
                        className="
                            flex
                            h-14
                            w-14
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
                            size={34}
                            className="sm:h-9 sm:w-9"
                        />
                    </div>

                    <div className="min-w-0 pr-2">
                        <p
                            className="
                                mb-1
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.18em]
                                text-indigo-600
                            "
                        >
                            CampusOne
                        </p>

                        <h1
                            className="
                                text-xl
                                font-extrabold
                                tracking-tight
                                text-slate-800
                                sm:text-3xl
                            "
                        >
                            Welcome,
                            <span className="text-indigo-600">
                                {" "}
                                {user?.fullName}
                            </span>
                            {" "}👋
                        </h1>

                        <p
                            className="
                                mt-1
                                text-sm
                                leading-6
                                text-slate-500
                                sm:text-base
                            "
                        >
                            Manage your campus complaints
                            from one place.
                        </p>
                    </div>
                </div>

                {/* Actions */}
                <div
                    className="
                        absolute
                        right-4
                        top-4

                        flex
                        items-center
                        gap-2

                        sm:right-6
                        sm:top-6
                        sm:gap-3

                        md:static
                    "
                >
                    {/* ONE NotificationBell ONLY */}
                    <NotificationBell
                        notifications={notifications}
                        markAsRead={markAsRead}
                        markAllAsRead={markAllAsRead}
                    />

                    {/* Logout */}
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

                            sm:h-auto
                            sm:py-3
                            sm:px-5
                        "
                    >
                        <LogOut size={18} />

                        <span className="hidden sm:inline">
                            Logout
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default DashboardHeader;

