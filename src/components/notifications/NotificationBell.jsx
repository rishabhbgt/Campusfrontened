import { Bell } from "lucide-react";
import { useEffect, useRef } from "react";

import NotificationBadge from "./NotificationBadge";
import NotificationDropdown from "./NotificationDropdown";

function NotificationBell({

    notifications,
    showNotifications,
    setShowNotifications,
    markNotificationsAsRead,

}) {

    const dropdownRef = useRef(null);

    const unreadCount =
    notifications?.filter(
        (notification) => !notification.isRead
    ).length || 0;

    useEffect(() => {

        function handleClickOutside(event) {

            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {

                setShowNotifications(false);

            }

        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {

            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

        };

    }, [setShowNotifications]);

    return (

        <div
            ref={dropdownRef}
            className="relative"
        >

            <button
                onClick={() =>{
                const next = !showNotifications;

                setShowNotifications(next);

                if (next) {
                    markNotificationsAsRead();
                }

                }}

                className="
                    relative
                    p-3
                    rounded-2xl
                    bg-white
                    border
                    border-slate-200
                    shadow-md
                    hover:shadow-xl
                    hover:bg-blue-50
                    transition-all
                    duration-300
                "
            >

                <Bell
                    size={24}
                    className="text-gray-700"
                />

                <NotificationBadge
                    count={unreadCount}
                />

            </button>

            {

                showNotifications && (

                    <NotificationDropdown

                        notifications={notifications}

                        markNotificationsAsRead={
                            markNotificationsAsRead
                        }

                    />

                )

            }

        </div>

    );

}

export default NotificationBell;