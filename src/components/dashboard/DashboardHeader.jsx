import {
    LogOut,
    UserCircle2,
} from "lucide-react";

import NotificationBell from "../notifications/NotificationBell";

function DashboardHeader({
    user,
    notifications,
    showNotifications,
    setShowNotifications,
    markNotificationsAsRead,
    handleLogout,
}) {


    return (

        <div
            className="
            bg-white/80
            backdrop-blur-lg
            rounded-3xl
            shadow-lg
            border
            border-white/40
            px-8
            py-6
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-6
            "
        >

            {/* Left */}

            <div className="flex items-center gap-5">

                <div
                    className="
                    w-16
                    h-16
                    rounded-full
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    text-white
                    flex
                    items-center
                    justify-center
                    "
                >
                    <UserCircle2 size={36} />
                </div>

                <div>

                    <h1 className="text-3xl font-bold text-slate-800">

                        Welcome,
                        <span className="text-blue-600">
                            {" "}
                            {user?.fullName}
                        </span>
                        👋

                    </h1>

                    <p className="text-slate-500 mt-1">
                        Manage all your complaints from one place.
                    </p>

                </div>

            </div>

            {/* Right */}

            <div className="flex items-center gap-4">

                <NotificationBell
                    notifications={notifications}
                    showNotifications={showNotifications}
                    setShowNotifications={setShowNotifications}
                    markNotificationsAsRead={markNotificationsAsRead}
                />

                <button
                    onClick={handleLogout}
                    className="
                    flex
                    items-center
                    gap-2
                    bg-gradient-to-r
                    from-red-500
                    to-red-600
                    hover:from-red-600
                    hover:to-red-700
                    text-white
                    px-5
                    py-3
                    rounded-2xl
                    shadow-lg
                    transition-all
                    duration-300
                    "
                >

                    <LogOut size={18} />

                    Logout

                </button>
            
        </div>

    </div>

    );
}

export default DashboardHeader;