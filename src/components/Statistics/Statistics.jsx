import React, { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { getStoredDonationApplication } from "../../Utility/Save";

const COLORS = ["#FF444A", "#00C49F"];

const Statistics = () => {
  const [totalDonation, setTotalDonation] = useState(0);

  useEffect(() => {
    const storedDonation = getStoredDonationApplication();
    setTotalDonation(storedDonation.length);
  }, []);

  const totalDonationPercent = (totalDonation / 12) * 100;

  const data = [
    { name: "Your Donation", value: 100 - totalDonationPercent },
    { name: "Total Donation", value: totalDonationPercent },
  ];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
    if (percent > 0) {
      return (
        <text
          x={x}
          y={y}
          fill="white"
          textAnchor="middle"
          dominantBaseline="central">
          {`${(percent * 100).toFixed(1)}%`}
        </text>
      );
    }
  };

  return (
    <div className="container mx-auto mt-20">
      <div>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col items-center justify-center mt-5 gap-6 sm:flex-row sm:mt-16">
        <div className="flex items-center gap-2">
          <h1 className="font-normal mb-1 text-lg">Your Donation</h1>
          <div className="w-28 h-3 bg-[#00C49F] rounded-sm"></div>
        </div>
        <div className="flex items-center gap-2 mt-3 sm:mt-0">
          <h1 className="font-normal mb-1 text-lg">Total Donation</h1>
          <div className="w-28 h-3 bg-[#FF444A] rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
