import { useEffect, useState } from "react";

import socket from "../../socket";
import api from "../../services/api";

import NotificationBadge from "../notifications/NotificationBadge";
import NotificationDropdown from "../notifications/NotificationDropdown";

function AdminNotificationBell() {

    const [notifications, setNotifications] = useState([]);
    const [open, setOpen] = useState(false);


    // ================= FETCH NOTIFICATIONS =================

    const fetchNotifications = async () => {

        try {

            const token =
                localStorage.getItem("token");

            const response = await api.get(
                "/notifications",
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            setNotifications(
                response.data.notifications || []
            );

        } catch (error) {

            console.error(
                "Failed to fetch notifications:",
                error
            );

        }

    };


    // ================= MARK ONE AS READ =================

    const markAsRead = async (id) => {

        try {

            const token =
                localStorage.getItem("token");

            await api.put(
                `/notifications/${id}/read`,
                {},
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            // Update UI immediately
            setNotifications((prev) =>
                prev.map((notification) =>
                    notification._id === id
                        ? {
                            ...notification,
                            isRead: true,
                        }
                        : notification
                )
            );

        } catch (error) {

            console.error(
                "Failed to mark notification as read:",
                error
            );

        }

    };


    // ================= MARK ALL AS READ =================

    const markAllAsRead = async () => {

        try {

            const token =
                localStorage.getItem("token");

            await api.put(
                "/notifications/read-all",
                {},
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            // Update UI immediately
            setNotifications((prev) =>
                prev.map((notification) => ({
                    ...notification,
                    isRead: true,
                }))
            );

        } catch (error) {

            console.error(
                "Failed to mark all notifications as read:",
                error
            );

        }

    };


    // ================= INITIAL FETCH =================

    useEffect(() => {

        fetchNotifications();

    }, []);


    // ================= SOCKET =================

    useEffect(() => {

        const user = JSON.parse(
            localStorage.getItem("user")
        );

        if (user) {

            socket.emit(
                "register",
                user._id || user.id
            );

        }


        const handleNewNotification = () => {

            fetchNotifications();

        };


        socket.on(
            "newNotification",
            handleNewNotification
        );


        return () => {

            socket.off(
                "newNotification",
                handleNewNotification
            );

        };

    }, []);


    // ================= UNREAD COUNT =================

    const unreadCount =
        notifications.filter(
            (notification) =>
                !notification.isRead
        ).length;


    // ================= UI =================

    return (

        <div
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

export default AdminNotificationBell;