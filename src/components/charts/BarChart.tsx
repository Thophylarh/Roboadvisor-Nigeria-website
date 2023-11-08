import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  graphData?: any;
};

const options = {
  indexAxis: "y" as const,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: { display: false, drawBorder: false, lineThickness: 0 },
      gridLine: { drawBorder: false },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: { display: false, drawBorder: false, lineThickness: 0 },
      gridLine: { drawBorder: false },
      ticks: {
        display: false, 
      },
    },
  },
};

const BarChart = ({ graphData }: Props) => {
  const data = {
    labels: [
      "US Stocks",
      "Foreign Stocks",
      "Emerging Markets",
      "Dividend Stocks",
      "Municipal Bonds",
      "Tips",
    ],
    datasets: [
      {
        data: graphData,
        backgroundColor: [
          "#6BC78A",
          "#E5B611",
          "#176BE9",
          "#F34CED",
          "#D69E77",
        ],
      },
    ],
  };

  return <Bar options={options as any} data={data} />;
};

export default BarChart;
