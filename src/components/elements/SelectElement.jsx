import { useAtom, useAtomValue } from "jotai";
import Select from "../inputs/Select";
import { loadable } from "jotai/utils";

const SelectElement = ({ elementAtom }) => {
  const [element, setElement] = useAtom(elementAtom);
  const options = useAtomValue(loadable(element.optionsAtom));

  const handleChange = (e, newValue) => {
    setElement((prev) => ({
      ...prev,
      value: newValue,
    }));
  };

  return (
    <Select
      style={element.style}
      value={element.value}
      options={options.state === 'hasData' ? options.data : []}
      onChange={handleChange}
    />
  );
};

export default SelectElement;
