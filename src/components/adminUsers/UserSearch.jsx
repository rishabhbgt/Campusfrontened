function UserSearch({

    search,

    setSearch,

}) {

    return (

        <input

            type="text"

            placeholder="Search by name..."

            value={search}

            onChange={(e) => setSearch(e.target.value)}

            className="

                w-full

                rounded-2xl

                border

                border-slate-300

                px-5

                py-4

                shadow-sm

                outline-none

                transition

                focus:ring-4

                focus:ring-blue-100

                focus:border-blue-500

                mb-8

            "

        />

    );

}

export default UserSearch;