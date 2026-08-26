import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
    Bell,
    CheckCircle2,
    AlertTriangle,
    ArrowUpRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function NotificationBell({
    notifications = [],
    markAsRead,
    markAllAsRead,
}) {
    const [open, setOpen] = useState(false);

    const buttonRef = useRef(null);
    const dropdownRef = useRef(null);

    const navigate = useNavigate();

    const [position, setPosition] = useState({
        top: 0,
        left: 0,
    });

    const unreadCount = notifications.filter(
        (notification) => !notification.isRead
    ).length;

    const updatePosition = () => {
        if (!buttonRef.current) {
            return;
        }

        const rect =
            buttonRef.current.getBoundingClientRect();

        const dropdownWidth = 380;
        const margin = 12;

        let left =
            rect.right - dropdownWidth;

        if (left < margin) {
            left = margin;
        }

        if (
            left + dropdownWidth >
            window.innerWidth - margin
        ) {
            left =
                window.innerWidth -
                dropdownWidth -
                margin;
        }

        setPosition({
            top: rect.bottom + 10,
            left,
        });
    };

    useEffect(() => {
        if (!open) {
            return;
        }

        updatePosition();

        const handleResize = () => {
            updatePosition();
        };

        const handleScroll = () => {
            updatePosition();
        };

        window.addEventListener(
            "resize",
            handleResize
        );

        window.addEventListener(
            "scroll",
            handleScroll,
            true
        );

        return () => {
            window.removeEventListener(
                "resize",
                handleResize
            );

            window.removeEventListener(
                "scroll",
                handleScroll,
                true
            );
        };
    }, [open]);

    useEffect(() => {
        if (!open) {
            return;
        }

        const handleOutsideClick = (event) => {
            const clickedButton =
                buttonRef.current?.contains(
                    event.target
                );

            const clickedDropdown =
                dropdownRef.current?.contains(
                    event.target
                );

            if (
                !clickedButton &&
                !clickedDropdown
            ) {
                setOpen(false);
            }
        };

        document.addEventListener(
            "mousedown",
            handleOutsideClick
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            );
        };
    }, [open]);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        document.addEventListener(
            "keydown",
            handleEscape
        );

        return () => {
            document.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, []);

    const getIcon = (message = "") => {
        const text =
            message.toLowerCase();

        if (
            text.includes("resolved") ||
            text.includes("completed")
        ) {
            return (
                <CheckCircle2
                    size={20}
                    className="text-emerald-600"
                />
            );
        }

        if (
            text.includes("pending") ||
            text.includes("rejected")
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
            return "Just now";
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

        return created.toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }
        );
    };

    const handleNotificationClick = async (
        notification
    ) => {
        try {
            if (!notification.isRead) {
                const success =
                    await markAsRead(
                        notification._id
                    );

                if (!success) {
                    return;
                }
            }

            setOpen(false);

            let complaintId = null;

            if (
                notification.complaint &&
                typeof notification.complaint ===
                    "object"
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
                "Notification Click Error:",
                error
            );
        }
    };

    const dropdown = open
        ? createPortal(
                <div
                    ref={dropdownRef}
                    className="
                        fixed
                        z-[9999999]
                        w-[calc(100vw-24px)]
                        max-w-[380px]
                        overflow-hidden
                        rounded-3xl
                        border
                        border-slate-200
                        bg-white
                        shadow-2xl
                    "
                    style={{
                        top: `${position.top}px`,
                        left: `${position.left}px`,
                    }}
                >
                    {/* Header */}
                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            border-b
                            border-slate-100
                            px-5
                            py-4
                        "
                    >
                        <div>
                            <h3
                                className="
                                    text-lg
                                    font-bold
                                    text-slate-800
                                "
                            >
                                Notifications
                            </h3>

                            <p
                                className="
                                    text-xs
                                    text-slate-400
                                "
                            >
                                {notifications.length}{" "}
                                {notifications.length === 1
                                    ? "notification"
                                    : "notifications"}
                            </p>
                        </div>

                        {unreadCount > 0 && (
                            <button
                                type="button"
                                onClick={
                                    markAllAsRead
                                }
                                className="
                                    rounded-lg
                                    px-2
                                    py-1
                                    text-xs
                                    font-semibold
                                    text-indigo-600
                                    transition
                                    hover:bg-indigo-50
                                    hover:text-indigo-800
                                "
                            >
                                Mark all as read
                            </button>
                        )}
                    </div>

                    {/* Notification List */}
                    <div
                        className="
                            max-h-[60vh]
                            overflow-y-auto
                        "
                    >
                        {notifications.length === 0 ? (
                            <div
                                className="
                                    px-6
                                    py-10
                                    text-center
                                "
                            >
                                <Bell
                                    size={36}
                                    className="
                                        mx-auto
                                        mb-3
                                        text-slate-300
                                    "
                                />

                                <p
                                    className="
                                        font-semibold
                                        text-slate-600
                                    "
                                >
                                    No notifications
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-sm
                                        text-slate-400
                                    "
                                >
                                    You're all caught up.
                                </p>
                            </div>
                        ) : (
                            notifications.map(
                                (notification) => (
                                    <button
                                        key={
                                            notification._id
                                        }
                                        type="button"
                                        onClick={() =>
                                            handleNotificationClick(
                                                notification
                                            )
                                        }
                                        className={`
                                            flex
                                            w-full
                                            gap-4
                                            border-b
                                            border-slate-100
                                            p-5
                                            text-left
                                            transition
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
                                                flex
                                                h-10
                                                w-10
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-2xl
                                                bg-slate-100
                                            "
                                        >
                                            {getIcon(
                                                notification.message
                                            )}
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <div
                                                className="
                                                    flex
                                                    items-start
                                                    justify-between
                                                    gap-2
                                                "
                                            >
                                                <p
                                                    className={`
                                                        break-words
                                                        text-sm
                                                        ${
                                                            !notification.isRead
                                                                ? "font-semibold text-slate-800"
                                                                : "text-slate-600"
                                                        }
                                                    `}
                                                >
                                                    {
                                                        notification.message
                                                    }
                                                </p>

                                                {!notification.isRead && (
                                                    <span
                                                        className="
                                                            mt-1
                                                            h-2
                                                            w-2
                                                            shrink-0
                                                            rounded-full
                                                            bg-indigo-600
                                                        "
                                                    />
                                                )}
                                            </div>

                                            <div
                                                className="
                                                    mt-2
                                                    flex
                                                    items-center
                                                    justify-between
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
                                                        text-slate-300
                                                    "
                                                />
                                            </div>
                                        </div>
                                    </button>
                                )
                            )
                        )}
                    </div>
                </div>,
                document.body
            )
        : null;

    return (
        <>
            <button
                ref={buttonRef}
                type="button"
                onClick={(event) => {
                    event.stopPropagation();

                    setOpen(
                        (previous) => !previous
                    );
                }}
                aria-label="Notifications"
                aria-expanded={open}
                className={`
                    relative
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    shadow-md
                    transition-all
                    duration-300
                    hover:border-indigo-400
                    hover:bg-indigo-50
                    hover:shadow-lg
                    active:scale-95
                    ${
                        open
                            ? "border-indigo-400 bg-indigo-50"
                            : ""
                    }
                `}
            >
                <Bell
                    size={22}
                    className={
                        open
                            ? "text-indigo-600"
                            : "text-slate-700"
                    }
                />

                {unreadCount > 0 && (
                    <span
                        className="
                            absolute
                            -right-1.5
                            -top-1.5
                            flex
                            h-[21px]
                            min-w-[21px]
                            items-center
                            justify-center
                            rounded-full
                            bg-red-500
                            px-1
                            text-[10px]
                            font-bold
                            text-white
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

            {dropdown}
        </>
    );
}

export default NotificationBell;

