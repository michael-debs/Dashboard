import { Box } from "@mui/joy";
import routes from "../../../constants/routes";
import SideBarItem from "./SideBarItem";

function SideBarContent() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        paddingLeft: 4,
      }}
    >
      {routes.map((child, index) => (
        <SideBarItem item={child} key={index} />
      ))}{" "}
    </Box>
  );
}


export default SideBarContent;
