import { FilePenLine } from "lucide-react";

function EditHeader() {
    return (
        <div className="mb-8">

            <div className="flex items-center gap-3">

                <div className="p-3 rounded-2xl bg-blue-100 text-blue-600">
                    <FilePenLine size={28} />
                </div>

                <div>

                    <h1 className="text-3xl font-bold text-gray-900">
                        Edit Complaint
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Update complaint details and keep the information accurate.
                    </p>

                </div>

            </div>

        </div>
    );
}

export default EditHeader;