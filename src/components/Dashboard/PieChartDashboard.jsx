import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";

const pieData = [
  { name: "Completed", value: 45 },
  { name: "Pending", value: 25 },
  { name: "Failed", value: 30 }
];

const barData = [
  { field: "sampleId", changes: 10 },
  { field: "orderTye", changes: 7 },
  { field: "pinCode", changes: 12 }
];

const COLORS = ["#4D148C", "#FFA500", "#D3D3D3"];

const PieChartDashboard = () => {
  return (
    <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", justifyContent: "center", padding: "20px" }}>
      {/* Pie Chart */}
      <div style={{ width: "400px", height: "300px" }}>
        <h3 style={{ textAlign: "center", color: "#4D148C" }}>Order Status</h3>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={90}
              label
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div style={{ width: "400px", height: "300px" }}>
        <h3 style={{ textAlign: "center", color: "#FFA500" }}>Field Change Frequency</h3>
        <ResponsiveContainer>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="field" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="changes" fill="#4D148C" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartDashboard;
