import { MdCategory } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";

function ComplaintInfo({ complaint }) {

    return (
        <>

            <h1 className="text-3xl font-bold text-slate-800">
                {complaint.title}
            </h1>

            <p className="mt-5 text-slate-600 leading-8">
                {complaint.description}
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">

                <div className="flex items-center gap-3">
                    <MdCategory className="text-blue-600 text-xl" />
                    <span>{complaint.category}</span>
                </div>

                <div className="flex items-center gap-3">
                    <FaRegCalendarAlt className="text-blue-600 text-xl" />
                    <span>
                        {new Date(complaint.createdAt).toLocaleDateString()}
                    </span>
                </div>

            </div>

        </>
    );
}

export default ComplaintInfo;