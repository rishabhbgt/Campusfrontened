import { Eye, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

function ComplaintActions({

    complaint,

    deleteComplaint,

}) {

    return (

        <div className="flex items-center justify-center gap-3">

            {/* View */}

            <Link

                to={`/complaint/${complaint._id}`}

                className="
                    w-10
                    h-10
                    rounded-xl
                    bg-blue-100
                    text-blue-600
                    flex
                    items-center
                    justify-center
                    hover:bg-blue-600
                    hover:text-white
                    transition-all
                    duration-300
                "

            >

                <Eye size={18} />

            </Link>

            {/* Edit */}

            <Link

                to={`/edit-complaint/${complaint._id}`}

                className="
                    w-10
                    h-10
                    rounded-xl
                    bg-amber-100
                    text-amber-600
                    flex
                    items-center
                    justify-center
                    hover:bg-amber-500
                    hover:text-white
                    transition-all
                    duration-300
                "

            >

                <Pencil size={18} />

            </Link>

            {/* Delete */}

            <button

                onClick={() => {

                    if (

                        window.confirm(

                            "Delete this complaint?"

                        )

                    ) {

                        deleteComplaint(

                            complaint._id

                        );

                    }

                }}

                className="
                    w-10
                    h-10
                    rounded-xl
                    bg-red-100
                    text-red-600
                    flex
                    items-center
                    justify-center
                    hover:bg-red-600
                    hover:text-white
                    transition-all
                    duration-300
                "

            >

                <Trash2 size={18} />

            </button>

        </div>

    );

}

export default ComplaintActions;