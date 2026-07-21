function NotificationHeader({
    unreadCount,
    markAllAsRead,
}) {

    return (

        <div
            className="
                flex
                items-center
                justify-between
                gap-4

                px-5
                py-4

                border-b
                border-slate-200

                bg-white/80
            "
        >

            {/* Left */}

            <div>

                <h2
                    className="
                        text-lg
                        font-bold
                        text-slate-800
                    "
                >
                    Notifications
                </h2>

                <p
                    className="
                        text-sm
                        text-slate-500
                        mt-0.5
                    "
                >
                    {unreadCount > 0
                        ? `${unreadCount} unread`
                        : "You're all caught up"}
                </p>

            </div>


            {/* Right */}

            {unreadCount > 0 && (

                <button
                    type="button"
                    onClick={markAllAsRead}
                    className="
                        text-indigo-600
                        text-sm
                        font-semibold
                        whitespace-nowrap

                        hover:text-indigo-700
                        hover:underline

                        transition-colors
                        duration-200
                    "
                >
                    Mark all read
                </button>

            )}

        </div>

    );

}

export default NotificationHeader;