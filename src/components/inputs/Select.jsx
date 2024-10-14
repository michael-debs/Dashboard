import { Box } from "@mui/joy";
import Button from "./Button";
import { useMemo, useRef, useState } from "react";
import { useEffect } from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { FixedSizeList as List } from "react-window";

const Select = ({ options, onChange, value, style, ...props }) => {
  const [dropDownOpened, setDropDownOpened] = useState(false);
  const labelValue = useMemo(
    () => options.find((o) => o.value === value)?.label,
    [options, value]
  );
  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setDropDownOpened(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropDownRef]);

  function renderRow({ index, style }) {
    return (
      <SelectOption
        label={options[index].label}
        value={options[index].value}
        onClick={(value) => {
          setDropDownOpened(false);
          onChange(value);
        }}
        key={options[index].value}
        style={style}
      />
    );
  }

  return (
    <Box
      sx={{
        position: "relative",
      }}
      style={style}
    >
      <Button
        onClick={() => setDropDownOpened(true)}
        style={{
          opacity: 0.5,
          width: "100%",
          height: "100%",
          border: "1px solid #00000055",
          borderRadius: "25px",
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "4px 15px",
        }}
        {...props}
      >
        {labelValue || null}
        <KeyboardArrowDownRoundedIcon
          sx={{
            width: "35px",
            height: "35px",
          }}
        />
      </Button>
      {dropDownOpened && (
        <Box
          sx={{
            position: "absolute",
            top: "-15px",
            right: "calc(-100% - 20px)",
            width: "100%",
            borderRadius: "25px",
            padding: "25px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "10px 10px 50px 1px rgba(0, 0, 0, 0.2)",
            background: "white",
            zIndex: "2",
          }}
          ref={dropDownRef}
        >
          <Box
            sx={{
              width: 0,
              height: 0,
              borderBottom: "15px solid transparent",
              borderTop: "15px solid transparent",
              borderRight: "30px solid white",
              position: "absolute",
              left: "-15px",
              top: 15,
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              zIndex: "3",
              overflowY: "auto",
            }}
          >
            <List
              height={Math.min(300, options.length * 36)} // Adjust the height as needed
              itemCount={options.length}
              itemSize={35} // Height of each item in the list
              width="100%"
            >
              {renderRow}
            </List>
          </Box>
        </Box>
      )}
    </Box>
  );
};

function SelectOption({ label, value, onClick, style }) {
  return (
    <Button
      style={{
        padding: "10px 0",
        opacity: 0.8,
        ...style,
      }}
      onClick={() => {
        onClick(value);
      }}
    >
      {label}
    </Button>
  );
}

export default Select;
