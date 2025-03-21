import { forwardRef } from "react";
import Input from "../UI/Input";
import { useCellValue } from "../../hooks/useCellValue";

// Компонент с forwardRef
const TableCell = forwardRef(({ cellType, cellIndex, labelledby }, ref) => {
  const { inputVal, handleInputChange, handleInputBlur } = useCellValue(
    cellType,
    cellIndex,
  );

  return (
    <td className="table-data">
      <Input
        ref={ref}
        value={inputVal}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        labelledby={labelledby}
      />
    </td>
  );
});

export default TableCell;
