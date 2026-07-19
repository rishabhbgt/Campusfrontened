import { Bell, CheckCircle2 } from "lucide-react";

function NotificationItem({ notification }) {

    return (

        <div
            className={`
                relative
                flex
                items-start
                gap-4
                px-5
                py-4
                transition-all
                duration-300
                hover:bg-slate-50
                border-b
                last:border-none
                ${notification.isRead ? "opacity-70" : "bg-blue-50/40"}
            `}
        >

            {/* Icon */}

            <div
                className="
                    w-12
                    h-12
                    rounded-full
                    bg-blue-100
                    flex
                    items-center
                    justify-center
                    shrink-0
                "
            >
                {
                    notification.type === "STATUS_UPDATE"
                    ? (
                        <CheckCircle2
                            className="text-green-600"
                            size={22}
                        />
                    )
                    : (
                        <Bell
                            className="text-blue-600"
                            size={22}
                        />
                    )
                }
            </div>

            {/* Content */}

            <div className="flex-1">

                <p className="text-gray-800 leading-relaxed break-words">

                    {notification.message}

                </p>

                <p className="text-xs text-gray-500 mt-2">

                    {
                        new Date(notification.createdAt).toLocaleString("en-IN", {
                        day: "numeric",
                        month: "short",
                        hour: "2-digit",
                        minute: "2-digit",
                    })
                    }

                </p>

            </div>

            {/* Unread Dot */}

            {
                !notification.isRead && (

                    <span
                        className="
                            mt-2
                            w-3
                            h-3
                            rounded-full
                            bg-blue-600
                            shrink-0
                        "
                    />

                )
            }

        </div>

    );

}

export default NotificationItem;