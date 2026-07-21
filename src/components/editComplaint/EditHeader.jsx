import { FilePenLine } from "lucide-react";

function EditHeader() {

    return (

        <header
            className="
                mb-8
                sm:mb-10
                bg-white/80
                backdrop-blur-xl
                rounded-3xl
                border
                border-white/60
                shadow-lg
                px-6
                sm:px-8
                py-6
                sm:py-7
            "
        >

            <div className="flex items-center gap-4 sm:gap-5">

                {/* Icon */}

                <div
                    className="
                        w-14
                        h-14
                        sm:w-16
                        sm:h-16
                        rounded-2xl
                        bg-gradient-to-br
                        from-blue-600
                        to-indigo-600
                        text-white
                        flex
                        items-center
                        justify-center
                        shadow-lg
                        shrink-0
                    "
                >

                    <FilePenLine
                        size={28}
                        className="sm:w-8 sm:h-8"
                    />

                </div>


                {/* Heading */}

                <div>

                    <h1
                        className="
                            text-2xl
                            sm:text-3xl
                            font-extrabold
                            text-slate-800
                            tracking-tight
                        "
                    >
                        Edit Complaint
                    </h1>


                    <p
                        className="
                            text-sm
                            sm:text-base
                            text-slate-500
                            mt-1
                            leading-relaxed
                        "
                    >
                        Update your complaint details and keep
                        the information accurate.
                    </p>

                </div>

            </div>

        </header>

    );

}

export default EditHeader;
