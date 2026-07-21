import { BellOff } from "lucide-react";

function EmptyNotification() {

    return (

        <div
            className="
                flex
                flex-col
                items-center
                justify-center

                py-14
                px-6

                text-center

                bg-white
            "
        >

            {/* Icon */}

            <div
                className="
                    w-20
                    h-20

                    rounded-3xl

                    bg-gradient-to-br
                    from-indigo-100
                    to-purple-100

                    flex
                    items-center
                    justify-center

                    mb-5

                    shadow-sm
                "
            >

                <BellOff
                    size={38}
                    strokeWidth={1.8}
                    className="text-indigo-600"
                />

            </div>


            {/* Title */}

            <h3
                className="
                    text-lg
                    font-bold
                    text-slate-800
                "
            >
                No Notifications
            </h3>


            {/* Description */}

            <p
                className="
                    text-sm
                    text-slate-500

                    mt-2

                    max-w-xs

                    leading-relaxed
                "
            >
                You're all caught up.
                <br />
                New complaint updates and system alerts
                will appear here.
            </p>

        </div>

    );

}

export default EmptyNotification;