import { useEffect, useState } from "react";
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

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      // Установка значения и потеря фокуса при нажатии Enter
      setInputVal(e.target.value);
      e.target.blur();
    }

    // other Keys
  };

  const handleInputBlur = () => {
    const fixedVal = Number(inputVal);
    if (!Number.isNaN(fixedVal)) {
      dispatch(
        cellType === "X"
          ? updXValue(fixedVal, cellIndex)
          : updPValue(fixedVal, cellIndex),
      );
    }

    setInputVal(value);
  };

  return { inputVal, handleInputChange, handleKeyPress, handleInputBlur };
};
