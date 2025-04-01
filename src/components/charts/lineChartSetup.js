import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

export const lineChartSetup = () => {
  ChartJS.register(
    CategoryScale, // Ось X
    LinearScale, // Ось Y
    PointElement, // Точки на графике
    LineElement, // Линии между точками
    Title,
    Tooltip,
    Legend,
  );
};

// Динамически создаем объект данных для графика
export const lineChartData = (labels, title, data) => ({
  labels, // Передаем массив меток
  datasets: [
    {
      label: title,
      data, // Передаем массив данных
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
});

// Опции для графика, включая размер и адаптивность
export const lineChartOptions = () => ({
  responsive: false,
  maintainAspectRatio: false, // Важно для корректного изменения размера,
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
});
