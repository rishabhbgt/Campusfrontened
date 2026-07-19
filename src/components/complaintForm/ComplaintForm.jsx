function ComplaintForm({

    handleSubmit,
    children,

}) {

    return (

        <form

            onSubmit={handleSubmit}

            className="space-y-6"

        >

            {children}

        </form>

    );

}

export default ComplaintForm;