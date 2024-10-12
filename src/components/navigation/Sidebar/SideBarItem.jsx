import { Box } from "@mui/joy";
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import SideBarDot from "./SideBarDot";

function SideBarItem({ item }) {
  const location = useLocation();
  const isActive = useMemo(
    () => location.pathname === item.path,
    [item.path, location.pathname]
  );
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
      }}
    >
      {item.children.length > 0 && (
        <Box
          sx={{
            position: "absolute",
            top: 28,
            left: 8,
            width: 2,
            height: "calc(100% - 85px)",
            backgroundColor: "#0003",
          }}
        ></Box>
      )}

      <Box
        sx={{
          width: "100%",
          marginBottom: 6,
          display: "flex",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        {item.icon && (
          <item.icon
            style={{
              opacity: 0.4,
              width: 18,
            }}
          />
        )}
        <Link
          style={{
            opacity: isActive ? 1 : 0.5,
            fontWeight: isActive ? "bold" : "normal",
          }}
          to={item.path}
        >
          {item.name}
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: 3,
        }}
      >
        {item.children.map((child, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 8,
                left: -14,
                width: 13,
                height: 2,
                backgroundColor: "#0003",
              }}
            ></Box>
            <SideBarItem item={child} />
          </Box>
        ))}
      </Box>
      {isActive && <SideBarDot />}
    </Box>
  );
}

export default SideBarItem;

