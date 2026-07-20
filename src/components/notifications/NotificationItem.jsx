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

        if (
            notification.message
                ?.toLowerCase()
                .includes("resolved")
        ) {

            return (
                <CheckCircle2
                    size={20}
                    className="text-green-600"
                />
            );

        }

        if (
            notification.message
                ?.toLowerCase()
                .includes("pending")
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

        const now = new Date();

        const created = new Date(date);

        const diff =
            Math.floor(
                (now - created) / 1000
            );

        if (diff < 60)
            return `${diff}s ago`;

        if (diff < 3600)
            return `${Math.floor(
                diff / 60
            )}m ago`;

        if (diff < 86400)
            return `${Math.floor(
                diff / 3600
            )}h ago`;

        return created.toLocaleDateString();

    };

    return (

        <div

            onClick={() =>
                markAsRead(notification._id)
            }

            className={`
                flex
                gap-4
                p-5
                cursor-pointer
                transition-all
                duration-300
                border-b
                border-slate-100
                hover:bg-indigo-50
                ${
                    !notification.isRead
                        ? "bg-indigo-50/60"
                        : "bg-white"
                }
            `}

        >

            <div
                className="
                    w-11
                    h-11
                    rounded-2xl
                    bg-gradient-to-br
                    from-indigo-100
                    to-purple-100
                    flex
                    items-center
                    justify-center
                    shrink-0
                "
            >

                {getIcon()}

            </div>

            <div className="flex-1">

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
                            ${
                                !notification.isRead
                                    ? "font-semibold text-slate-800"
                                    : "text-slate-600"
                            }
                        `}
                    >

                        {notification.message}

                    </p>

                    {!notification.isRead && (

                        <span
                            className="
                                w-2.5
                                h-2.5
                                rounded-full
                                bg-indigo-600
                                mt-2
                                shrink-0
                            "
                        />

                    )}

                </div>

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