import NotificationItem from "./NotificationItem";
import EmptyNotification from "./EmptyNotification";

function NotificationDropdown({
    notifications,
    markNotificationsAsRead,
}) {

    return (

        <div
            className="
                absolute
                right-0
                mt-3
                w-[380px]
                bg-white
                rounded-2xl
                shadow-2xl
                border
                border-gray-200
                overflow-hidden
                z-50
                animate-in
                fade-in
                slide-in-from-top-2
            "
        >

            {/* Header */}

            <div
                className="
                    flex
                    items-center
                    justify-between
                    px-5
                    py-4
                    border-b
                    bg-gray-50
                "
            >

                <h2 className="font-bold text-lg text-gray-800">
                    Notifications
                </h2>

                {
                    notifications?.length > 0 && (

                        <button
                            onClick={markNotificationsAsRead}
                            className="
                                text-sm
                                text-blue-600
                                hover:text-blue-700
                                font-medium
                            "
                        >
                            Mark all read
                        </button>

                    )
                }

            </div>

            {/* Body */}

            <div
                className="
                    max-h-[420px]
                    overflow-y-auto
                "
            >

                {
                    notifications?.length === 0
                    ? (
                        <EmptyNotification />
                    )
                    : (

                        notifications.map((notification) => (

                            <NotificationItem
                                key={notification._id}
                                notification={notification}
                            />

                        ))

                    )
                }

            </div>

        </div>

    );

}

export default NotificationDropdown;