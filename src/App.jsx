import { Box } from "@mui/joy";
import Sidebar from "./components/navigation/Sidebar/Sidebar";
import AppRouter from "./Router";
import Header from "./components/Header/Header";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Sidebar />
      <Box sx={{ width: "100%", overflowY: 'auto', height: '100vh' }}>
        <Header />
        <AppRouter />
      </Box>
    </Box>
  );
}

export default App;
