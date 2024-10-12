import { Input as InputJoy } from "@mui/joy";

function Input(props) {
  return (
    <InputJoy
      sx={{
        width: "100%",
        borderRadius: "25px",
      }}
      {...props}
    />
  );
}

export default Input;
