import {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
    Cell,
} from "recharts";

import { BarChart3 } from "lucide-react";

function CategoryBarChart({ categoryData }) {

    const colors = [
        "#6366F1",
        "#3B82F6",
        "#14B8A6",
        "#22C55E",
        "#F59E0B",
    ];

    return (

        <div
            className="
                bg-white
                rounded-3xl
                border
                border-slate-200
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                p-7
            "
        >

            <div className="flex items-center gap-3 mb-6">

                <div
                    className="
                        w-12
                        h-12
                        rounded-2xl
                        bg-gradient-to-r
                        from-indigo-500
                        to-blue-600
                        flex
                        items-center
                        justify-center
                    "
                >
                    <BarChart3
                        size={24}
                        className="text-white"
                    />
                </div>

                <div>

                    <h2 className="text-xl font-bold text-slate-800">

                        Complaints by Category

                    </h2>

                    <p className="text-sm text-slate-500">

                        Distribution of complaints across departments

                    </p>

                </div>

            </div>

            <ResponsiveContainer
                width="100%"
                height={320}
            >

                <BarChart
                    data={categoryData}
                    margin={{
                        top: 10,
                        right: 10,
                        left: -15,
                        bottom: 5,
                    }}
                >

                    <CartesianGrid
                        strokeDasharray="4 4"
                        stroke="#E2E8F0"
                    />

                    <XAxis
                        dataKey="category"
                        tick={{
                            fill: "#64748B",
                            fontSize: 13,
                        }}
                        axisLine={false}
                        tickLine={false}
                    />

                    <YAxis
                        tick={{
                            fill: "#64748B",
                            fontSize: 13,
                        }}
                        axisLine={false}
                        tickLine={false}
                    />

                    <Tooltip
                        cursor={{
                            fill: "#F8FAFC",
                        }}
                        contentStyle={{
                            borderRadius: "16px",
                            border: "none",
                            boxShadow:
                                "0 10px 30px rgba(0,0,0,.12)",
                        }}
                    />

                    <Bar
                        dataKey="complaints"
                        radius={[10, 10, 0, 0]}
                    >

                        {categoryData.map((entry, index) => (

                            <Cell
                                key={index}
                                fill={
                                    colors[
                                        index %
                                            colors.length
                                    ]
                                }
                            />

                        ))}

                    </Bar>

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}

export default CategoryBarChart;