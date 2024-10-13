import { Table } from "@mui/joy";
import { useAtomValue } from "jotai";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

function SmartTable({ columns, dataAtom, showCheckboxes, store }) {
  const rows = useAtomValue(dataAtom);
  return (
    <Table>
      <thead>
        <TableHeader
          columns={columns}
          rows={rows}
          showCheckboxes={showCheckboxes}
          store={store}
        />
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <TableRow
            key={index}
            row={row}
            columns={columns}
            showCheckboxes={showCheckboxes}
            rowsAtom={dataAtom}
            rowIndex={index}
          />
        ))}
      </tbody>
    </Table>
  );
}

export default SmartTable;
