import {
    ResponsiveContainer,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
} from "recharts";

function CategoryBarChart({ categoryData }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-5 mb-6">
            <h2 className="text-xl font-bold mb-4">
                Complaints by Category
            </h2>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={categoryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                        dataKey="complaints"
                        radius={[8, 8, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default CategoryBarChart;