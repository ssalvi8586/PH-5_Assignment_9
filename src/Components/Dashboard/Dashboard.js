import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const data = [
  {
    month: "Mar",
    investment: 100000,
    sell: 241,
    revenue: 10401,
  },
  {
    month: "Apr",
    investment: 200000,
    sell: 423,
    revenue: 24500,
  },
  {
    month: "May",
    investment: 500000,
    sell: 726,
    revenue: 67010,
  },
  {
    month: "Jun",
    investment: 500000,
    sell: 529,
    revenue: 40405,
  },
  {
    month: "Jul",
    investment: 600000,
    sell: 601,
    revenue: 50900,
  },
  {
    month: "Aug",
    investment: 700000,
    sell: 670,
    revenue: 61000,
  },
];

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-4 justify-items-center md:grid-cols-2 md:gap-4">
      <div>
        <h4 className="text-2xl text-center mb-4">Month wise sell</h4>
        <LineChart width={400} height={300} data={data}>
          <Line type="monotone" dataKey="sell" stroke="#8884d8" />
          <XAxis dataKey="month" />
          <YAxis dataKey="sell" />
          <Tooltip />
          <Legend />
        </LineChart>
      </div>
      <div>
        <h4 className="text-2xl text-center mb-4">Month wise sell</h4>

        <PieChart width={400} height={300}>
          <Pie
            data={data}
            dataKey="investment"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={data}
            dataKey="revenue"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </div>
    </div>
  );
};

export default Dashboard;
