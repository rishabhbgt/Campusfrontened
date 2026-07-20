import NotificationItem from "./NotificationItem";
import NotificationHeader from "./NotificationHeader";
import EmptyNotification from "./EmptyNotification";

function NotificationDropdown({

    notifications,

    markAsRead,

    markAllAsRead,

}) {

    return (

        <div
            className="
                absolute
                right-0
                mt-4
                w-[400px]
                bg-white/95
                backdrop-blur-xl
                rounded-3xl
                shadow-2xl
                border
                border-slate-200
                overflow-hidden
                z-50
                animate-in
                fade-in
                zoom-in-95
                duration-200
            "
        >

            <NotificationHeader

                unreadCount={
                    notifications.filter(
                        (notification) => !notification.isRead
                    ).length
                }

                markAllAsRead={markAllAsRead}

            />

            <div
                className="
                    max-h-[450px]
                    overflow-y-auto
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

                        />

                    ))

                )}

            </div>

        </div>

    );

}

export default NotificationDropdown;