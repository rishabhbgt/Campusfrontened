import ComplaintCard from "./ComplaintCard";
// import EmptyComplaint from "./EmptyComplaint";

function ComplaintGrid({
    complaints,
    deleteComplaint,
}) {

    // if (!complaints || complaints.length === 0) {
    //     return <EmptyComplaint />;
    // }

    return (

        <section
            className="
                grid
                grid-cols-1
                sm:grid-cols-2
                xl:grid-cols-3
                2xl:grid-cols-4
                gap-7
            "
        >

            {complaints.map((complaint) => (

                <ComplaintCard
                    key={complaint._id}
                    complaint={complaint}
                    deleteComplaint={deleteComplaint}
                />

            ))}

        </section>

    );
}

export default ComplaintGrid;