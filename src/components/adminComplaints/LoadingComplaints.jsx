function LoadingComplaints() {

    return (

        <div
            className="
                bg-white
                rounded-3xl
                shadow-xl
                p-8
                border
                border-slate-200
            "
        >

            {

                [...Array(6)].map((_, index) => (

                    <div

                        key={index}

                        className="
                            animate-pulse
                            flex
                            items-center
                            justify-between
                            py-6
                            border-b
                        "

                    >

                        <div className="space-y-3">

                            <div className="h-5 w-52 bg-slate-200 rounded"></div>

                            <div className="h-4 w-72 bg-slate-100 rounded"></div>

                        </div>

                        <div className="flex gap-3">

                            <div className="w-20 h-10 rounded-xl bg-slate-200"></div>

                            <div className="w-20 h-10 rounded-xl bg-slate-200"></div>

                            <div className="w-20 h-10 rounded-xl bg-slate-200"></div>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}

export default LoadingComplaints;