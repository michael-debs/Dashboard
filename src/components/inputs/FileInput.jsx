import { useRef } from "react";
import Button from "./Button";
import { Box } from "@mui/joy";
import TaskRoundedIcon from "@mui/icons-material/TaskRounded";

const FileInput = ({ onChange, value, style, ...props }) => {
  const buttonRef = useRef();

  const handleButtonClick = () => {
    buttonRef.current.click();
  };

  return (
    <Box>
      <input
        type="file"
        ref={buttonRef}
        style={{ display: "none" }}
        onChange={onChange}
      />
      <Button
        style={{
          fontWeight: "normal",
          textDecoration: value ? "underline" : "none",
          display: "flex",
          gap: "5px",
          ...style,
        }}
        {...props}
        type="button"
        onClick={handleButtonClick}
      >
        {value && <TaskRoundedIcon sx={{ color: "#559cba" }} />}
        {value || "Select a file"}
      </Button>
    </Box>
  );
};

export default FileInput;
