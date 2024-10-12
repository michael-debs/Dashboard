import { Box } from "@mui/joy";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import routes from "../../constants/routes";

function Header() {
  const location = useLocation();
  const RouteName = useMemo(() => {
    let routeName = "Unknown";
    const path = location.pathname;
    routes.forEach((route) => {
      if (route.path === path) {
        routeName = route.name;
        return;
      }
      route.children.forEach((child) => {
        if (child.path === path) {
          routeName = child.name;
          return;
        }
      });
    });

    return routeName;
  }, [location.pathname]);
  return (
    <Box
      sx={{
        width: "100%",
        height: 100,
        display: "flex",
        alignItems: "center",
        paddingLeft: 8,
      }}
    >
      <h2>{RouteName}</h2>
    </Box>
  );
}

export default Header;
