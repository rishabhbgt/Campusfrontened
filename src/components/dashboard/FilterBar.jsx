function FilterBar({ statusFilter, setStatusFilter }) {

    return (

        <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 rounded-xl border shadow-sm"
        >

            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Resolved">Resolved</option>
            <option value="Rejected">Rejected</option>

        </select>

    );

}

export default FilterBar;