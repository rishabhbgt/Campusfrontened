import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

function StatusPieChart({ pieData, COLORS }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-5">
            <h2 className="text-xl font-bold mb-4 text-center">
                Complaint Status
            </h2>

            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={pieData}
                        dataKey="value"
                        outerRadius={100}
                        label
                    >
                        {pieData.map((entry, index) => (
                            <Cell
                                key={index}
                                fill={COLORS[index]}
                            />
                        ))}
                    </Pie>

                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default StatusPieChart;