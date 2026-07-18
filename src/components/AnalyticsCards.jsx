function AnalyticsCards({
    total,
    pending,
    inProgress,
    resolved,
    highPriority,
    overdue,
}) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">

            <div className="bg-white shadow rounded-lg p-4 text-center">
                <h3 className="text-gray-500">Total</h3>
                <p className="text-3xl font-bold">{total}</p>
            </div>

            <div className="bg-yellow-100 shadow rounded-lg p-4 text-center">
                <h3 className="text-yellow-700">Pending</h3>
                <p className="text-3xl font-bold">{pending}</p>
            </div>

            <div className="bg-blue-100 shadow rounded-lg p-4 text-center">
                <h3 className="text-blue-700">In Progress</h3>
                <p className="text-3xl font-bold">{inProgress}</p>
            </div>

            <div className="bg-green-100 shadow rounded-lg p-4 text-center">
                <h3 className="text-green-700">Resolved</h3>
                <p className="text-3xl font-bold">{resolved}</p>
            </div>

            <div className="bg-red-100 shadow rounded-lg p-4 text-center">
                <h3 className="text-red-700">High Priority</h3>
                <p className="text-3xl font-bold">{highPriority}</p>
            </div>

            <div className="bg-orange-100 shadow rounded-lg p-4 text-center">
                <h3 className="text-orange-700">Overdue</h3>
                <p className="text-3xl font-bold">{overdue}</p>
            </div>

        </div>
    );
}

export default AnalyticsCards;