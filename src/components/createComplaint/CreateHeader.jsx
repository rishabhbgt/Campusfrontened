import { FilePlus2 } from "lucide-react";

function CreateHeader() {

    return (

        <div className="mb-8 sm:mb-10">

            <div
                className="
                    flex
                    flex-col
                    items-center
                    text-center
                "
            >

                {/* ICON */}

                <div
                    className="
                        w-16
                        h-16
                        sm:w-20
                        sm:h-20
                        rounded-3xl
                        bg-gradient-to-br
                        from-blue-600
                        to-indigo-600
                        text-white
                        flex
                        items-center
                        justify-center
                        shadow-lg
                        mb-5
                    "
                >

                    <FilePlus2
                        size={34}
                        className="sm:w-10 sm:h-10"
                    />

                </div>


                {/* TITLE */}

                <h1
                    className="
                        text-3xl
                        sm:text-4xl
                        font-extrabold
                        text-slate-800
                        tracking-tight
                    "
                >
                    Raise a Complaint
                </h1>


                {/* DESCRIPTION */}

                <p
                    className="
                        mt-3
                        text-sm
                        sm:text-base
                        lg:text-lg
                        text-slate-500
                        max-w-xl
                        leading-7
                    "
                >
                    Submit your issue with accurate details
                    and track its progress in real time.
                </p>

            </div>

        </div>

    );

}

export default CreateHeader;