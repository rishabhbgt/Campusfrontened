function ComplaintForm({
    handleSubmit,
    children,
}) {

    return (

        <form
            onSubmit={handleSubmit}
            className="
                space-y-6
                sm:space-y-7
            "
        >

            {children}

        </form>

    );

}

export default ComplaintForm;