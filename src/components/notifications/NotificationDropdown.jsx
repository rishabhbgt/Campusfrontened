import NotificationItem from "./NotificationItem";
import NotificationHeader from "./NotificationHeader";
import EmptyNotification from "./EmptyNotification";

function NotificationDropdown({
    notifications,
    markAsRead,
    markAllAsRead,
    onClose,
}) {

    const unreadCount =
        notifications.filter(
            (notification) =>
                !notification.isRead
        ).length;


    return (

        <div
            className="
                fixed
                left-2
                right-2
                top-[76px]

                w-auto
                max-w-none

                sm:absolute
                sm:left-auto
                sm:right-0
                sm:top-[calc(100%+12px)]

                sm:w-[380px]
                md:w-[400px]
                md:max-w-[400px]

                overflow-hidden

                rounded-3xl

                border
                border-slate-200

                bg-white

                shadow-2xl

                z-[999999]

                animate-in
                fade-in
                zoom-in-95
                duration-200
            "
        >

            <NotificationHeader
                unreadCount={unreadCount}
                markAllAsRead={markAllAsRead}
            />

            <div
                className="
                    max-h-[70vh]
                    overflow-y-auto
                    overscroll-contain
                "
            >

                {notifications.length === 0 ? (

                    <EmptyNotification />

                ) : (

                    notifications.map(
                        (notification) => (

                            <NotificationItem
                                key={
                                    notification._id
                                }
                                notification={
                                    notification
                                }
                                markAsRead={
                                    markAsRead
                                }
                                onClose={
                                    onClose
                                }
                            />

                        )
                    )

                )}

            </div>

        </div>

    );

}

export default NotificationDropdown;