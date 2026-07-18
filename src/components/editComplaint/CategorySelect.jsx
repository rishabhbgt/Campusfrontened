function CategorySelect({ category, setCategory }) {

    return (

        <div className="mb-6">

            <label className="block mb-2 font-medium text-gray-700">
                Category
            </label>

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-3
                    outline-none
                    focus:ring-2
                    focus:ring-blue-500
                "
                required
            >
                <option value="">Select Category</option>

                <option value="Hostel">🏠 Hostel</option>

                <option value="Mess">🍽 Mess</option>

                <option value="Library">📚 Library</option>

                <option value="Classroom">🏫 Classroom</option>

                <option value="Canteen">🥤 Canteen</option>

                <option value="Other">📌 Other</option>

            </select>

        </div>

    );

}

export default CategorySelect;