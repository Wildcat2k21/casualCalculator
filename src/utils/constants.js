export const DEFAULT_CELL_VALUE = 5;

// Динамически создаем объект данных для графика
export const chartData = (labels, title, data) => ({
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
export const chartOptions = () => ({
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
