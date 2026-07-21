function TitleInput({
    title,
    setTitle,
}) {

    const maxLength = 80;

    const isNearLimit = title.length > 70;

    return (

        <div className="space-y-2">

            {/* Label + Character Count */}

            <div
                className="
                    flex
                    items-center
                    justify-between
                    gap-3
                "
            >

                <label
                    htmlFor="complaint-title"
                    className="
                        text-sm
                        sm:text-base
                        font-semibold
                        text-slate-700
                    "
                >
                    Complaint Title
                </label>


                <span
                    className={`
                        text-xs
                        sm:text-sm
                        font-medium
                        ${
                            isNearLimit
                                ? "text-red-500"
                                : "text-slate-400"
                        }
                    `}
                >
                    {title.length}/{maxLength}
                </span>

            </div>


            {/* Input */}

            <input
                id="complaint-title"
                type="text"
                value={title}
                maxLength={maxLength}
                onChange={(e) =>
                    setTitle(e.target.value)
                }
                placeholder="Example: WiFi is not working in Hostel Block A"
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
                    placeholder:text-slate-400
                    shadow-sm
                    outline-none
                    transition-all
                    duration-300
                    hover:border-slate-300
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-100
                "
                required
            />

        </div>

    );

}

export default TitleInput;
