import {
    GraduationCap,
    Sparkles,
    RefreshCw,
} from "lucide-react";

function FacultyHeader({
    facultyName,
    onRefresh,
    loading = false,
}) {

    return (

        <header
            className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/60
                bg-white/80
                backdrop-blur-xl
                shadow-xl
                shadow-slate-200/50
                p-6
                sm:p-8
            "
        >

            {/* Decorative Background */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -top-24
                    -right-24
                    w-64
                    h-64
                    rounded-full
                    bg-indigo-200/30
                    blur-3xl
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-24
                    -left-24
                    w-64
                    h-64
                    rounded-full
                    bg-blue-200/30
                    blur-3xl
                "
            />


            {/* Main Content */}

            <div
                className="
                    relative
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                    gap-6
                "
            >

                {/* Left Section */}

                <div
                    className="
                        flex
                        items-start
                        gap-4
                    "
                >

                    {/* Icon */}

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
                            via-blue-600
                            to-cyan-500
                            shadow-lg
                            shadow-indigo-500/25
                        "
                    >

                        <GraduationCap
                            size={28}
                            className="text-white"
                        />

                    </div>


                    {/* Text */}

                    <div>

                        <div
                            className="
                                flex
                                flex-wrap
                                items-center
                                gap-2
                            "
                        >

                            <h1
                                className="
                                    text-2xl
                                    sm:text-3xl
                                    lg:text-4xl
                                    font-bold
                                    tracking-tight
                                    text-slate-900
                                "
                            >
                                Faculty Dashboard
                            </h1>


                            <span
                                className="
                                    inline-flex
                                    items-center
                                    gap-1.5
                                    rounded-full
                                    border
                                    border-indigo-200
                                    bg-indigo-50
                                    px-3
                                    py-1
                                    text-xs
                                    font-semibold
                                    text-indigo-700
                                "
                            >

                                <Sparkles size={13} />

                                Faculty Portal

                            </span>

                        </div>


                        <p
                            className="
                                mt-2
                                text-sm
                                sm:text-base
                                text-slate-500
                                leading-relaxed
                            "
                        >
                            Welcome back
                            {facultyName
                                ? `, ${facultyName}`
                                : ""}.
                            Manage assigned complaints,
                            track progress, and help resolve
                            issues efficiently.
                        </p>

                    </div>

                </div>


                {/* Right Section */}

                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >

                    {/* Status */}

                    <div
                        className="
                            hidden
                            sm:flex
                            items-center
                            gap-2
                            rounded-2xl
                            border
                            border-emerald-200
                            bg-emerald-50
                            px-4
                            py-3
                        "
                    >

                        <span
                            className="
                                h-2.5
                                w-2.5
                                rounded-full
                                bg-emerald-500
                                shadow-sm
                                shadow-emerald-500/50
                            "
                        />

                        <span
                            className="
                                text-sm
                                font-semibold
                                text-emerald-700
                            "
                        >
                            System Operational
                        </span>

                    </div>


                    {/* Refresh Button */}

                    <button
                        type="button"
                        onClick={onRefresh}
                        disabled={loading}
                        aria-label="Refresh complaints"
                        title="Refresh complaints"
                        className="
                            group
                            inline-flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            text-slate-600
                            shadow-sm
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:border-indigo-300
                            hover:bg-indigo-50
                            hover:text-indigo-600
                            hover:shadow-md
                            focus:outline-none
                            focus:ring-2
                            focus:ring-indigo-500
                            focus:ring-offset-2
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >

                        <RefreshCw
                            size={20}
                            className={`
                                transition-transform
                                duration-500
                                ${
                                    loading
                                        ? "animate-spin"
                                        : "group-hover:rotate-180"
                                }
                            `}
                        />

                    </button>

                </div>

            </div>

        </header>

    );

}

export default FacultyHeader;