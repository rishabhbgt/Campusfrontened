import ComplaintCard from "./ComplaintCard";

function ComplaintGrid({
    complaints,
    deleteComplaint,
}) {

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

            {complaints.map((complaint) => (

                <ComplaintCard
                    key={complaint._id}
                    complaint={complaint}
                    deleteComplaint={deleteComplaint}
                />

            ))}

        </div>

    );
}

export default ComplaintGrid;