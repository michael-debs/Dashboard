import { Box } from "@mui/joy";
import SmartTable from "../../../components/common/SmartTable/SmartTable";
import { useMemo } from "react";
import { createStore, Provider } from "jotai";
import { generateTableColumns, generateTableRows } from "./utils/atomGenerators/fileTypesTableAtomGenerators";

function FileTypes() {
  const store = useMemo(() => createStore(), []);
  const dataAtom = useMemo(() => generateTableRows(), []);
  const columns = useMemo(() => generateTableColumns(), []);

  return (
    <Provider store={store}>
      <Box
        sx={{
          padding: "0 80px",
        }}
      >
        <SmartTable
          columns={columns}
          dataAtom={dataAtom}
          showCheckboxes={true}
          store={store}
        />
      </Box>
    </Provider>
  );
}

export default FileTypes;
