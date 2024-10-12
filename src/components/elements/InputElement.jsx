import { useAtom } from "jotai";
import Input from "../inputs/Input";

function InputElement({ elementAtom }) {
  const [element, setElement] = useAtom(elementAtom);
  return (
    <Input
      onChange={(e) =>
        setElement((prev) => ({
          ...prev,
          value: e.target.value,
        }))
      }
      value={element.value}
    />
  );
}

export default InputElement;
