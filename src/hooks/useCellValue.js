import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setXvalue, updXValue, removeXvalue } from "../store/xArrReducer";
import { setPvalue, updPValue, removePvalue } from "../store/pArrReducer";

export const useCellValue = (cellType, cellIndex) => {
  const dispatch = useDispatch();
  const value = useSelector((state) =>
    cellType === "X" ? state.xArr[cellIndex] : state.pArr[cellIndex],
  );
  const [inputVal, setInputVal] = useState(0);

  useEffect(() => {
    if (value === undefined) {
      dispatch(cellType === "X" ? setXvalue(0) : setPvalue(0));
    } else {
      setInputVal(value);
    }
  }, [value, dispatch, cellType]);

  useEffect(
    () =>
      // очищаем значение в стейте
      () => {
        dispatch(
          cellType === "X" ? removeXvalue(cellIndex) : removePvalue(cellIndex),
        );
      },
    [cellIndex, cellType, dispatch],
  );

  // Быстрый ввод чисел с точкой 0.x
  const fastZeroLeftNumConvert = useCallback((newVal) => {
    if (
      !Number.isNaN(Number(newVal)) &&
      newVal.length >= 2 &&
      newVal[0] === "0" &&
      newVal[1] !== "."
    ) {
      return `0.${newVal.slice(1)}`;
    }

    return newVal;
  }, []);

  // Обработка изменения инпута
  const handleInputChange = useCallback((e) => {
    setInputVal(e.target.value);
  }, []);

  // Установка значения и потеря фокуса при нажатии Enter
  const handleEnterPress = useCallback(
    (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const fastZeroLeftNum = fastZeroLeftNumConvert(e.target.value);
        setInputVal(fastZeroLeftNum);
        e.target.blur();
      }
    },
    [fastZeroLeftNumConvert],
  );

  // Обработка потери фокуса при выборе другой ячейки
  const handleInputBlur = useCallback(() => {
    const fastZeroLeftNum = fastZeroLeftNumConvert(inputVal);
    const fixedVal = Number(fastZeroLeftNum);
    if (!Number.isNaN(fixedVal)) {
      dispatch(
        cellType === "X"
          ? updXValue(fixedVal, cellIndex)
          : updPValue(fixedVal, cellIndex),
      );
    }

    setInputVal(value);
  }, [inputVal, dispatch, fastZeroLeftNumConvert, cellType, cellIndex, value]);

  return {
    inputVal,
    handleInputChange,
    fastZeroLeftNumConvert,
    handleEnterPress,
    handleInputBlur,
  };
};
