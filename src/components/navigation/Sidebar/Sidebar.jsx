import { Box } from "@mui/joy";
import SideBarHeader from "./SideBarHeader";
import SideBarContent from "./SideBarContent";

function Sidebar() {
  return (
    <Box
      sx={{
        width: 270,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, rgba(241,236,214,1) 0%, rgba(121,170,181,0.3) 100%)",
        overflowX: 'hidden',
        overflowY: 'auto',
      }}
    >
      <SideBarHeader />
      <SideBarContent />
    </Box>
  );
}

export default Sidebar;
