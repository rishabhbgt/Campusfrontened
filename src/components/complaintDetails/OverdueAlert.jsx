import { AlertTriangle } from "lucide-react";

function OverdueAlert({ complaint }) {

    if (
        !complaint.dueDate ||
        new Date(complaint.dueDate) >= new Date() ||
        complaint.status === "Resolved"
    ) {
        return null;
    }

    return (
        <div
            className="
                mt-8
                rounded-2xl
                border
                border-red-300
                bg-red-50
                p-5
                flex
                items-start
                gap-4
            "
        >
            <AlertTriangle
                className="text-red-600 mt-1"
                size={28}
            />

            <div>

                <h3 className="text-lg font-bold text-red-700">
                    Overdue Complaint
                </h3>

                <p className="text-red-600 mt-1">
                    This complaint has crossed its due date and is still unresolved.
                </p>

            </div>

        </div>
    );
}

export default OverdueAlert;