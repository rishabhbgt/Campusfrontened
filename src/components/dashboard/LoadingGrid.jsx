function LoadingGrid() {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {[1,2,3,4,5,6].map((item)=>(
                <div
                    key={item}
                    className="bg-white h-72 rounded-2xl animate-pulse"
                />
            ))}

        </div>
    );
}

export default LoadingGrid;