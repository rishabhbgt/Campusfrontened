function LoadingGrid() {

    return (

        <section
            className="
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-5
                sm:gap-6
            "
        >

            {[1, 2, 3, 4, 5, 6, 7, 8].map(
                (item) => (

                    <div
                        key={item}
                        className="
                            bg-white/80
                            backdrop-blur-xl
                            rounded-3xl
                            overflow-hidden
                            border
                            border-white/60
                            shadow-lg
                            animate-pulse
                        "
                    >

                        {/* Image Skeleton */}

                        <div
                            className="
                                w-full
                                h-52
                                bg-slate-200
                            "
                        />


                        {/* Content Skeleton */}

                        <div className="p-5 sm:p-6">

                            {/* Title + Status */}

                            <div
                                className="
                                    flex
                                    justify-between
                                    gap-4
                                "
                            >

                                <div
                                    className="
                                        h-6
                                        bg-slate-200
                                        rounded-lg
                                        w-2/3
                                    "
                                />

                                <div
                                    className="
                                        h-6
                                        bg-slate-200
                                        rounded-full
                                        w-20
                                    "
                                />

                            </div>


                            {/* Description */}

                            <div className="mt-5 space-y-2">

                                <div
                                    className="
                                        h-4
                                        bg-slate-200
                                        rounded
                                        w-full
                                    "
                                />

                                <div
                                    className="
                                        h-4
                                        bg-slate-200
                                        rounded
                                        w-5/6
                                    "
                                />

                                <div
                                    className="
                                        h-4
                                        bg-slate-200
                                        rounded
                                        w-2/3
                                    "
                                />

                            </div>


                            {/* Details */}

                            <div className="mt-6 space-y-3">

                                <div
                                    className="
                                        h-9
                                        bg-slate-100
                                        rounded-xl
                                    "
                                />

                                <div
                                    className="
                                        h-9
                                        bg-slate-100
                                        rounded-xl
                                    "
                                />

                            </div>


                            {/* Buttons */}

                            <div
                                className="
                                    grid
                                    grid-cols-3
                                    gap-2
                                    mt-6
                                "
                            >

                                <div
                                    className="
                                        h-10
                                        bg-slate-200
                                        rounded-xl
                                    "
                                />

                                <div
                                    className="
                                        h-10
                                        bg-slate-200
                                        rounded-xl
                                    "
                                />

                                <div
                                    className="
                                        h-10
                                        bg-slate-200
                                        rounded-xl
                                    "
                                />

                            </div>

                        </div>

                    </div>

                )
            )}

        </section>

    );

}

export default LoadingGrid;
