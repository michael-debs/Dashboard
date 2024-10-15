import { useAtom } from "jotai";
import { memo } from "react";
import CheckBox from "../../inputs/CheckBox";
import { Box } from "@mui/joy";

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
          <td key={key}>
            <Box
              style={{
                ...{ padding: "30px 0", height: "100%" },
                ...columns[index].style,
              }}
            >
              <Component
                elementAtom={row.keys[key]}
                rowsAtom={rowsAtom}
                rowIndex={rowIndex}
              />
            </Box>
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
