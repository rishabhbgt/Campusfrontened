import { useEffect, useRef, useState } from "react";
import { Bell } from "lucide-react";

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

        return () =>

            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );

    }, []);

    return (

        <div
            className="relative"
            ref={dropdownRef}
        >

            <button

                onClick={() =>
                    setOpen(!open)
                }

                className="
                    relative
                    w-12
                    h-12
                    rounded-2xl
                    bg-white
                    border
                    border-slate-200
                    shadow-md
                    flex
                    items-center
                    justify-center
                    hover:bg-indigo-50
                    hover:border-indigo-300
                    transition-all
                    duration-300
                "

            >

                <Bell
                    size={22}
                    className="
                        text-slate-700
                    "
                />

                <NotificationBadge
                    count={unreadCount}
                />

            </button>

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