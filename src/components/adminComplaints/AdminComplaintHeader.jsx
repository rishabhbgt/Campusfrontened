import { ClipboardList } from "lucide-react";

function AdminComplaintHeader() {

    return (

        <div className="mb-10">

            <div className="flex items-center gap-4">

                <div
                    className="
                        w-16
                        h-16
                        rounded-2xl
                        bg-gradient-to-br
                        from-violet-600
                        to-indigo-600
                        flex
                        items-center
                        justify-center
                        shadow-xl
                    "
                >

                    <ClipboardList
                        size={30}
                        className="text-white"
                    />

                </div>

                <div>

                    <h1
                        className="
                            text-4xl
                            font-extrabold
                            text-slate-800
                            tracking-tight
                        "
                    >
                        Complaint Management
                    </h1>

                    <p
                        className="
                            mt-1
                            text-slate-500
                            text-lg
                        "
                    >
                        Manage, assign and monitor every complaint from one place.
                    </p>

                </div>

            </div>

        </div>

    );

}

export default AdminComplaintHeader;