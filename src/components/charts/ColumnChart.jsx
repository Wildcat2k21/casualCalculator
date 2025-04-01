import { Bar } from "react-chartjs-2";
import {
  columnChartSetup,
  columnChartData,
  columnChartOptions,
} from "./columnChartSetup"; // Импортируем настройку графика

columnChartSetup(); // Вызываем настройку один раз

export default function ColumnChart({ data, title, labels }) {
  const destributionChartData = columnChartData(labels, title, data);
  const options = columnChartOptions();

  return (
    <Bar
      className="chart"
      data={destributionChartData}
      options={options}
      width={800}
      height={400}
    />
  );
}
