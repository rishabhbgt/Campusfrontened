import { useNavigate } from "react-router-dom";

function Toolbar({
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
}) {

    const navigate = useNavigate();

    return (

        <div className="w-full flex flex-col md:flex-row gap-4 justify-between items-center">

            <div className="flex flex-1 gap-4">

                <input
                    type="text"
                    placeholder="Search complaints..."
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    className="flex-1 border rounded-xl px-4 py-3"
                />

                <select
                    value={statusFilter}
                    onChange={(e)=>setStatusFilter(e.target.value)}
                    className="border rounded-xl px-4 py-3"
                >
                    <option>All</option>
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                    <option>Rejected</option>
                </select>

            </div>


        </div>

    );

}

export default Toolbar;