import { useEffect, useState } from "react";

import socket from "../../socket";
import api from "../../services/api";

import NotificationBadge from "../notifications/NotificationBadge";
import NotificationDropdown from "../notifications/NotificationDropdown";

import toast from "react-hot-toast";

function AdminNotificationBell() {

    const [
        notifications,
        setNotifications,
    ] = useState([]);

    const [
        open,
        setOpen,
    ] = useState(false);


    // ==========================================
    // FETCH NOTIFICATIONS
    // ==========================================

    const fetchNotifications = async () => {

        try {

            const token =
                localStorage.getItem("token");


            if (!token) {
                return;
            }


            const response =
                await api.get(
                    "/notifications",
                    {
                        headers: {
                            Authorization: token,
                        },
                    }
                );


            setNotifications(
                response.data?.notifications || []
            );


        } catch (error) {

            console.error(
                "Failed to fetch notifications:",
                error
            );

        }

    };


    // ==========================================
    // MARK ONE AS READ
    // ==========================================

    const markAsRead = async (id) => {

        try {

            const token =
                localStorage.getItem("token");


            if (!token) {
                throw new Error(
                    "Authentication token missing"
                );
            }


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
            setNotifications(
                (prev) =>
                    prev.map(
                        (notification) =>
                            notification._id === id
                                ? {
                                    ...notification,
                                    isRead: true,
                                }
                                : notification
                    )
            );


            return true;


        } catch (error) {

            console.error(
                "Failed to mark notification as read:",
                error
            );


            toast.error(
                error.response
                    ?.data
                    ?.message ||
                "Failed to mark notification as read"
            );


            return false;

        }

    };


    // ==========================================
    // MARK ALL AS READ
    // ==========================================

    const markAllAsRead = async () => {

        try {

            const token =
                localStorage.getItem("token");


            if (!token) {
                throw new Error(
                    "Authentication token missing"
                );
            }


            await api.put(

                "/notifications/read-all",

                {},

                {
                    headers: {
                        Authorization: token,
                    },
                }

            );


            setNotifications(
                (prev) =>
                    prev.map(
                        (notification) => ({
                            ...notification,
                            isRead: true,
                        })
                    )
            );


            toast.success(
                "All notifications marked as read"
            );


            return true;


        } catch (error) {

            console.error(
                "Failed to mark all notifications as read:",
                error
            );


            toast.error(
                error.response
                    ?.data
                    ?.message ||
                "Failed to mark all notifications as read"
            );


            return false;

        }

    };


    // ==========================================
    // INITIAL FETCH
    // ==========================================

    useEffect(() => {

        fetchNotifications();

    }, []);


    // ==========================================
    // SOCKET
    // ==========================================

    useEffect(() => {

        const storedUser =
            localStorage.getItem("user");


        if (!storedUser) {
            return;
        }


        let user;

        try {

            user =
                JSON.parse(storedUser);

        } catch (error) {

            console.error(
                "Invalid user data:",
                error
            );

            return;

        }


        const userId =
            user?._id ||
            user?.id;


        if (userId) {

            socket.emit(
                "register",
                userId
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


    // ==========================================
    // UNREAD COUNT
    // ==========================================

    const unreadCount =
        notifications.filter(
            (notification) =>
                !notification.isRead
        ).length;


    // ==========================================
    // UI
    // ==========================================

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
                    notifications={
                        notifications
                    }

                    markAsRead={
                        markAsRead
                    }

                    markAllAsRead={
                        markAllAsRead
                    }

                    onClose={() =>
                        setOpen(false)
                    }
                />

            )}

        </div>

    );

}

export default AdminNotificationBell;