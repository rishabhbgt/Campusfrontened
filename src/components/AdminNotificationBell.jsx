import { useEffect, useState } from "react";
import socket from "../socket";
import api from "../services/api";

import NotificationBadge from "./notifications/NotificationBadge";
import NotificationDropdown from "./notifications/NotificationDropdown";

function AdminNotificationBell() {

    const [notifications, setNotifications] = useState([]);
    const [open, setOpen] = useState(false);

    // Fetch all notifications
    const fetchNotifications = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await api.get(
                "/notifications",
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            setNotifications(
                response.data.notifications
            );

        } catch (error) {

            console.log(error);

        }

    };


    // Mark one notification as read
    const markAsRead = async (id) => {

        try {

            const token = localStorage.getItem("token");

            await api.put(
                `/notifications/${id}/read`,
                {},
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            fetchNotifications();

        } catch (error) {

            console.log(error);

        }

    };


    // Mark all notifications as read
    const markAllAsRead = async () => {

        try {

            const token = localStorage.getItem("token");

            await api.put(
                "/notifications/read-all",
                {},
                {
                    headers: {
                        Authorization: token,
                    },
                }
            );

            fetchNotifications();

        } catch (error) {

            console.log(error);

        }

    };


    // Fetch notifications when component loads
    useEffect(() => {

        fetchNotifications();

    }, []);


    // Socket notification listener
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


    const unreadCount =
        notifications.filter(
            (notification) =>
                !notification.isRead
        ).length;


    return (

        <div className="relative">

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