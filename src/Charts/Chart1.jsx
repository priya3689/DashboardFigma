import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart1 = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenue",
        data: [10, 30, 15, 50, 80, 90, 150, 200, 170, 180, 220, 250],
        borderColor: "#A855F7", // Purple
        backgroundColor: "rgba(168, 85, 247, 0.3)",
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: "Expenses",
        data: [20, 25, 40, 30, 50, 70, 120, 160, 150, 130, 190, 210],
        borderColor: "#3B82F6", // Blue
        backgroundColor: "rgba(59, 130, 246, 0.3)",
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "white", // White text for dark theme
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            return `$${tooltipItem.raw}K`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "white",
          callback: (value) => `$${value}K`,
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-white text-2xl font-semibold mb-4">Total Revenue</h2>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Chart1;
