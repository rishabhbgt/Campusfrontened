function DescriptionInput({

    description,
    setDescription,

}) {

    const maxLength = 500;

    return (

        <div className="mb-6">

            <div className="flex justify-between items-center mb-2">

                <label className="font-semibold text-slate-700">

                    Description

                </label>

                <span
                    className={`
                        text-sm
                        ${
                            description.length > 450
                                ? "text-red-500"
                                : "text-slate-400"
                        }
                    `}
                >

                    {description.length}/{maxLength}

                </span>

            </div>

            <textarea

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
                    border-slate-300
                    px-5
                    py-4
                    resize-none
                    outline-none
                    transition-all
                    duration-300
                    shadow-sm
                    focus:ring-4
                    focus:ring-blue-100
                    focus:border-blue-500
                "

                required

            />

            <p className="mt-2 text-xs text-slate-500">

                A clear description helps the administration resolve your complaint more quickly.

            </p>

        </div>

    );

}

export default DescriptionInput;