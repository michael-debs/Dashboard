import { Checkbox } from "@mui/joy";

function TableHeader({ showCheckboxes, rows, store, columns }) {
  return (
    <tr>
      {showCheckboxes && (
        <th
          style={{
            width: "50px",
            paddingBottom: "10px",
          }}
        >
          <Checkbox
            onChange={(e) => {
              rows.forEach((row) =>
                store.set(row.selectedAtom, e.target.checked)
              );
            }}
          />
        </th>
      )}

      {columns.map((column) => (
        <th
          style={{
            paddingBottom: "15px",
          }}
          key={column.key}
        >
          {column.label}
        </th>
      ))}
    </tr>
  );
}

export default TableHeader;
