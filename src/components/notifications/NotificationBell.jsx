import { useEffect, useRef, useState } from "react";

import NotificationBadge from "./NotificationBadge";
import NotificationDropdown from "./NotificationDropdown";

function NotificationBell({
    notifications,
    markAsRead,
    markAllAsRead,
}) {
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef(null);

    const unreadCount = notifications.filter(
        (notification) => !notification.isRead
    ).length;

    useEffect(() => {

        const handleClickOutside = (event) => {

            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setOpen(false);
            }

        };

        document.addEventListener(
            "mousedown",
            handleClickOutside
        );

        return () => {

            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

        };

    }, []);

    return (

        <div
            ref={dropdownRef}
            className="
                relative
                z-[9999]
            "
        >

            <NotificationBadge
                unreadCount={unreadCount}
                open={open}
                setOpen={setOpen}
            />

            {open && (

                <NotificationDropdown
                    notifications={notifications}
                    markAsRead={markAsRead}
                    markAllAsRead={markAllAsRead}
                />

            )}

        </div>

    );

}

export default NotificationBell;