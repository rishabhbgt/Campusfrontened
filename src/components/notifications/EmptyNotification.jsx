import { Bell } from "lucide-react";

function EmptyNotification() {

    return (

        <div className="py-10 flex flex-col items-center text-gray-500">

            <Bell size={48} className="mb-3 opacity-40" />

            <h3 className="font-semibold">
                No Notifications
            </h3>

            <p className="text-sm">
                You're all caught up 🎉
            </p>

        </div>

    );

}

export default EmptyNotification;