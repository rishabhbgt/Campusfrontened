function LoadingGrid() {
    return (
        <section
            className="
                grid
                grid-cols-1
                gap-5
                sm:grid-cols-2
                sm:gap-6
                lg:grid-cols-3
                xl:grid-cols-4
            "
        >
            {Array.from({ length: 8 }).map((_, index) => (
                <div
                    key={index}
                    className="
                        overflow-hidden
                        rounded-3xl
                        border
                        border-white/70
                        bg-white/90
                        shadow-xl
                        backdrop-blur-xl
                    "
                >
                    <div
                        className="
                            h-52
                            w-full
                            animate-pulse
                            bg-gradient-to-r
                            from-slate-100
                            via-slate-200
                            to-slate-100
                        "
                    />

                    <div className="p-5 sm:p-6">
                        <div
                            className="
                                flex
                                items-start
                                justify-between
                                gap-4
                            "
                        >
                            <div
                                className="
                                    h-6
                                    w-2/3
                                    animate-pulse
                                    rounded-lg
                                    bg-slate-200
                                "
                            />

                            <div
                                className="
                                    h-6
                                    w-20
                                    animate-pulse
                                    rounded-full
                                    bg-slate-200
                                "
                            />
                        </div>

                        <div className="mt-5 space-y-2">
                            <div
                                className="
                                    h-4
                                    w-full
                                    animate-pulse
                                    rounded
                                    bg-slate-200
                                "
                            />

                            <div
                                className="
                                    h-4
                                    w-5/6
                                    animate-pulse
                                    rounded
                                    bg-slate-200
                                "
                            />

                            <div
                                className="
                                    h-4
                                    w-2/3
                                    animate-pulse
                                    rounded
                                    bg-slate-200
                                "
                            />
                        </div>

                        <div className="mt-6 space-y-3">
                            <div
                                className="
                                    h-9
                                    animate-pulse
                                    rounded-xl
                                    bg-slate-100
                                "
                            />

                            <div
                                className="
                                    h-9
                                    animate-pulse
                                    rounded-xl
                                    bg-slate-100
                                "
                            />
                        </div>

                        <div
                            className="
                                mt-6
                                grid
                                grid-cols-3
                                gap-2
                            "
                        >
                            <div
                                className="
                                    h-10
                                    animate-pulse
                                    rounded-xl
                                    bg-slate-200
                                "
                            />

                            <div
                                className="
                                    h-10
                                    animate-pulse
                                    rounded-xl
                                    bg-slate-200
                                "
                            />

                            <div
                                className="
                                    h-10
                                    animate-pulse
                                    rounded-xl
                                    bg-slate-200
                                "
                            />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default LoadingGrid;