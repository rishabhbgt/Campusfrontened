import {
    useCallback,
    useEffect,
    useState,
} from "react";

import api from "../services/api";
import socket from "../socket";
import toast from "react-hot-toast";

function useNotifications(user) {
    const [notifications, setNotifications] = useState([]);

    const userId = user?.id || user?._id;
    const fetchNotifications = useCallback(async () => {
        try {
            const response = await api.get(
                "/notifications"
            );

            const data =
                response.data?.notifications ??
                response.data ??
                [];

            const notificationList = Array.isArray(data)
                ? data
                : [];

            setNotifications(notificationList);
        } catch (error) {
            console.error(
                "Fetch Notifications Error:",
                error
            );

            setNotifications([]);
        }
    }, []);

    const markAsRead = useCallback(async (id) => {
        try {
            await api.put(
                `/notifications/${id}/read`,
                {}
            );

            setNotifications((previous) =>
                previous.map((notification) =>
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
                "Mark Notification Read Error:",
                error
            );

            toast.error(
                error.response?.data?.message ||
                "Failed to mark notification as read"
            );

            return false;
        }
    }, []);

    const markAllAsRead = useCallback(async () => {
        try {
            await api.put(
                "/notifications/read-all",
                {}
            );

            setNotifications((previous) =>
                previous.map((notification) => ({
                    ...notification,
                    isRead: true,
                }))
            );

            toast.success(
                "All notifications marked as read"
            );

            return true;
        } catch (error) {
            console.error(
                "Mark All Notifications Read Error:",
                error
            );

            toast.error(
                error.response?.data?.message ||
                "Failed to mark all notifications as read"
            );

            return false;
        }
    }, []);


    useEffect(() => {
        fetchNotifications();
    }, [fetchNotifications]);

    useEffect(() => {
        const handleFocus = () => {
            fetchNotifications();
        };

        window.addEventListener(
            "focus",
            handleFocus
        );

        return () => {
            window.removeEventListener(
                "focus",
                handleFocus
            );
        };
    }, [fetchNotifications]);

    useEffect(() => {
        if (!userId) {
            return;
        }

        const registerUser = () => {
            socket.emit(
                "register",
                userId
            );
        };

        if (socket.connected) {
            registerUser();
        } else {
            socket.on(
                "connect",
                registerUser
            );
        }

        const handleNewNotification = (data) => {
            fetchNotifications();

            if (data?.message) {
                toast.success(data.message);
            }
        };

        socket.on(
            "newNotification",
            handleNewNotification
        );

        return () => {
            socket.off(
                "connect",
                registerUser
            );

            socket.off(
                "newNotification",
                handleNewNotification
            );
        };
    }, [
        userId,
        fetchNotifications,
    ]);

    return {
        notifications,
        markAsRead,
        markAllAsRead,
    };
}

export default useNotifications;