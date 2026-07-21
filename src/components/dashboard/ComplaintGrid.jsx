import ComplaintCard from "./ComplaintCard";

function ComplaintGrid({
complaints,
deleteComplaint,
}) {

if (!complaints || complaints.length === 0) {
    return null;
}

return (

    <section
        className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-5
            sm:gap-6
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
