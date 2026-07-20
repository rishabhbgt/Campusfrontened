import { ClipboardX } from "lucide-react";

function EmptyComplaints() {

    return (

        <div
            className="
                bg-white
                rounded-3xl
                shadow-xl
                p-16
                text-center
                border
                border-slate-200
            "
        >

            <div
                className="
                    w-24
                    h-24
                    mx-auto
                    rounded-full
                    bg-indigo-100
                    flex
                    items-center
                    justify-center
                "
            >

                <ClipboardX
                    size={45}
                    className="text-indigo-600"
                />

            </div>

            <h2
                className="
                    text-2xl
                    font-bold
                    text-slate-800
                    mt-6
                "
            >

                No Complaints Found

            </h2>

            <p
                className="
                    mt-3
                    text-slate-500
                    max-w-md
                    mx-auto
                    leading-relaxed
                "
            >

                There are currently no complaints matching your
                search or filter. Try changing the filters or
                wait until new complaints are submitted.

            </p>

        </div>

    );

}

export default EmptyComplaints;