import { FaInbox } from "react-icons/fa";

function EmptyState() {
    return (
        <div className="bg-white rounded-2xl shadow-md p-16 text-center">

            <FaInbox
                className="mx-auto text-6xl text-gray-300"
            />

            <h2 className="mt-6 text-2xl font-bold">
                No Complaints Found
            </h2>

            <p className="text-gray-500 mt-2">
                Raise your first complaint to get started.
            </p>

        </div>
    );
}

export default EmptyState;