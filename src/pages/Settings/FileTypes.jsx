import { Box } from "@mui/joy";
import SmartTable from "../../components/common/SmartTable/SmartTable";
import { useMemo } from "react";
import { atom, createStore, Provider } from "jotai";
import LabelElement from "../../components/elements/LabelElement";
import InputElement from "../../components/elements/InputElement";

function generateTableColumns() {
  return [
    {
      key: "extension",
      label: "Extension",
      component: LabelElement,
    },
    {
      key: "type",
      label: "Type",
      component: LabelElement,
    },
    {
      key: "maxSize",
      label: "Max file size (MB)",
      component: InputElement,
    },
  ];
}

function generateTableRows() {
  return atom([
    {
      keys: {
        column1: atom({ value: "Txt" }),
        column2: atom({ value: "Document" }),
        column3: atom({ value: 20 }),
      },
      selectedAtom: atom(true),
    },
    {
      keys: {
        column1: atom({ value: "png" }),
        column2: atom({ value: "Image" }),
        column3: atom({ value: 30 }),
      },
      selectedAtom: atom(true),
    },
    {
      keys: {
        column1: atom({ value: "mov" }),
        column2: atom({ value: "Video" }),
        column3: atom({ value: "" }),
      },
      selectedAtom: atom(false),
    },
    {
      keys: {
        column1: atom({ value: "jpeg" }),
        column2: atom({ value: "Image" }),
        column3: atom({ value: "" }),
      },
      selectedAtom: atom(false),
    },
    {
      keys: {
        column1: atom({ value: "pdf" }),
        column2: atom({ value: "Document" }),
        column3: atom({ value: "" }),
      },
      selectedAtom: atom(false),
    },
  ]);
}

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
