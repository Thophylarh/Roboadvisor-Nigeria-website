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
const percentages = [39, 9, 9, 3, 35, 5];
const shadesOfBlue = [
  "#3498db",
  "#4840bb",
  "#4d5898",
  "#bdc6f5",
  "#0e2e56",
  "#fed0b9",
];

export const options = {
  indexAxis: "y" as const,
  responsive: true,
  scales: {
    x: {
      type: "category",
      labels: false,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      // beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
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
      label: " Data",
      data: percentages,
      borderColor: shadesOfBlue,
      backgroundColor: shadesOfBlue,
      tension: 0.4,
    },
  ],
};

const BarChart = () => {
  return <Bar options={options as any} data={data} />;
};

export default BarChart;
