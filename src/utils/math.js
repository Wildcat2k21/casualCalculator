import { evaluate, sum } from "mathjs";

// Расчет значений моды
export const m0Equation = (tableData) => {
  const { xArr, pArr } = tableData;
  const m0Terms = xArr.map((xVal, xIndex) => `(${xVal} * ${pArr[xIndex]})`);
  const m0TermsString = m0Terms.join(" + ");

  const moPartialSum = sum(m0Terms.map((term) => evaluate(term))).toFixed(4);
  return [m0TermsString, moPartialSum];
};

// Расчет значений тета (для упрощенной формулы дисперсии)
export const m0Xsquare = (tableData) => {
  const { xArr, pArr } = tableData;
  const tetaTerms = xArr.map((xVal, xIndex) => `(${xVal}^2 * ${pArr[xIndex]})`);
  const tetaTermsString = tetaTerms.join(" + ");
  const tetaPartialSum = sum(tetaTerms.map((term) => evaluate(term))).toFixed(
    4,
  );
  return [tetaTermsString, tetaPartialSum];
};

// Расчет эмперической функции распределения
export const calcEmpericFunk = (tableData) => {
  const { xArr, pArr } = tableData;

  const empericDataArr = pArr.map((_, index) =>
    pArr.slice(0, index + 1).reduce((acc, nextPVal) => acc + nextPVal, 0),
  );

  const empericData = [0, ...empericDataArr, 1];
  const empericLabels = [xArr[0] - 1, ...xArr, xArr[xArr.length - 1] + 1];
  return { empericData, empericLabels };
};

// Расчет распределение случайной величины
export const calcDestribution = (tableData) => {
  const { xArr, pArr } = tableData;
  const destributionData = xArr.map((xData, index) => xData * pArr[index]);
  return { destributionData, destributionLabels: xArr };
};
