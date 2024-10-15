import { useAtom } from "jotai";
import { memo } from "react";
import CheckBox from "../../inputs/CheckBox";

const TableRow = memo(function TableRow({
  row,
  columns,
  showCheckboxes,
  rowsAtom,
  rowIndex,
}) {
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
          <td
            key={key}
            style={{ ...columns[index].style, ...{ padding: "30px 0" } }}
          >
            <Component
              elementAtom={row.keys[key]}
              rowsAtom={rowsAtom}
              rowIndex={rowIndex}
            />
          </td>
        );
      })}
    </tr>
  );
});

function TableRowCheckBoxComponent({ selectedAtom }) {
  const [selected, setSelected] = useAtom(selectedAtom);
  return (
    <CheckBox
      checked={selected}
      onChange={(e) => setSelected(e.target.checked)}
    />
  );
}

export default TableRow;
