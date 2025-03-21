/* eslint-disable react/no-danger */
import React, { useState } from "react";
import { evaluate, sum } from "mathjs";
import katex from "katex";
import "katex/dist/katex.min.css";

export default function HarmonicSeries() {
  const [n, setN] = useState(5); // Количество итераций ряда

  // Генерация массива членов гармонического ряда
  const terms = Array.from({ length: n }, (_, i) => `1/${i + 1}`);

  // Вычисление частичной суммы
  const partialSum = sum(terms.map((term) => evaluate(term))).toFixed(4);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Гармонический ряд</h2>

      {/* Формула ряда */}
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: katex.renderToString(`S_n = \\sum_{k=1}^{n} \\frac{1}{k}`),
        }}
      />

      {/* Подставленные значения */}
      <div
        className="text-lg mt-2"
        dangerouslySetInnerHTML={{
          __html: katex.renderToString(
            `S_${n} = ${terms.join(" + ")} = ${partialSum}`,
          ),
        }}
      />

      {/* Ползунок для выбора n */}
      <input
        type="range"
        min="1"
        max="50"
        value={n}
        onChange={(e) => setN(Number(e.target.value))}
        className="w-full mt-4"
      />
      <p className="text-gray-700">Членов ряда: {n}</p>
    </div>
  );
}
