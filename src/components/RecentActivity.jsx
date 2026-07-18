function RecentActivity({ recentComplaints }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-5 mb-6">

            <h2 className="text-xl font-bold mb-4">
                Recent Activity
            </h2>

            {recentComplaints.length === 0 ? (
                <p className="text-gray-500">
                    No recent complaints.
                </p>
            ) : (
                recentComplaints.map((complaint) => (
                    <div
                        key={complaint._id}
                        className="border-b py-3"
                    >
                        <p className="font-semibold">
                            {complaint.title}
                        </p>

                        <p className="text-sm text-gray-500">
                            {complaint.createdBy?.fullName}
                        </p>

                        <p className="text-sm">
                            Status: {complaint.status}
                        </p>
                    </div>
                ))
            )}

        </div>
    );
}

export default RecentActivity;