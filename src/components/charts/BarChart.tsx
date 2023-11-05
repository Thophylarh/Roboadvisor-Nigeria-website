import React from "react";
import { Bar } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  BarElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = [
  "US Stocks",
  "Foreign Stocks",
  "Emerging Markets",
  "Dividend Stocks",
  "Municipal Bonds",
];
const percentages = ["45%", "15%", "15%", "9%", "16%"];
const shadesOfBlue = ["#3498db", "#2980b9", "#1f618d", "#154360", "#0e2e56"];

export const options = {
  responsive: true,
  scales: {
    x: {
      type: "category",
      labels: labels,
      grid: {
        display: false,
      },
      ticks: {
        color: "white",
      },
    },
    y: {
      //   beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
        color: "white",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const data = {
  labels: labels,
  datasets: [
    {
      fill: true,
      stepped: false,
      borderCurve: "smooth",
      label: "Percentage Data",
      data: percentages.map((percentage) => parseFloat(percentage)),
      borderColor: shadesOfBlue,
      backgroundColor: shadesOfBlue,
      tension: 0.4,
    },
  ],
};

const BarChart = () => {
  return <Bar options={options as any} data={data} />
};

export default BarChart;
