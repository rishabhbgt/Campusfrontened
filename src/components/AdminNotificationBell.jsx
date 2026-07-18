import socket from "../socket";
import { useEffect, useState } from "react";
import api from "../services/api";

function AdminNotificationBell() {

    const [notifications, setNotifications] = useState([]);
    const [open, setOpen] = useState(false);

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

    useEffect(() => {

        fetchNotifications();

    }, []);

useEffect(() => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {

        socket.emit("register", user._id || user.id);

    }

    console.log("Socket Connected:", socket.connected);

    console.log("Socket ID:", socket.id);

    socket.on("connect", () => {

        console.log("Socket Connected Event:", socket.id);

    });

    socket.on("newNotification", (data) => {

    console.log("New Notification:", data);

    fetchNotifications();

    });

    return () => {

        socket.off("connect");
        socket.off("newNotification");

    };

}, []);


    return (

    <div className="relative">

        <button
            onClick={() => setOpen(!open)}
            className="text-2xl"
        >
            🔔

            {
                notifications.filter(
                    (n) => !n.isRead
                ).length > 0 && (

                    <span className="ml-1 text-red-600 font-bold">

                        {
                            notifications.filter(
                                (n) => !n.isRead
                            ).length
                        }

                    </span>

                )
            }

        </button>

        {
    open && (

        <div className="absolute right-0 mt-3 w-96 bg-white shadow-xl rounded-xl border z-50">

            <div className="p-4 border-b font-bold text-lg">

                Notifications

            </div>

            {
                notifications.length === 0 ? (

                    <p className="p-4 text-gray-500">

                        No Notifications

                    </p>

                ) : (

                    notifications.map((notification) => (

                        <div
                            key={notification._id}
                            onClick={() =>
                                markAsRead(notification._id)
                            }
                            className={`p-4 border-b cursor-pointer hover:bg-gray-100 ${
                                !notification.isRead
                                    ? "bg-blue-50"
                                    : ""
                            }`}
                        >

                            <p className="text-sm">

                                {notification.message}

                            </p>

                            <p className="text-xs text-gray-500 mt-1">

                                {
                                    new Date(
                                        notification.createdAt
                                    ).toLocaleString()
                                }

                            </p>

                        </div>

                    ))

                )
            }

        </div>

    )
}

    </div>

);

}

export default AdminNotificationBell;