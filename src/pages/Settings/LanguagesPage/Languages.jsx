import { Box } from "@mui/joy";
import { atom, createStore, Provider } from "jotai";
import { useMemo } from "react";
import SmartTable from "../../../components/common/SmartTable/SmartTable";
import {
  generateTableRows,
  generateTableColumns,
  addRow,
} from "./utils/atomGenerators/languagesTableAtomGenerators.jsx";
import Button from "../../../components/inputs/Button.jsx";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import TranslatorVendor from "./components/TranslatorVendor.jsx";

function Languages() {
  const store = useMemo(() => createStore(), []);
  const dataAtom = useMemo(() => generateTableRows(), []);
  const columns = useMemo(() => generateTableColumns(), []);
  const translatorVendorAtom = useMemo(() => atom('google'), [])

  return (
    <Provider store={store}>
      <Box
        sx={{
          padding: "0 65px",
          paddingBottom: '100px'
        }}
      >
        <h4
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            fontWeight: "normal",
          }}
        >
          Supported Languages
        </h4>
        <SmartTable columns={columns} dataAtom={dataAtom} store={store} />
        <Button
          style={{
            color: "#3d7073",
          }}
          onClick={() => {
            addRow({ rowsAtom: dataAtom, store });
          }}
        >
          {" "}
          <AddRoundedIcon /> Add more languages
        </Button>
        <TranslatorVendor translatorVendorAtom={translatorVendorAtom} />
      </Box>
    </Provider>
  );
}

export default Languages;
