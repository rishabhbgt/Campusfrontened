import {
    Bell,
    CheckCircle2,
    AlertTriangle,
} from "lucide-react";

function NotificationItem({
    notification,
    markAsRead,
}) {

    const getIcon = () => {

        const message =
            notification.message?.toLowerCase() || "";

        if (message.includes("resolved")) {

            return (
                <CheckCircle2
                    size={20}
                    className="text-green-600"
                />
            );

        }

        if (
            message.includes("pending") ||
            message.includes("rejected")
        ) {

            return (
                <AlertTriangle
                    size={20}
                    className="text-yellow-500"
                />
            );

        }

        return (
            <Bell
                size={20}
                className="text-indigo-600"
            />
        );

    };


    const getTime = (date) => {

        if (!date) return "";

        const now = new Date();
        const created = new Date(date);

        const diff = Math.floor(
            (now - created) / 1000
        );

        if (diff < 60) {

            return diff <= 1
                ? "Just now"
                : `${diff}s ago`;

        }

        if (diff < 3600) {

            return `${Math.floor(
                diff / 60
            )}m ago`;

        }

        if (diff < 86400) {

            return `${Math.floor(
                diff / 3600
            )}h ago`;

        }

        if (diff < 604800) {

            return `${Math.floor(
                diff / 86400
            )}d ago`;

        }

        return created.toLocaleDateString();

    };


    const handleClick = () => {

        if (!notification.isRead) {

            markAsRead(
                notification._id
            );

        }

    };


    return (

        <div
            onClick={handleClick}
            className={`
                flex
                gap-4

                p-5

                cursor-pointer

                border-b
                border-slate-100

                transition-all
                duration-300

                hover:bg-indigo-50

                ${
                    !notification.isRead
                        ? "bg-indigo-50/60"
                        : "bg-white"
                }
            `}
        >

            {/* Notification Icon */}

            <div
                className={`
                    w-11
                    h-11
                    rounded-2xl

                    flex
                    items-center
                    justify-center

                    shrink-0

                    ${
                        !notification.isRead
                            ? "bg-indigo-100"
                            : "bg-slate-100"
                    }
                `}
            >

                {getIcon()}

            </div>


            {/* Content */}

            <div className="flex-1 min-w-0">

                <div
                    className="
                        flex
                        justify-between
                        items-start
                        gap-3
                    "
                >

                    <p
                        className={`
                            text-sm
                            leading-relaxed

                            break-words

                            ${
                                !notification.isRead
                                    ? "font-semibold text-slate-800"
                                    : "text-slate-600"
                            }
                        `}
                    >

                        {notification.message}

                    </p>


                    {/* Unread Indicator */}

                    {!notification.isRead && (

                        <span
                            className="
                                w-2.5
                                h-2.5
                                rounded-full

                                bg-indigo-600

                                mt-1.5

                                shrink-0

                                shadow-sm
                            "
                        />

                    )}

                </div>


                {/* Time */}

                <p
                    className="
                        text-xs
                        text-slate-400
                        mt-2
                    "
                >

                    {getTime(
                        notification.createdAt
                    )}

                </p>

            </div>

        </div>

    );

}

export default NotificationItem;