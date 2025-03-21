import TableRow from "./TableRow";

function TableBody({ firstRowName, secondRowName, rowsCount }) {
  return (
    <tbody className="table-body">
      <tr className="table-row">
        <th className="table-header">{firstRowName}</th>
        <TableRow cellType="X" totalRows={rowsCount} />
      </tr>
      <tr className="table-row">
        <th className="table-header">{secondRowName}</th>
        <TableRow cellType="P" totalRows={rowsCount} />
      </tr>
    </tbody>
  );
}

export default TableBody;
