import { useAtomValue, useSetAtom } from "jotai";
import Button from "../inputs/Button";

function ButtonElement({ elementAtom, rowsAtom, rowIndex }) {
  const element = useAtomValue(elementAtom);
  const onClick = useSetAtom(element.onClickAtom);

  return (
    <Button
      style={element.style}
      onClick={(e) => onClick({e, rowsAtom, rowIndex})} 
    >
      {element.value}
    </Button>
  );
}

export default ButtonElement;
