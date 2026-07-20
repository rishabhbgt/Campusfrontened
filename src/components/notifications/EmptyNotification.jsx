import { BellOff } from "lucide-react";

function EmptyNotification() {
    return (
        <div className="flex flex-col items-center justify-center py-12 px-6 text-center">

            <div
                className="
                    w-20
                    h-20
                    rounded-full
                    bg-gradient-to-br
                    from-indigo-100
                    to-purple-100
                    flex
                    items-center
                    justify-center
                    mb-5
                "
            >
                <BellOff
                    size={38}
                    className="text-indigo-600"
                />
            </div>

            <h3
                className="
                    text-lg
                    font-bold
                    text-slate-800
                "
            >
                No Notifications
            </h3>

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
                New complaint updates and system alerts
                will appear here.
            </p>

        </div>
    );
}

export default EmptyNotification;