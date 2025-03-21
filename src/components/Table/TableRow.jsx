import React from "react";
import TableCell from "./TableCell";

function TableRow({ cellType, totalRows }) {
  return (
    <>
      {Array.from({ length: totalRows }, (_, index) => (
        <TableCell
          key={index}
          cellType={cellType}
          cellIndex={index}
          labelledby={`row${index + 1}`}
        />
      ))}
    </>
  );
}

export default TableRow;
