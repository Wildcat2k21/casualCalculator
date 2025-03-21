function TableHead({ rowsCount }) {
  return (
    <thead className="table-head">
      <tr>
        <th className="table-header">№</th>
        {
          // eslint-disable-next-line react/no-array-index-key
          Array.from({ length: rowsCount }, (_, index) => (
            <th className="table-header" key={index}>
              №{index + 1}
            </th>
          ))
        }
      </tr>
    </thead>
  );
}

export default TableHead;
