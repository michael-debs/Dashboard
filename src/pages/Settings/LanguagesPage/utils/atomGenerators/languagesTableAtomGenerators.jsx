import { atom } from "jotai";
import ButtonElement from "../../../../../components/elements/ButtonElement";
import DeleteIcon from "@mui/icons-material/Delete";
import SelectElement from "../../../../../components/elements/SelectElement";
import FileInputElement from "../../../../../components/elements/FileInputElement";

const languagesAtom = atom(async () => {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=languages"
  );
  const countries = await response.json();
  const languages = [];
  const seenCodes = new Set();

  countries.forEach((country) => {
    Object.entries(country.languages).forEach(([code, name]) => {
      if (!seenCodes.has(code)) {
        languages.push({ value: code, label: name });
        seenCodes.add(code);
      }
    });
  });

  return languages;
});

export function generateTableColumns() {
  return [
    {
      key: "language",
      label: "Language",
      component: SelectElement,
    },
    {
      key: "dictionary",
      label: "Dictionary File",
      component: FileInputElement,
    },
    {
      key: "delete",
      label: "",
      component: ButtonElement,
      style: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: "30px",
      },
    },
  ];
}

export function generateTableRows() {
  return atom([
    {
      keys: {
        language: generateLanguageSelectAtom({ value: "eng" }),
        dictionary: atom({ value: "Document" }),
        delete: generateDeleteButtonAtom(),
      },
    },
    {
      keys: {
        language: generateLanguageSelectAtom({ value: "fra" }),
        dictionary: atom({ value: "Image" }),
        delete: generateDeleteButtonAtom(),
      },
    },
    {
      keys: {
        language: generateLanguageSelectAtom({ value: "spa" }),
        dictionary: atom({ value: "Video" }),
        delete: generateDeleteButtonAtom(),
      },
    },
  ]);
}

export function generateDeleteRowButtonAtom() {
  return atom(null, (get, set, { rowIndex, rowsAtom }) => {
    set(rowsAtom, (rows) => {
      const newRows = [...rows];
      newRows.splice(rowIndex, 1);
      return newRows;
    });
  });
}

function generateLanguageSelectAtom({ value }) {
  return atom({
    value,
    optionsAtom: languagesAtom,
    style: {
      width: "50%",
    },
  });
}

export function generateDeleteButtonAtom() {
  return atom({
    value: <DeleteIcon />,
    style: { color: "#7e0002" },
    onClickAtom: generateDeleteRowButtonAtom(),
  });
}

export function addRow({ store, rowsAtom }) {
  store.set(rowsAtom, (rows) => {
    return [
      ...rows,
      {
        keys: {
          language: generateLanguageSelectAtom({ value: "" }),
          dictionary: atom({ value: "" }),
          delete: generateDeleteButtonAtom(),
        },
      },
    ];
  });
}
