import { Bell } from "lucide-react";

function NotificationBadge({
    unreadCount,
    open,
    setOpen,
}) {
    return (
        <button
            onClick={() => setOpen(!open)}
            className="
                relative
                w-11
                h-11
                rounded-xl
                bg-white
                border
                border-slate-200
                shadow-md
                hover:bg-indigo-50
                hover:border-indigo-400
                transition-all
                duration-300
                flex
                items-center
                justify-center
            "
        >
            <Bell
                size={22}
                className="text-slate-700"
            />

            {unreadCount > 0 && (
                <span
                    className="
                        absolute
                        -top-1
                        -right-1
                        min-w-[22px]
                        h-[22px]
                        px-1
                        rounded-full
                        bg-gradient-to-r
                        from-red-500
                        to-pink-600
                        text-white
                        text-[11px]
                        font-bold
                        flex
                        items-center
                        justify-center
                        ring-2
                        ring-white
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

