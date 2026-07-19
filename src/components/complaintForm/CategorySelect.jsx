function CategorySelect({ category, setCategory }) {

    return (

        <div className="mb-6">

            <label className="block mb-2 font-medium text-slate-700">
                Category
            </label>

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-300
                    px-5
                    py-4
                    outline-none
                    transition-all
                    duration-300
                    shadow-sm
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-100
                "
            >

                <option value="">Select Category</option>
                <option value="Hostel">🏠 Hostel</option>
                <option value="Mess">🍽️ Mess</option>
                <option value="Library">📚 Library</option>
                <option value="Classroom">🏫 Classroom</option>
                <option value="Canteen">🥤 Canteen</option>
                <option value="Other">📌 Other</option>

            </select>

        </div>

    );

}

export default CategorySelect;
