import NotificationItem from "./NotificationItem";
import NotificationHeader from "./NotificationHeader";
import EmptyNotification from "./EmptyNotification";

function NotificationDropdown({
    notifications,
    markAsRead,
    markAllAsRead,
    onClose,
}) {

    const unreadCount = notifications.filter(
        (notification) => !notification.isRead
    ).length;

    return (

        <div
            className="
                absolute
                right-0
                top-full
                mt-3

                w-[calc(100vw-2rem)]
                sm:w-[380px]
                md:w-[400px]

                max-w-[400px]

                bg-white/95
                backdrop-blur-xl

                rounded-3xl

                shadow-2xl
                border
                border-slate-200

                overflow-hidden

                z-[99999]

                animate-in
                fade-in
                zoom-in-95
                duration-200
            "
        >

            {/* Header */}

            <NotificationHeader
                unreadCount={unreadCount}
                markAllAsRead={markAllAsRead}
            />


            {/* Notification List */}

            <div
                className="
                    max-h-[450px]
                    overflow-y-auto
                    overscroll-contain
                "
            >

                {notifications.length === 0 ? (

                    <EmptyNotification />

                ) : (

                    notifications.map((notification) => (

                        <NotificationItem
                            key={notification._id}
                            notification={notification}
                            markAsRead={markAsRead}
                            onClose={onClose}
                        />

                    ))

                )}

            </div>

        </div>

    );

}

export default NotificationDropdown;