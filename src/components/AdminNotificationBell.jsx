import { useEffect, useState } from "react";
import socket from "../socket";
import api from "../services/api";

import NotificationBadge from "./notifications/NotificationBadge";
import NotificationDropdown from "./notifications/NotificationDropdown";

function AdminNotificationBell() {
    const [notifications, setNotifications] = useState([]);
    const [open, setOpen] = useState(false);

    const fetchNotifications = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await api.get("/notifications", {
                headers: {
                    Authorization: token,
                },
            });

            setNotifications(response.data.notifications);

        } catch (error) {
            console.log(error);
        }
    };

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

    useEffect(() => {
        fetchNotifications();
    }, []);

    useEffect(() => {

        const user = JSON.parse(localStorage.getItem("user"));

        if (user) {
            socket.emit("register", user._id || user.id);
        }

        socket.on("newNotification", () => {
            fetchNotifications();
        });

        return () => {
            socket.off("newNotification");
        };

    }, []);

    const unreadCount = notifications.filter(
        (notification) => !notification.isRead
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