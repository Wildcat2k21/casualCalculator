import React from "react";
import "./style.css";
import "katex/dist/katex.min.css";
import { useSelector } from "react-redux";
import {
  m0Equation,
  m0Xsquare,
  calcEmpericFunk,
  calcDestribution,
} from "../utils/math";
import Equation from "./Equation";
import LineChart from "./charts/LineChart";
import ColumnChart from "./charts/ColumnChart";

function Calculator() {
  const tableDataState = useSelector((state) => state);

  // Расчет значений математической ожиданий
  const m0Calculation = m0Equation(tableDataState);
  const m0ResultString = m0Calculation.join(" ≈ ").replaceAll("*", "\\times");

  // Расчет значений математической ожиданий от квадрата X
  const m0X2Calculation = m0Xsquare(tableDataState);
  const m0X2ResultString = m0X2Calculation
    .join(" ≈ ")
    .replaceAll("*", "\\times");

  // Расчет дисперсии
  const dispersionVal = (m0X2Calculation[1] - m0Calculation[1] ** 2).toFixed(4);
  const dispersionResultString = `${m0X2Calculation[1]} - ${(m0Calculation[1] ** 2).toFixed(4)} ≈ ${dispersionVal}`;

  // Расчет среднеквадратичного отклонения
  const dispersionSqrtVal = Math.sqrt(dispersionVal).toFixed(4);
  const disparsionSqrtResultString = ` ≈ ${dispersionSqrtVal === "NaN" ? "Ошибка" : dispersionSqrtVal}`;

  // Расчет эмперической функции
  const { empericData, empericLabels } = calcEmpericFunk(tableDataState);
  const { destributionData, destributionLabels } =
    calcDestribution(tableDataState);

  return (
    <div className="equasions-wrapper">
      <h2 className="eq-step-title">Расчет значений</h2>
      {/* Формула мат ожидания */}
      <Equation
        latexText={`M_0(X) = \\sum_{i} (x_i \\times p_i) = ${m0ResultString}`}
      />
      {/* Формула мат ожидания от X^2 */}
      <Equation
        latexText={`M_0(X^2) = \\sum_{i} (x_i^2 \\times p_i) = ${m0X2ResultString}`}
      />
      {/* Формула дисперсии */}
      <Equation
        latexText={`\\sigma^2 = M_0(X^2) - M_0(X)^2 = ${dispersionResultString}`}
      />
      {/* Формула среднеквадратичного отклонения */}
      <Equation
        latexText={`\\sigma = \\sqrt{\\sigma^2} = \\sqrt{${dispersionVal}} ${disparsionSqrtResultString}`}
      />
      <h2 className="eq-step-title">График распределения СВ</h2>
      {/* Распределение случайной величины */}
      <ColumnChart
        data={destributionData}
        title="Распределение СВ"
        labels={destributionLabels}
      />
      <h2 className="eq-step-title">График функции ЭФР</h2>
      {/* Эмперическая функция распределения */}
      <LineChart
        data={empericData}
        title="Эмперическая функция распределения"
        labels={empericLabels}
      />
    </div>
  );
}

export default Calculator;
