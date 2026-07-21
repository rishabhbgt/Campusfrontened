function CategorySelect({
    category,
    setCategory,
}) {

    return (

        <div className="space-y-2">

            {/* Label */}

            <label
                htmlFor="complaint-category"
                className="
                    block
                    text-sm
                    sm:text-base
                    font-semibold
                    text-slate-700
                "
            >
                Category
            </label>


            {/* Select */}

            <select
                id="complaint-category"
                value={category}
                onChange={(e) =>
                    setCategory(e.target.value)
                }
                required
                className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    px-5
                    py-3.5
                    sm:py-4
                    text-sm
                    sm:text-base
                    text-slate-700
                    shadow-sm
                    outline-none
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:border-slate-300
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-100
                "
            >

                <option value="">
                    Select Category
                </option>

                <option value="Hostel">
                    🏠 Hostel
                </option>

                <option value="Mess">
                    🍽️ Mess
                </option>

                <option value="Library">
                    📚 Library
                </option>

                <option value="Classroom">
                    🏫 Classroom
                </option>

                <option value="Canteen">
                    🥤 Canteen
                </option>

                <option value="Other">
                    📌 Other
                </option>

            </select>

        </div>

    );

}

export default CategorySelect;
