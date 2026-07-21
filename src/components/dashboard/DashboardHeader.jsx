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

        <header
            className="
                relative
                z-50
                bg-white/80
                backdrop-blur-xl
                rounded-3xl
                shadow-xl
                border
                border-white/60
                px-5
                sm:px-8
                py-5
                sm:py-6
            "
        >

            <div
                className="
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    md:justify-between
                    gap-5
                "
            >

                {/* ================= LEFT SIDE ================= */}

                <div className="flex items-center gap-4 sm:gap-5">

                    {/* Profile Icon */}

                    <div
                        className="
                            w-14
                            h-14
                            sm:w-16
                            sm:h-16
                            rounded-2xl
                            bg-gradient-to-br
                            from-blue-600
                            to-indigo-600
                            text-white
                            flex
                            items-center
                            justify-center
                            shadow-lg
                            shrink-0
                        "
                    >

                        <UserCircle2
                            size={34}
                            className="sm:w-9 sm:h-9"
                        />

                    </div>


                    {/* Welcome Text */}

                    <div>

                        <h1
                            className="
                                text-2xl
                                sm:text-3xl
                                font-extrabold
                                text-slate-800
                                tracking-tight
                            "
                        >

                            Welcome,

                            <span className="text-blue-600">

                                {" "}
                                {user?.fullName}

                            </span>

                            {" "}👋

                        </h1>


                        <p
                            className="
                                text-sm
                                sm:text-base
                                text-slate-500
                                mt-1
                            "
                        >
                            Manage all your complaints from one place.
                        </p>

                    </div>

                </div>


                {/* ================= RIGHT SIDE ================= */}

                <div
                    className="
                        flex
                        items-center
                        justify-end
                        gap-3
                        sm:gap-4
                    "
                >

                    {/* ONLY ONE NOTIFICATION BELL */}

                    <NotificationBell
                        notifications={notifications}
                        showNotifications={
                            showNotifications
                        }
                        setShowNotifications={
                            setShowNotifications
                        }
                        markNotificationsAsRead={
                            markNotificationsAsRead
                        }
                    />


                    {/* LOGOUT BUTTON */}

                    <button
                        onClick={handleLogout}
                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            bg-gradient-to-r
                            from-red-500
                            to-red-600
                            hover:from-red-600
                            hover:to-red-700
                            text-white
                            px-4
                            sm:px-5
                            py-3
                            rounded-2xl
                            shadow-lg
                            hover:shadow-xl
                            transition-all
                            duration-300
                            active:scale-95
                        "
                    >

                        <LogOut size={18} />

                        <span>
                            Logout
                        </span>

                    </button>

                </div>

            </div>

        </header>

    );

}

export default DashboardHeader;

