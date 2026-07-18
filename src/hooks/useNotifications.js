import { useEffect, useState } from "react";
import api from "../services/api";
import socket from "../socket";
import toast from "react-hot-toast";

function useNotifications(user) {

    const [notifications, setNotifications] = useState([]);
    const [showNotifications, setShowNotifications] = useState(false);

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

    const markNotificationsAsRead = async () => {

        try {

            const token = localStorage.getItem("token");

            await api.put(
                "/notifications/read",
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

        const registerUser = () => {

            socket.emit("register", user.id);

        };

        if (socket.connected) {

            registerUser();

        } else {

            socket.on("connect", registerUser);

        }

        socket.on("newNotification", (data) => {

            fetchNotifications();

            toast.success(data.message);

        });

        return () => {

            socket.off("connect", registerUser);
            socket.off("newNotification");

        };

    }, []);

    return {

        notifications,
        showNotifications,
        setShowNotifications,
        markNotificationsAsRead,

    };

}

export default useNotifications;