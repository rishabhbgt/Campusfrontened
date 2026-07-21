function NotificationHeader({
    unreadCount,
    markAllAsRead,
}) {
    return (
        <div className="flex items-center justify-between px-5 py-4 border-b">
            <div>
                <h2 className="text-lg font-bold">
                    Notifications
                </h2>

                <p className="text-sm text-slate-500">
                    {unreadCount} unread
                </p>
            </div>

            <button
                onClick={markAllAsRead}
                className="
                    text-indigo-600
                    text-sm
                    font-semibold
                    hover:underline
                "
            >
                Mark all read
            </button>
        </div>
    );
}

export default NotificationHeader;