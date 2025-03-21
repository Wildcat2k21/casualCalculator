import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import "./style.css";

export default function DataTable({ rowsCount }) {
  return (
    <table border="1" className="table">
      <TableHead rowsCount={rowsCount} />
      <TableBody firstRowName="X" secondRowName="P" rowsCount={rowsCount} />
    </table>
  );
}
