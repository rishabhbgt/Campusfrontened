function StatusBadge({ blocked }) {

    return blocked ? (

        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">

            Blocked

        </span>

    ) : (

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">

            Active

        </span>

    );

}

export default StatusBadge;