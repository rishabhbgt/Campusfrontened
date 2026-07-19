function CreateHeader() {

    return (

        <div className="mb-10 text-center">

            <div
                className="
                    w-20
                    h-20
                    mx-auto
                    rounded-3xl
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    mb-5
                "
            >

                <span className="text-4xl">
                    📝
                </span>

            </div>

            <h1
                className="
                    text-4xl
                    font-bold
                    text-slate-800
                "
            >
                Raise a Complaint
            </h1>

            <p
                className="
                    mt-3
                    text-slate-500
                    text-lg
                "
            >
                Submit your issue and track its progress in real time.
            </p>

        </div>

    );

}

export default CreateHeader;