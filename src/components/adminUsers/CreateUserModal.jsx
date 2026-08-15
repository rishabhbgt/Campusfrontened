import { useState } from "react";
import { X, UserPlus } from "lucide-react";

function CreateUserModal({
    onClose,
    onCreate,
    loading = false,
}) {

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        role: "faculty",
    });


    const handleChange = (e) => {

        const {
            name,
            value,
        } = e.target;


        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

    };


    const handleSubmit = (e) => {

        e.preventDefault();

        onCreate(form);

    };


    return (

        <div
            className="
                fixed
                inset-0
                z-[99999]
                flex
                items-center
                justify-center
                bg-slate-900/50
                px-4
                backdrop-blur-sm
            "
        >

            <div
                className="
                    w-full
                    max-w-lg
                    rounded-3xl
                    border
                    border-white/60
                    bg-white
                    p-6
                    shadow-2xl
                "
            >

                <div
                    className="
                        mb-6
                        flex
                        items-center
                        justify-between
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            gap-3
                        "
                    >

                        <div
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-2xl
                                bg-indigo-50
                                text-indigo-600
                            "
                        >

                            <UserPlus size={20} />

                        </div>

                        <div>

                            <h2
                                className="
                                    text-xl
                                    font-bold
                                    text-slate-900
                                "
                            >
                                Create User
                            </h2>

                            <p
                                className="
                                    text-sm
                                    text-slate-500
                                "
                            >
                                Create an Admin or Faculty account
                            </p>

                        </div>

                    </div>


                    <button
                        type="button"
                        onClick={onClose}
                        className="
                            rounded-xl
                            p-2
                            text-slate-500
                            transition
                            hover:bg-slate-100
                            hover:text-slate-800
                        "
                    >

                        <X size={20} />

                    </button>

                </div>


                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >

                    <div>

                        <label
                            className="
                                mb-2
                                block
                                text-sm
                                font-semibold
                                text-slate-700
                            "
                        >
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            required
                            placeholder="Enter full name"
                            className="
                                w-full
                                rounded-2xl
                                border
                                border-slate-200
                                px-4
                                py-3
                                outline-none
                                transition
                                focus:border-indigo-500
                                focus:ring-4
                                focus:ring-indigo-500/10
                            "
                        />

                    </div>

                    <div>

                        <label
                            className="
                                mb-2
                                block
                                text-sm
                                font-semibold
                                text-slate-700
                            "
                        >
                            College Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="name@college.edu"
                            className="
                                w-full
                                rounded-2xl
                                border
                                border-slate-200
                                px-4
                                py-3
                                outline-none
                                transition
                                focus:border-indigo-500
                                focus:ring-4
                                focus:ring-indigo-500/10
                            "
                        />

                    </div>



                    <div>
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            maxLength={10}
                            pattern="[0-9]{10}"
                            placeholder="Mobile Number"
                            className="
                                w-full
                                rounded-2xl
                                border
                                border-slate-200
                                px-4
                                py-3
                                outline-none
                                transition
                                focus:border-indigo-500
                                focus:ring-4
                                focus:ring-indigo-500/10
                            "
                        />
                    </div>

                    <div>

                        <label
                            className="
                                mb-2
                                block
                                text-sm
                                font-semibold
                                text-slate-700
                            "
                        >
                            Temporary Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            minLength={6}
                            placeholder="Minimum 6 characters"
                            className="
                                w-full
                                rounded-2xl
                                border
                                border-slate-200
                                px-4
                                py-3
                                outline-none
                                transition
                                focus:border-indigo-500
                                focus:ring-4
                                focus:ring-indigo-500/10
                            "
                        />

                    </div>


                    {/* Role */}

                    <div>

                        <label
                            className="
                                mb-2
                                block
                                text-sm
                                font-semibold
                                text-slate-700
                            "
                        >
                            Role
                        </label>

                        <select
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                            className="
                                w-full
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                px-4
                                py-3
                                outline-none
                                transition
                                focus:border-indigo-500
                                focus:ring-4
                                focus:ring-indigo-500/10
                            "
                        >

                            <option value="faculty">
                                Faculty
                            </option>

                            <option value="admin">
                                Admin
                            </option>

                        </select>

                    </div>

                    <div
                        className="
                            flex
                            gap-3
                            pt-3
                        "
                    >

                        <button
                            type="button"
                            onClick={onClose}
                            className="
                                flex-1
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                px-4
                                py-3
                                font-semibold
                                text-slate-700
                                transition
                                hover:bg-slate-50
                            "
                        >
                            Cancel
                        </button>


                        <button
                            type="submit"
                            disabled={loading}
                            className="
                                flex-1
                                rounded-2xl
                                bg-gradient-to-r
                                from-indigo-600
                                to-blue-600
                                px-4
                                py-3
                                font-semibold
                                text-white
                                shadow-lg
                                transition
                                hover:-translate-y-0.5
                                hover:shadow-xl
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                            "
                        >

                            {loading
                                ? "Creating..."
                                : "Create User"}

                        </button>

                    </div>

                </form>

            </div>

        </div>

    );

}

export default CreateUserModal;