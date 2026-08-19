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
                rounded-3xl
                border
                border-white/70
                bg-white/90
                p-5
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-300
                hover:shadow-2xl
                sm:p-6
            "
        >
            <div className="mb-2">
                <p
                    className="
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-indigo-600
                    "
                >
                    Analytics
                </p>

                <h2
                    className="
                        mt-1
                        text-2xl
                        font-extrabold
                        tracking-tight
                        text-slate-800
                    "
                >
                    Complaint Status
                </h2>

                <p
                    className="
                        mt-1
                        text-sm
                        text-slate-500
                    "
                >
                    Overall complaint distribution
                </p>
            </div>

            <ResponsiveContainer
                width="100%"
                height={340}
            >
                <PieChart>
                    <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="48%"
                        innerRadius={68}
                        outerRadius={108}
                        paddingAngle={4}
                        stroke="none"
                        labelLine={false}
                        label={({ name, percent }) =>
                            `${name} ${(percent * 100).toFixed(0)}%`
                        }
                    >
                        {pieData.map(
                            (entry, index) => (
                                <Cell
                                    key={entry.name}
                                    fill={
                                        COLORS[
                                            index
                                        ]
                                    }
                                />
                            )
                        )}
                    </Pie>

                    <Tooltip
                        contentStyle={{
                            borderRadius: "16px",
                            border: "1px solid #e2e8f0",
                            boxShadow:
                                "0 10px 30px rgba(15, 23, 42, 0.12)",
                        }}
                    />

                    <Legend
                        verticalAlign="bottom"
                        iconType="circle"
                        wrapperStyle={{
                            paddingTop: "10px",
                        }}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default StatusPieChart;