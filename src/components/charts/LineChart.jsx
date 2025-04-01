import { Line } from "react-chartjs-2";
import {
  lineChartSetup,
  lineChartData,
  lineChartOptions,
} from "./lineChartSetup"; // Импортируем настройку графика

lineChartSetup(); // Вызываем настройку один раз

export default function LineChart({ data, title, labels }) {
  const empericChartData = lineChartData(labels, title, data);
  const options = lineChartOptions();

  return (
    <Line
      className="chart"
      data={empericChartData}
      options={options}
      width={800}
      height={400}
    />
  );
}
