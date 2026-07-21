import { Bell } from "lucide-react";

function NotificationBadge({
    unreadCount,
    open,
    setOpen,
}) {

    return (

        <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Notifications"
            aria-expanded={open}
            className={`
                relative
                w-11
                h-11
                rounded-xl

                bg-white
                border
                border-slate-200

                shadow-md

                flex
                items-center
                justify-center

                transition-all
                duration-300

                hover:bg-indigo-50
                hover:border-indigo-400
                hover:shadow-lg

                active:scale-95

                ${open ? "bg-indigo-50 border-indigo-400" : ""}
            `}
        >

            <Bell
                size={22}
                className={`
                    transition-colors
                    duration-300
                    ${
                        open
                            ? "text-indigo-600"
                            : "text-slate-700"
                    }
                `}
            />


            {unreadCount > 0 && (

                <span
                    className="
                        absolute
                        -top-1.5
                        -right-1.5

                        min-w-[21px]
                        h-[21px]
                        px-1

                        rounded-full

                        bg-gradient-to-r
                        from-red-500
                        to-pink-600

                        text-white
                        text-[10px]
                        font-bold

                        flex
                        items-center
                        justify-center

                        ring-2
                        ring-white

                        shadow-md
                    "
                >

                    {unreadCount > 99
                        ? "99+"
                        : unreadCount}

                </span>

            )}

        </button>

    );

}

export default NotificationBadge;