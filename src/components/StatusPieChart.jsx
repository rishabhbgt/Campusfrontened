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

        <div
            className="
                bg-white
                rounded-3xl
                shadow-lg
                border
                border-slate-200
                p-6
                hover:shadow-xl
                transition-all
                duration-300
            "
        >

            <div className="mb-5">

                <h2 className="text-2xl font-bold text-slate-800">
                    Complaint Status
                </h2>

                <p className="text-sm text-slate-500 mt-1">
                    Overall complaint distribution
                </p>

            </div>

            <ResponsiveContainer width="100%" height={340}>

                <PieChart>

                    <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={65}
                        outerRadius={110}
                        paddingAngle={4}
                        labelLine={false}
                        label={({ name, percent }) =>
                            `${name} ${(percent * 100).toFixed(0)}%`
                        }
                    >

                        {pieData.map((entry, index) => (

                            <Cell
                                key={entry.name}
                                fill={COLORS[index]}
                            />

                        ))}

                    </Pie>

                    <Tooltip />

                    <Legend
                        verticalAlign="bottom"
                        iconType="circle"
                    />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );
}

export default StatusPieChart;