import { useNavigate } from "react-router-dom";

function SectionHeader({ title, subtitle }) {

    const navigate = useNavigate();

    return (

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

            <div>
                <h2 className="text-3xl font-bold text-slate-800">
                    {title}
                </h2>

                <p className="text-slate-500 mt-1">
                    {subtitle}
                </p>
            </div>

            <button
                onClick={() => navigate("/create-complaint")}
                className="bg-gradient-to-r from-blue-600 to-indigo-600
                hover:from-blue-700 hover:to-indigo-700
                text-white px-6 py-3 rounded-xl
                shadow-lg transition-all duration-300"
            >
                + Raise Complaint
            </button>

        </div>

    );

}

export default SectionHeader;