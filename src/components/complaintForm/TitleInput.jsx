function TitleInput({

    title,
    setTitle,

}) {

    const maxLength = 80;

    return (

        <div className="mb-6">

            <div className="flex justify-between items-center mb-2">

                <label className="font-semibold text-slate-700">

                    Complaint Title

                </label>

                <span
                    className={`
                        text-sm
                        ${
                            title.length > 70
                                ? "text-red-500"
                                : "text-slate-400"
                        }
                    `}
                >

                    {title.length}/{maxLength}

                </span>

            </div>

            <input

                type="text"

                value={title}

                maxLength={maxLength}

                onChange={(e) => setTitle(e.target.value)}

                placeholder="Example: WiFi is not working in Hostel Block A"

                className="
                    w-full
                    rounded-2xl
                    border
                    border-slate-300
                    px-5
                    py-4
                    text-slate-700
                    shadow-sm
                    transition-all
                    duration-300
                    outline-none
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