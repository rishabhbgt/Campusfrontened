function DescriptionInput({
    description,
    setDescription,
}) {

    const maxLength = 500;

    const isNearLimit = description.length > 450;

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
                    htmlFor="complaint-description"
                    className="
                        text-sm
                        sm:text-base
                        font-semibold
                        text-slate-700
                    "
                >
                    Description
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
                    {description.length}/{maxLength}
                </span>

            </div>


            {/* Description Textarea */}

            <textarea
                id="complaint-description"
                rows={6}
                maxLength={maxLength}
                value={description}
                onChange={(e) =>
                    setDescription(e.target.value)
                }
                placeholder="Describe the issue in detail. Mention location, time and anything that can help resolve it faster."
                className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    px-5
                    py-4
                    resize-none
                    outline-none
                    text-sm
                    sm:text-base
                    text-slate-700
                    placeholder:text-slate-400
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-slate-300
                    focus:border-blue-500
                    focus:ring-4
                    focus:ring-blue-100
                "
                required
            />


            {/* Helper Text */}

            <p
                className="
                    text-xs
                    sm:text-sm
                    text-slate-500
                    leading-relaxed
                "
            >
                A clear description helps the administration
                resolve your complaint more quickly.
            </p>

        </div>

    );

}

export default DescriptionInput;
