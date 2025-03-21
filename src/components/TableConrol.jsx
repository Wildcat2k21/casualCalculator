import { useState, useEffect } from "react";
import Button from "./UI/Button";
import Table from "./Table/Table";
import "./style.css";

function TableControl({ defaultRowsCount }) {
  const [rowsCount, setRowsCount] = useState(3);

  useEffect(() => {
    setRowsCount(defaultRowsCount);
  }, [defaultRowsCount]);

  const addRowClickHandler = (e) => {
    e.preventDefault();
    if (rowsCount < 20) {
      setRowsCount(rowsCount + 1);
    }
  };

  const removeRowClickHandler = (e) => {
    e.preventDefault();
    if (rowsCount > 1) {
      setRowsCount(rowsCount - 1);
    }
  };

  return (
    <div className="contol-wrapper">
      <Table rowsCount={rowsCount} />
      <div className="table-control">
        <Button value="+" clickHandler={addRowClickHandler} />
        <Button value="-" clickHandler={removeRowClickHandler} />
      </div>
    </div>
  );
}

export default TableControl;
