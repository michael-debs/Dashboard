import { Select as SelectJoy, Option } from "@mui/joy";

const Select = ({ options, style, ...props }) => {
  return (
    <SelectJoy
      style={{
        borderRadius: "25px",
        ...style,
      }}
      {...props}
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </SelectJoy>
  );
};

export default Select;
