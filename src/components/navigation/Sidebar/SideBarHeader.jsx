import { Avatar, Box, Typography } from "@mui/joy";

function SideBarHeader() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "70px",
        padding: "20px 0px 70px 0px",
      }}
    >
      <img
        style={{
          color: "black",
          width: "150px",
        }}
        src="https://hapster.io/wp-content/uploads/2023/06/logo-hapster.svg"
        alt="Hapster Logo"
      />
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ width: "50px", height: "50px" }} />
        <Typography sx={{ fontWeight: 'bold', color: 'black' }} variant="h6">Lucie Perrin</Typography>
      </Box>
    </Box>
  );
}

export default SideBarHeader;
