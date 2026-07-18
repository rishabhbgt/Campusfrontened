import { BellRing } from "lucide-react";

function NotificationPanel({ notifications }) {

    return (

        <div
            className="
            w-full
            md:w-[420px]
            bg-white/90
            backdrop-blur-xl
            rounded-3xl
            shadow-2xl
            border
            border-white/40
            overflow-hidden
            "
        >

            {/* Header */}

            <div
                className="
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                text-white
                px-6
                py-5
                flex
                items-center
                gap-3
                "
            >

                <BellRing size={22} />

                <h2 className="text-lg font-bold">
                    Notifications
                </h2>

            </div>

            {/* Body */}

            <div className="max-h-[420px] overflow-y-auto">

                {notifications.length > 0 ? (

                    notifications.map((notification) => (

                        <div
                            key={notification._id}
                            className="
                            px-6
                            py-5
                            border-b
                            last:border-0
                            hover:bg-blue-50
                            transition
                            duration-200
                            "
                        >

                            <div className="flex items-start gap-3">

                                <div
                                    className="
                                    w-3
                                    h-3
                                    rounded-full
                                    mt-2
                                    bg-blue-500
                                    "
                                />

                                <div>

                                    <p className="text-slate-800 leading-relaxed">

                                        {notification.message}

                                    </p>

                                    <p className="text-xs text-slate-500 mt-2">

                                        {new Date(
                                            notification.createdAt
                                        ).toLocaleString()}

                                    </p>

                                </div>

                            </div>

                        </div>

                    ))

                ) : (

                    <div className="py-16 text-center">

                        <BellRing
                            size={46}
                            className="mx-auto text-slate-300"
                        />

                        <h3 className="mt-4 text-lg font-semibold text-slate-700">
                            No Notifications
                        </h3>

                        <p className="text-slate-500 mt-2">
                            You're all caught up 🎉
                        </p>

                    </div>

                )}

            </div>

        </div>

    );

}

export default NotificationPanel;