import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

export const columnChartSetup = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );
};

export const columnChartData = (labels, title, data) => ({
  labels,
  datasets: [
    {
      label: title,
      data,
      backgroundColor: "rgba(75, 192, 192, 0.5)", // Цвет столбцов
      borderColor: "rgb(75, 192, 192)",
      borderWidth: 1,
    },
  ],
});

export const columnChartOptions = () => ({
  responsive: false,
  maintainAspectRatio: false,
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
});
