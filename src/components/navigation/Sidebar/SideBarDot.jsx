import { Box } from "@mui/joy";

function SideBarDot() {
  return (
    <Box
      sx={{
        position: "absolute",
        height: 40,
        width: 40,
        top: -10,
        right: -20,
        borderRadius: "50%",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 20,
          height: 20,
          top: -15,
          right: 20,
          backgroundColor: "transparent",
          borderBottomRightRadius: 20,
          boxShadow: "10px 0 white",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          width: 10,
          height: 10,
          top: "calc(50% - 5px)",
          right: "50%",
          borderRadius: "50%",
          backgroundColor: "#707070",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          width: 20,
          height: 20,
          bottom: -15,
          right: 20,
          backgroundColor: "transparent",
          borderTopRightRadius: 20,
          boxShadow: "10px 0 white",
        }}
      ></Box>
    </Box>
  );
}

export default SideBarDot;