import { atom } from "jotai";
import LabelElement from "../../../../../components/elements/LabelElement";
import InputElement from "../../../../../components/elements/InputElement";

export function generateTableColumns() {
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

export function generateTableRows() {
  return atom([
    {
      keys: {
        extension: atom({ value: "Txt" }),
        type: atom({ value: "Document" }),
        maxSize: atom({ value: 20 }),
      },
      selectedAtom: atom(true),
    },
    {
      keys: {
        extension: atom({ value: "png" }),
        type: atom({ value: "Image" }),
        maxSize: atom({ value: 30 }),
      },
      selectedAtom: atom(true),
    },
    {
      keys: {
        extension: atom({ value: "mov" }),
        type: atom({ value: "Video" }),
        maxSize: atom({ value: "" }),
      },
      selectedAtom: atom(false),
    },
    {
      keys: {
        extension: atom({ value: "jpeg" }),
        type: atom({ value: "Image" }),
        maxSize: atom({ value: "" }),
      },
      selectedAtom: atom(false),
    },
    {
      keys: {
        extension: atom({ value: "pdf" }),
        type: atom({ value: "Document" }),
        maxSize: atom({ value: "" }),
      },
      selectedAtom: atom(false),
    },
  ]);
}
