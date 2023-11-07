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

type Props = {
  graphData: number[];
};

const BarChart = ({ graphData }: Props) => {
  const options = {
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
    labels: [
      "US Stocks",
      "Foreign Stocks",
      "Emerging Markets",
      "Dividend Stocks",
      "Municipal Bonds",
      "Tips"
    ],
    datasets: [
      {
        fill: true,
        stepped: false,
        borderCurve: "smooth",
        label: "Data",
        data: graphData,
        borderColor: [
          "#3498db",
          "#4840bb",
          "#4d5898",
          "#bdc6f5",
          "#0e2e56",
          "#fed0b9",
        ],
        backgroundColor: [
          "#3498db",
          "#4840bb",
          "#4d5898",
          "#bdc6f5",
          "#0e2e56",
          "#fed0b9",
        ],
        tension: 0.4,
      },
    ],
  };

  return <Bar options={options as any} data={data} />;
};

export default BarChart;
