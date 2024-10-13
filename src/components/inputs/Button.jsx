import { Button as ButtonJoy } from "@mui/joy";

function Button({ children, ...props }) {
return (
    <ButtonJoy
        sx={{
            padding: 0,
            background: "unset",
            "&:hover": {
                background: "unset",
            },
            color: 'black'
        }}
        {...props}
    >
        {children}
    </ButtonJoy>
);
}

export default Button;
