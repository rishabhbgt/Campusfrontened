import {
    Bell,
    CheckCircle2,
    AlertTriangle,
    ArrowUpRight,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function NotificationItem({
    notification,
    markAsRead,
    onClose,
}) {
    const navigate = useNavigate();

    const getIcon = () => {
        const message =
            notification.message?.toLowerCase() || "";

        if (
            message.includes("resolved") ||
            message.includes("completed")
        ) {
            return (
                <CheckCircle2
                    size={20}
                    className="text-emerald-600"
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
                    className="text-amber-500"
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
        if (!date) {
            return "";
        }

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
            return `${Math.floor(diff / 60)}m ago`;
        }

        if (diff < 86400) {
            return `${Math.floor(diff / 3600)}h ago`;
        }

        if (diff < 604800) {
            return `${Math.floor(diff / 86400)}d ago`;
        }

        return created.toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }
        );
    };

    const handleClick = async () => {
        try {
            if (!notification.isRead) {
                const result = await markAsRead(
                    notification._id
                );

                if (!result) {
                    return;
                }
            }

            onClose?.();

            let complaintId = null;

            if (
                notification.complaint &&
                typeof notification.complaint === "object"
            ) {
                complaintId =
                    notification.complaint._id;
            } else {
                complaintId =
                    notification.complaint;
            }

            if (complaintId) {
                navigate(
                    `/complaint/${complaintId}`
                );
            }
        } catch (error) {
            console.error(
                "NOTIFICATION CLICK ERROR:",
                error
            );
        }
    };

    return (
        <button
            type="button"
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                handleClick();
            }}
            title="Open notification"
            className={`
                relative
                z-10
                pointer-events-auto

                group
                flex
                w-full
                cursor-pointer
                gap-4
                p-5
                text-left

                border-b
                border-slate-100

                transition-all
                duration-200

                hover:bg-indigo-50

                focus:outline-none
                focus:bg-indigo-50
                focus:ring-2
                focus:ring-inset
                focus:ring-indigo-500

                ${
                    !notification.isRead
                        ? "bg-indigo-50/60"
                        : "bg-white"
                }
            `}
        >
            <div
                className={`
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl

                    transition-transform
                    duration-200

                    group-hover:scale-105

                    ${
                        !notification.isRead
                            ? "bg-indigo-100"
                            : "bg-slate-100"
                    }
                `}
            >
                {getIcon()}
            </div>

            <div className="min-w-0 flex-1">
                <div
                    className="
                        flex
                        items-start
                        justify-between
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

                    {!notification.isRead && (
                        <span
                            className="
                                mt-1.5
                                h-2.5
                                w-2.5
                                shrink-0
                                rounded-full
                                bg-indigo-600
                                shadow-sm
                            "
                            aria-label="Unread"
                        />
                    )}
                </div>

                <div
                    className="
                        mt-2
                        flex
                        items-center
                        justify-between
                        gap-3
                    "
                >
                    <p
                        className="
                            text-xs
                            text-slate-400
                        "
                    >
                        {getTime(
                            notification.createdAt
                        )}
                    </p>

                    <ArrowUpRight
                        size={15}
                        className="
                            shrink-0
                            text-slate-300
                            transition-colors
                            duration-200
                            group-hover:text-indigo-500
                        "
                    />
                </div>
            </div>
        </button>
    );
}

export default NotificationItem;