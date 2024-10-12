import { Checkbox } from "@mui/joy";
import { useAtom } from "jotai";
import { memo } from "react";

const TableRow = memo(function TableRow({ row, columns, showCheckboxes }) {
  return (
    <tr>
      {showCheckboxes && (
        <td style={{ padding: "30px 8px" }}>
          <TableRowCheckBoxComponent selectedAtom={row.selectedAtom} />
        </td>
      )}

      {Object.keys(row.keys).map((key, index) => {
        const Component = columns[index].component;

        return (
          <td key={key} style={{ padding: "30px 0" }}>
            <Component elementAtom={row.keys[key]} />
          </td>
        );
      })}
    </tr>
  );
});

function TableRowCheckBoxComponent({ selectedAtom }) {
  const [selected, setSelected] = useAtom(selectedAtom);
  return (
    <Checkbox
      checked={selected}
      onChange={(e) => setSelected(e.target.checked)}
    />
  );
}

export default TableRow;
