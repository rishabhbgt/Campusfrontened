import { ClipboardList } from "lucide-react";

function AdminComplaintHeader() {
    return (
        <div className="mb-8">
            <div className="flex items-center gap-4 sm:gap-5">
                <div
                    className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-indigo-600
                        via-purple-600
                        to-blue-600
                        text-white
                        shadow-lg
                        shadow-indigo-200
                        sm:h-16
                        sm:w-16
                    "
                >
                    <ClipboardList
                        size={30}
                        className="sm:h-8 sm:w-8"
                    />
                </div>

                <div className="min-w-0">
                    <p
                        className="
                            mb-1
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.18em]
                            text-indigo-600
                        "
                    >
                        CampusOne Admin
                    </p>

                    <h1
                        className="
                            text-2xl
                            font-extrabold
                            tracking-tight
                            text-slate-800
                            sm:text-4xl
                        "
                    >
                        Complaint Management
                    </h1>

                    <p
                        className="
                            mt-1
                            max-w-2xl
                            text-sm
                            leading-6
                            text-slate-500
                            sm:text-base
                        "
                    >
                        Manage, assign and monitor every complaint
                        from one place.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AdminComplaintHeader;