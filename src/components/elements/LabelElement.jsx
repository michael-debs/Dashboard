import { Typography } from "@mui/joy";
import { useAtomValue } from "jotai";

function LabelElement({ elementAtom }) {
  const element = useAtomValue(elementAtom);
  return (
    <Typography sx={element.style} variant="body1">
      {element.value}
    </Typography>
  );
}

export default LabelElement;
