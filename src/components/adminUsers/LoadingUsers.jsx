function LoadingUsers() {

    return (

        <div className="bg-white rounded-2xl shadow-lg p-8">

            <div className="animate-pulse space-y-5">

                {[...Array(6)].map((_, index) => (

                    <div

                        key={index}

                        className="h-14 bg-slate-200 rounded-xl"

                    />

                ))}

            </div>

        </div>

    );

}

export default LoadingUsers;