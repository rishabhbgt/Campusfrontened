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
            <div
                className="
                    mb-2
                    flex
                    items-start
                    gap-4
                "
            >
                <div
                    className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-indigo-600
                        via-purple-600
                        to-blue-600
                        text-white
                        shadow-lg
                        shadow-indigo-200
                    "
                >
                    <BarChart3 size={24} />
                </div>

                <div className="min-w-0">
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
                            text-xl
                            font-extrabold
                            tracking-tight
                            text-slate-800
                            sm:text-2xl
                        "
                    >
                        Complaints by Category
                    </h2>

                    <p
                        className="
                            mt-1
                            text-sm
                            leading-5
                            text-slate-500
                        "
                    >
                        Distribution of complaints across departments
                    </p>
                </div>
            </div>

            <div className="mt-4">
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
                            vertical={false}
                        />

                        <XAxis
                            dataKey="category"
                            tick={{
                                fill: "#64748B",
                                fontSize: 12,
                            }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis
                            allowDecimals={false}
                            tick={{
                                fill: "#64748B",
                                fontSize: 12,
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
                                border: "1px solid #E2E8F0",
                                boxShadow:
                                    "0 10px 30px rgba(15, 23, 42, 0.12)",
                            }}
                        />

                        <Bar
                            dataKey="complaints"
                            radius={[10, 10, 0, 0]}
                            maxBarSize={52}
                        >
                            {categoryData.map(
                                (entry, index) => (
                                    <Cell
                                        key={entry.category}
                                        fill={
                                            colors[
                                                index %
                                                    colors.length
                                            ]
                                        }
                                    />
                                )
                            )}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default CategoryBarChart;