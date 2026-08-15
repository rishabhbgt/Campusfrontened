import {
    useCallback,
    useEffect,
    useState,
} from "react";

import api from "../services/api";
import socket from "../socket";
import toast from "react-hot-toast";


function useNotifications(user) {

    const [
        notifications,
        setNotifications,
    ] = useState([]);

    const fetchNotifications =
        useCallback(async () => {

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
                                Authorization:
                                    token,
                            },
                        }
                    );


                setNotifications(
                    response.data?.notifications || []
                );


            } catch (error) {

                console.error(
                    "Fetch Notifications Error:",
                    error
                );

            }

        }, []);

    const markAsRead =
        useCallback(async (id) => {

            try {

                const token =
                    localStorage.getItem("token");


                if (!token) {
                    return false;
                }


                await api.put(

                    `/notifications/${id}/read`,

                    {},

                    {
                        headers: {
                            Authorization:
                                token,
                        },
                    }

                );


                setNotifications(
                    (prevNotifications) =>
                        prevNotifications.map(
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
                    "Mark Notification Read Error:",
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

        }, []);

    const markAllAsRead =
        useCallback(async () => {

            try {

                const token =
                    localStorage.getItem("token");


                if (!token) {
                    return false;
                }


                await api.put(

                    "/notifications/read-all",

                    {},

                    {
                        headers: {
                            Authorization:
                                token,
                        },
                    }

                );


                setNotifications(
                    (prevNotifications) =>
                        prevNotifications.map(
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
                    "Mark All Notifications Read Error:",
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

        }, []);

    useEffect(() => {

        fetchNotifications();

    }, [
        fetchNotifications,
    ]);

    useEffect(() => {

        if (!user?.id) {
            return;
        }


        const registerUser = () => {

            socket.emit(
                "register",
                user.id
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


        const handleNewNotification = (
            data
        ) => {

            fetchNotifications();


            if (data?.message) {

                toast.success(
                    data.message
                );

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
        user?.id,
        fetchNotifications,
    ]);

    return {

        notifications,

        markAsRead,

        markAllAsRead,

    };

}


export default useNotifications;