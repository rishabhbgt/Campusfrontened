function RoleBadge({ role }) {

    const colors = {

        admin: "bg-red-100 text-red-700",

        faculty: "bg-blue-100 text-blue-700",

        student: "bg-green-100 text-green-700",

    };

    return (

        <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${colors[role]}`}
        >
            {role}
        </span>

    );

}

export default RoleBadge;